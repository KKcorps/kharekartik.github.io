export type SoundEffect = 'start' | 'move' | 'shoot' | 'hit' | 'score' | 'power' | 'wall' | 'win' | 'lose' | 'pause';

type SoundStep = [frequency: number, offset: number, duration: number];

const SOUND_PATTERNS: Record<SoundEffect, SoundStep[]> = {
	start: [[523, 0, 0.055], [784, 0.06, 0.08]],
	move: [[196, 0, 0.025]],
	shoot: [[880, 0, 0.045], [1320, 0.035, 0.035]],
	hit: [[140, 0, 0.045], [90, 0.035, 0.055]],
	score: [[660, 0, 0.035], [990, 0.035, 0.045]],
	power: [[330, 0, 0.045], [494, 0.045, 0.045], [740, 0.09, 0.06]],
	wall: [[110, 0, 0.04]],
	win: [[523, 0, 0.07], [659, 0.075, 0.07], [784, 0.15, 0.12]],
	lose: [[220, 0, 0.08], [165, 0.08, 0.08], [110, 0.16, 0.16]],
	pause: [[392, 0, 0.05], [196, 0.055, 0.06]],
};

declare global {
	interface Window {
		webkitAudioContext?: typeof AudioContext;
	}
}

export class ChipSound {
	private context: AudioContext | null = null;
	private enabled = true;
	private lastPlayed = new Map<SoundEffect, number>();

	private getContext() {
		if (!this.enabled) return null;
		if (!this.context) {
			const AudioContextClass = window.AudioContext ?? window.webkitAudioContext;
			if (!AudioContextClass) {
				this.enabled = false;
				return null;
			}
			try {
				this.context = new AudioContextClass();
			} catch {
				this.enabled = false;
				return null;
			}
		}
		if (this.context.state === 'closed') {
			this.enabled = false;
			return null;
		}
		if (this.context.state === 'suspended') void this.context.resume().catch(() => undefined);
		return this.context;
	}

	play(effect: SoundEffect) {
		const context = this.getContext();
		if (!context) return;
		const now = context.currentTime;
		const last = this.lastPlayed.get(effect);
		if (last !== undefined && now - last < 0.035) return;
		this.lastPlayed.set(effect, now);

		SOUND_PATTERNS[effect].forEach(([frequency, offset, duration]) => {
			const oscillator = context.createOscillator();
			const gain = context.createGain();
			oscillator.type = 'square';
			oscillator.frequency.setValueAtTime(frequency, now + offset);
			gain.gain.setValueAtTime(0.0001, now + offset);
			gain.gain.exponentialRampToValueAtTime(0.045, now + offset + 0.006);
			gain.gain.exponentialRampToValueAtTime(0.0001, now + offset + duration);
			oscillator.connect(gain);
			gain.connect(context.destination);
			oscillator.start(now + offset);
			oscillator.stop(now + offset + duration + 0.01);
		});
	}
}
