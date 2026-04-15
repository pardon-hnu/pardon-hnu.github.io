---
title: "Efficient Structural Clustering over Hypergraphs"
collection: publications
category: papers
permalink: /publication/paper-2
authors: '**Dong Pan**, Xu Zhou*, Lingwei Li, Quanqing Xu*, Chuanhui Yang, Chenhao Ma, KenLi Li.'
date: 2025-03-26
venue: 'IEEE 41st International Conference on Data Engineering (ICDE)'
paperurl: 'https://ieeexplore.ieee.org/document/11113079'
codeurl: 'https://github.com/pardon-hnu/Hyper-SCAN'
---

Structural Graph Clustering is a well-known problem that aims to identify clusters and distinguish between special roles, such as hub and outlier. However, SCAN, the fundamental structural clustering model, is designed for pairwise graphs and fails to capture the unique structural information inherent in hypergraphs when clustering hypergraphs. Motivated by this, we propose a new structural clustering model, HSCAN, specifically for hypergraphs. We further design an Order-Index to accelerate fetching the key information of the HSCAN and a Lightweight Similarity Bucket Index to reduce the index cost. Next, we present an index-based sequential query algorithm with high performance and a parallel query algorithm to process large hypergraphs faster. Additionally, we provide the algorithms for constructing Order-Index and Lightweight Similarity Bucket Index. Extensive experiments on both real-world and synthetic datasets show that HSCAN performs better than existing models, and the two index-based query algorithms are up to three orders of magnitude faster than the existing algorithm.