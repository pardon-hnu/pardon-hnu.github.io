---
title: "Accelerating maximum biplex search over large bipartite graphs"
collection: publications
category: papers
permalink: /publication/paper-1
authors: '**Dong Pan**, Xu Zhou, Wensheng Luo*, Zhibang Yang, Qing Liu, Yunjun Gao, Kenli Li.'
date: 2024-09-21
venue: 'The VLDB Journal'
paperurl: 'https://link.springer.com/article/10.1007/s00778-024-00882-9'
codeurl: 'https://github.com/pardon-hnu/Maximum-Biplex-Search'
---

As a typical most-to-most connected quasi-biclique model, k-biplex allows nodes on each side of a fully connected subgraph to lose at most k connections. In this paper, we investigate the maximum k-biplex search problem to find a k-biplex with the maximum number of edges and prove that it is NP-hard and inapproximable. To solve this problem, we first define a new dense subgraph over a given bipartite graph, named (x, y)-core, based on which a core-based maximum k-biplex search (CMBS) framework is presented by introducing a core-based graph reduction technique. In addition, we design a bidirectional positioning strategy and propose a CMBS+ framework. After that, two exact algorithms, namely a maximum k-biplex search (MBPS) algorithm and a core-based symmetric search (CSS) algorithm, are developed to compute the maximum k-biplex in (x, y)-cores. In particular, MBPS integrates degree-based and 2-hop pruning strategies, and CSS explores symmetric BK branching and early termination strategies. To process large bipartite graphs more effectively, we further develop a heuristic fast search (HFS) algorithm and a FPGA-based parallel HFS (FP-HFS) algorithm, where a two-level parallel architecture at and inside the processing element (PE) is introduced to improve the pipeline. Moreover, a double buffering technique is utilized to overcome the resource limitation of FP-HFS and improve scalability. Extensive experiments conducted on 12 real datasets, as well as two synthetic datasets, demonstrate the efficiency and effectiveness of the proposed algorithms.