---
title: "Space-Efficient Indexes for High-Speed Structural Graph Clustering"
collection: publications
category: preprints
permalink: /publication/preprint-2
authors: '**Dong Pan**, Xu Zhou, Yikun Hu, Zhibang Yang, Kenli Li.'
date: 2026-01-17
venue: 'rebuttal completed, under review at SIGMOD 2027 (Round 1)'
# paperurl: 'https://ieeexplore.ieee.org/document/11113079'
# codeurl: 'https://github.com/pardon-hnu/Hyper-SCAN'
---

Structural graph clustering (SCAN) is a fundamental model for  graph clustering, with wide applicability in real-world applications.  State-of-the-art SCAN solutions rely on a common indexing framework tailored for BFS-style clustering, which requires materializing  the similarity graph for neighborhood expansion and maintaining  auxiliary structures for core vertex collection. Accordingly, it results  in substantial space cost, and traversal-based clustering suffers from  a performance bottleneck. In this paper, we address these limitations  by introducing a novel indexing design principle for SCAN, motivated by the key insight that directly retrieving clusters can replace  the BFS-style clustering. We formalize domination relationships between parameter pairs and establish a nested structural property of  SCAN. Building on this property, we propose Forest-Index, which  organizes clusters into a tree structure by fixing one parameter.  Although Forest-Index provably outperforms the common indexing framework in both clustering efficiency and space cost, it still  suffers from storage redundancy and requires a full tree traversal  per query, which limits its practical efficiency. To address these  remaining inefficiencies, we propose PPT-Index, a refined indexing  structure that organizes clusters according to their nesting relationships across two dimensions and explicitly captures inter-cluster  connectivity. Leveraging effective pruning strategies, PPT-Index  aggressively eliminates redundant information while preserving  correctness. Therefore, it achieves substantially lower space consumption while matching or improving clustering performance  compared with Forest-Index. We conduct extensive experiments  on 12 real-world graphs. The results demonstrate that our indexes  deliver up to 58× faster clustering and are up to 126× less storage  than the common indexing framework, confirming their superior  space–time efficiency.