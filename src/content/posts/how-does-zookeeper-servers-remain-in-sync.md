---
title: "How Does Zookeeper Servers Remain In sync?"
summary: "Leader and Followers"
publishedOn: 2020-03-30
tags:
  - distributed-systems
  - technology
  - software-development
  - big-data
  - programming
featured: false
---

> Originally published on Medium: [How Does Zookeeper Servers Remain In sync?](https://codeburst.io/how-does-zookeeper-servers-remain-in-sync-21e9b085e639?source=rss-2c9d8b2edb6e------2)

![](https://cdn-images-1.medium.com/max/1024/0*n9XPXWHyUmGFYgBM)
_Photo by [Gabriel Gusmao](https://unsplash.com/@gcsgpp?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com/?utm_source=medium&utm_medium=referral)_

[Apache Zookeeper](https://zookeeper.apache.org/) is probably one of the most amusing and intricate distributed frameworks. It is generally used as an intermediary to keep distributed servers in sync. Implementing sync ourselves can lead to multiple race conditions. So, Developers use Zookeeper in various systems without even thinking twice about any alternative. The wide adoption serves as a testament to its robustness and performance.

A question then pops up: How does Zookeeper manage to keep its servers in sync. You can’t use a parent zookeeper to manage a child zookeeper, thus creating inception like scenario without the limbo.

Hopefully, this article will try to answer the above query.

#### Leader and Followers

Zookeeper servers always have one leader which manages the complete data. All writes first happen on the leader and then are synced to followers. The leader helps in deciding authority over the correct state at a time and provides a single point of coordination.

Reads can happen from any of the servers, including the leader. It is entirely possible that some follower is not in sync with the leader, and you might end up reading an older state.

To keep Followers and Leaders in sync, Zookeeper uses the ZAB protocol.

### ZAB

Zookeeper leader keeps all the followers in sync using its custom protocol called **ZAB (Zookeeper Atomic Broadcast Protocol)**. It is a custom protocol designed for Zookeeper to solve challenges such as maintaining causal order among the data shared. All the state changes (known as transactions) in ZAB are idempotent and incremental. So applying a state change multiple times produces the same result. However, the order of changes needs to be maintained.  
A transaction in ZAB is identified by a unique identifier called zxid which is a 64-bit integer composed of two 32-bit slices -

-   **Epoch** - An integer that is incremented every time a leader election happens.
-   **Counter** - An integer counter that is incremented after every valid transaction.

ZAB Protocol consists of three phases —

1\. **Discovery** — determine who is the leader and how much data is missing

2\. **Synchronization** — sync all the servers so that the missing data is updated

3\. **Broadcast** — start transmitting transaction occurring in real-time

Before discussing each of these phases in detail, we need to understand what are the necessary guarantees that the protocol provides that make each of the above phases effective.

ZAB provides 3 necessary guarantees which are:

-   **Integrity** — If a process receives a transaction with zxid **Z** than some other process has broadcast a transaction with zxid **Z**
-   **Total Order** — If a process delivers transaction with zxid **Z** before one with zxid **Z'** , than any other process which delivers **Z'** must also deliver z, and it should deliver **Z** before **Z'**
-   **Agreement** — If a process delivers z and another one delivers **Z’** , then either the first process should deliver **Z’** or the second process should deliver **Z**. This guarantees that the state of the two processes does not diverge.

These three safety properties guarantee that the final state of all the servers is consistent once all the transactions have been delivered to each other.

All the phases occurring in ZAB are quite similar to two-phased commits. First, a proposal is sent by the leader, the follower on the receiving end sends an ACK, and then a commit is sent by the leader to complete the transaction.

#### Discovery

In this phase, the leader and follower decide which server contains the true history of the transactions which have occurred until now.  
A prospective leader is chosen first using a simple leader election algorithm.  
The process contains the following exchanges:

1.  Follower sends the last proposed epoch to the prospective leader.
2.  The leader gets last accepted epoch from a quorum of followers and sends a new epoch, which is greater than all the epochs it has received.
3.  If the new epoch is greater than last proposed epoch, followers update their proposed epoch and send their last acknowledged epoch along with their last zxid to leaders
4.  The leader selects the history of the follower with the highest zxid and epoch as the truth.

![](https://cdn-images-1.medium.com/max/942/1*wNKacZZfWdHtyUKOEXIhpA.png)

Zookeeper performs an optimization where it selects the server with the highest epoch and zxid as the prospective leader so that it already has all the data which needs to be synced. The following piece of code in **_FastLeaderElection.java_** in Zookeeper checks the following-

/\*\*  
     \* Check if a pair (server id, zxid) succeeds our  
     \* current vote.  
     \*  
     \* @param id    Server identifier  
     \* @param zxid  Last zxid observed by the issuer of this vote  
     \*/  
    protected boolean totalOrderPredicate(long newId, long newZxid, long newEpoch, long curId, long curZxid, long curEpoch) {  
        LOG.debug("id: " + newId + ", proposed id: " + curId + ", zxid: 0x" +  
                Long.toHexString(newZxid) + ", proposed zxid: 0x" + Long.toHexString(curZxid));  
        if(self.getQuorumVerifier().getWeight(newId) == 0){  
            return false;  
        }  
  
        /\*  
         \* We return true if one of the following three cases hold:  
         \* 1- New epoch is higher  
         \* 2- New epoch is the same as current epoch, but new zxid is higher  
         \* 3- New epoch is the same as current epoch, new zxid is the same  
         \*  as current zxid, but server id is higher.  
         \*/  
  
        return ((newEpoch > curEpoch) ||  
                ((newEpoch == curEpoch) &&  
                ((newZxid > curZxid) || ((newZxid == curZxid) && (newId > curId)))));  
    }

#### Synchronisation

In this phase, the history of transactions is synced across all the followers.

1.  The prospective leader proposes itself as the new leader since it has the highest zxid and epoch.
2.  If the followers’ last accepted proposal has the same epoch as the new leader, it sets its current epoch as the same, sends ACK to the leader, and starts accepting all the missing transactions through a DIFF call.
3.  Upon receiving the ACK from a quorum of followers, the leader sends a commit message and delivers all the missing transactions to the followers.

![](https://cdn-images-1.medium.com/max/942/1*3GzIaOvafpDstkk8wEHaSg.jpeg)

This synchronisation phase also prevents causal conflicts. It guarantees that all processes in the quorum deliver transactions of prior epochs before transactions of the new epoch e are proposed.

#### Broadcast

This is the phase that occurs after a quorum of servers has decided a leader, appended the missing data, and is ready to accept new transactions.

1.  Leader proposes a transaction with zxid higher than all previous ids
2.  Followers accept the proposed transaction from the leader and append it to their history. An ACK messaged is sent once the transaction is written to durable storage.
3.  If the leader received ACK from a quorum of followers for the transaction, then it sends a commit message.
4.  Followers on receiving a commit message broadcast the transactions among each other.

![](https://cdn-images-1.medium.com/max/942/1*eSoaoRe1FtJidNgw9ZSXNQ.jpeg)

Each server in zookeeper executes one iteration of this protocol at a time. In case of an exception, such as epoch not matching with the leader, the servers can start a new iteration beginning from the first phase.

You can refer the following links to learn more about Zookeeper’s internals:

1.  [Zab: High-performance broadcast for primary-backup systems](https://marcoserafini.github.io/papers/zab.pdf)
2.  [ZooKeeper Internals](https://zookeeper.apache.org/doc/r3.6.0/zookeeperInternals.html)
3.  [ZooKeeper: Distributed Process Coordination](http://shop.oreilly.com/product/0636920028901.do)
