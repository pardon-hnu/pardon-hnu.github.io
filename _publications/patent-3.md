---
title: "An Efficient Hypergraph Structural Clustering Method and System"
collection: publications
category: patents
permalink: /publication/patent-3
authors: 'Xu Zhou, Lingwei Li, Zhibang Yang, Zhao Tong, **Dong Pan**, Jing Mei, Kenli Li.'
date: 2025-02-20
venue: 'CN202510186112.9'
# paperurl: 'https://ieeexplore.ieee.org/document/11113079'
# codeurl: 'https://github.com/pardon-hnu/Hyper-SCAN'
---

The present invention discloses an efficient structural clustering method for hypergraphs. The method applies a hyperedge similarity-centered HSCAN model to hypergraphs, achieving efficient structural clustering of hypergraphs from the following three aspects. First, to avoid unnecessary consumption of substantial computational resources caused by repeated computation of structural similarity between hyperedges each time clustering is performed on a hypergraph, and to minimize the memory consumption of the constructed index structure, a lightweight bucket index (BI) is pre-built. This index stores similarity information among all hyperedges in the hypergraph, as well as information indicating under which query parameter values each hyperedge qualifies as a core hyperedge. Second, before each clustering operation on the hypergraph, based on the input query parameter values, all core hyperedges under the current query parameter values and the structurally similar hyperedges corresponding to each core hyperedge are retrieved from the bucket index (BI). Third, based on the retrieved clustering information, a simple and efficient serial clustering method is designed and implemented to achieve efficient structural clustering of hypergraphs.