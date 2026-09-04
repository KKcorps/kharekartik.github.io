#!/usr/bin/env python3
"""Style validator for Kartik's blog posts.

    python3 lint.py POST.md

The rules do not vary by venue, so there is no flag. Exit code 1 while any BLOCK stands. REVIEW
findings need a human call, so read each one and say what you decided.

Prose only. Frontmatter, fenced code and URLs are skipped.

Mechanical rules only. Judgment calls are left out on purpose, because a validator nobody trusts
is worse than none. Whether a fragment earns its place, a coined phrase got leaned on, a cut
orphaned a reference, or the structure walks the reader to the answer are all human reads.
See reference/revision-traps.md.
"""
import re
import sys

# Only two-word compounds Kartik writes open. Real prefixes (re-, non-, pre-, mid-, multi-,
# in-memory) are left alone because he keeps them.
PREFIXES = "per|off|zero|type|variable|map|row|built|memory|cross|batch|sort|copy|read|write"
ALLOW_HYPHEN = ("async-profiler", "pre-commit", "map-reduce", "e-mail")
IDENT = re.compile(r"\b([a-z]+[A-Z][A-Za-z]*|[A-Z]{2,}_[A-Z_]+)\b")
VERBS = (r"\b(is|are|was|were|means|sends|calls|hits|stops|starts|runs|does|has|have|gets|goes|"
         r"moves|tells|counts|keeps|holds|makes|takes|picks|reads|writes|builds|drops|default[s]?|"
         r"set|lets|needs|wait[s]?|consume[s]?|return[s]?|polls|replies|flips|fill[s]?)\b")
PROMISE = re.compile(r"(objection|you have a|here is why|the question|spotted it|before reading on|"
                     r"which raises|first, a|\?)\s*$", re.I)


def prose_lines(text):
    """Yield (lineno, line) for body prose only."""
    out, fence, fm = [], False, False
    for i, ln in enumerate(text.split("\n"), 1):
        if ln.strip() == "---" and i == 1:
            fm = True
            continue
        if fm:
            if ln.strip() == "---":
                fm = False
            continue
        if ln.lstrip().startswith("```"):
            fence = not fence
            continue
        if fence:
            continue
        out.append((i, ln))
    return out


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        return 2
    path = sys.argv[1]
    text = open(path).read()
    body = prose_lines(text)
    findings = []

    def add(sev, rule, lineno, detail):
        findings.append((sev, rule, lineno, detail))

    for n, ln in body:
        bare = re.sub(r"https?://\S+|\[[^\]]*\]\([^)]*\)|`[^`]*`", "", ln)

        for m in re.finditer(r",\s+(and|or)\b", bare):
            add("BLOCK", "comma-before-and-or", n, bare[max(0, m.start() - 45):m.end() + 25].strip())

        for m in re.finditer(r":", bare):
            add("BLOCK", "colon", n, bare[max(0, m.start() - 45):m.start() + 25].strip())

        if "—" in bare or "–" in bare:
            add("BLOCK", "dash", n, "em or en dash in prose")
        if ";" in bare:
            add("BLOCK", "semicolon", n, "semicolon in prose")
        if "​" in ln or re.search(r"[\U0001F300-\U0001FAFF☀-➿]", ln):
            add("BLOCK", "emoji", n, "emoji or zero-width char")

        low = bare.lower()
        for m in re.finditer(r"\b(?:%s)-[a-z]+" % PREFIXES, low):
            if not any(a in m.group(0) for a in ALLOW_HYPHEN):
                add("REVIEW", "hyphen-compound", n, m.group(0))

        # a connective plus a bare code name is a log line, not a sentence
        for sent in re.split(r"(?<=[.!?])\s+", bare.strip()):
            s = sent.strip().lstrip("-*0123456789. ")
            if not s or s.startswith(("#", "*[", "**W", "**K", "|")):
                continue
            if len(s.split()) <= 6 and IDENT.search(s) and not re.search(VERBS, s):
                add("BLOCK", "verbless-code-fragment", n, s)
            if re.match(r"^(Then |Next |Finally |And then )?%s" % IDENT.pattern, s) \
                    and not s.startswith("**") and not ln.lstrip().startswith(("- **", "* **")) \
                    and not re.match(r"^\S+\s+(means|is|are)\b", s):
                add("REVIEW", "sentence-opens-on-identifier", n, s[:70])

    # ---- beat breaks: nothing may sit between a setup and its payoff
    raw = [(n, l) for n, l in body if l.strip()]
    for idx, (n, ln) in enumerate(raw):
        is_fig = bool(re.match(r"^\s*[*_]?\[?(FIGURE|figure|!\[)", ln))
        if not is_fig:
            continue
        nxt = raw[idx + 1][1] if idx + 1 < len(raw) else ""
        prv = raw[idx - 1][1] if idx else ""
        if nxt.startswith("#"):
            add("REVIEW", "figure-before-heading", n,
                "figure sits between a section and the next; check it is not splitting a setup")
        if PROMISE.search(prv.strip()):
            add("BLOCK", "beat-break", n,
                "figure sits between a promise and its payoff: %r" % prv.strip()[-60:])

    # ---- forward references to numbered steps before any list exists
    first_list = next((n for n, l in body if re.match(r"^\s*1\.\s", l)), 10 ** 9)
    for n, ln in body:
        if n < first_list and re.search(r"\bstep\s+\d|\bthe (eight|nine|seven|six|five) steps\b", ln, re.I):
            add("BLOCK", "forward-step-reference", n, "names a numbered step before the list exists")

    # ---- show your own code, describe code you are explaining. Counts only, so the call is yours.
    fences = len(re.findall(r"^```", text, re.M)) // 2
    tables = len(re.findall(r"^\|", text, re.M))
    if fences or tables:
        add("REVIEW", "code-and-tables", 0,
            "%d code blocks, %d table rows. Right for your own repo, wrong for someone else's system"
            % (fences, tables))
    idents = {}
    for _, ln in body:
        for m in IDENT.finditer(re.sub(r"`[^`]*`", "", ln)):
            idents[m.group(0)] = idents.get(m.group(0), 0) + 1
    if idents:
        add("REVIEW", "code-identifiers", 0,
            "%d distinct. Keep only what a reader would type or search: %s"
            % (len(idents), ", ".join(sorted(idents)[:14])))

    order = {"BLOCK": 0, "REVIEW": 1}
    findings.sort(key=lambda f: (order[f[0]], f[1], f[2]))
    blocks = sum(1 for f in findings if f[0] == "BLOCK")
    for sev, rule, n, detail in findings:
        where = "L%d" % n if n else "   "
        print("%-6s %-28s %-5s %s" % (sev, rule, where, detail))
    print("\n%d BLOCK, %d REVIEW" % (blocks, len(findings) - blocks))
    return 1 if blocks else 0


if __name__ == "__main__":
    sys.exit(main())
