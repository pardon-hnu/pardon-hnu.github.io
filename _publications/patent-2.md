---
title: "A clustering method and system based on multi-view attribute missing graphs"
collection: publications
category: patents
permalink: /publication/patent-2
authors: 'Xinyu Han, Min Shi, Xu Zhou, Mengyao Li, **Dong Pan**.'
date: 2025-02-17
venue: 'CN202510168879.9'
# paperurl: 'https://ieeexplore.ieee.org/document/11113079'
# codeurl: 'https://github.com/pardon-hnu/Hyper-SCAN'
---

The present invention discloses a clustering method for multi-view attributed graphs with missing attributes. First, a generative adversarial network structure comprising an encoder, a decoder, and a discriminator is adopted to impute the missing attribute information, obtaining a complete attribute matrix. Then, a structure consisting of one encoder and two decoders (a structure decoder and a feature decoder) is employed. After continuously training the encoder and decoders, the input data is fed into the encoder to obtain view-specific embeddings Z_m. Based on a self-attention mechanism, the obtained view-specific embeddings Z_m are fused according to view weights to produce the final graph embedding Z. Finally, clustering is performed on the graph embedding Z to partition the graph nodes into clusters, yielding the final clustering result. The present invention adopts a multi-view attributed graph, in which each view in the multi-view data is defined to include both attribute information X_m and structural information A_m. This addresses the technical issue of single-view perspectives in existing multi-view clustering methods, thereby enhancing the application value of the clustering method for multi-view attributed graphs with missing attributes.