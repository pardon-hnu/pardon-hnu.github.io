---
title: "Index-aware attention-based cost estimation for complex filters"
collection: publications
category: preprints
permalink: /publication/preprint-1
authors: 'Zeyu Lu, Xu Zhou, **Dong Pan***, Quanqing Xu, Daokun Hu, Chuanhui Yang, Tongfeng Weng, and Kenli Li.'
date: 2025-05-30
venue: 'submitted to TKDE'
# paperurl: 'https://ieeexplore.ieee.org/document/11113079'
# codeurl: 'https://github.com/pardon-hnu/Hyper-SCAN'
---

OceanBase is a modern relational database that is widely deployed in production systems, serving Alipay.com and other commercial organizations. It uses cost estimation, a fundamental task in database management, to predict the execution cost of a physical query plan. However, existing learning-based cost estimation models are not suitable for OceanBase because they cannot sense index information and handle complex filters, which are common in modern databases. Furthermore, there is still much room for improvement in the accuracy of these models. In this paper, we design an index-aware cost estimation model, named IndexFormer, which can effectively handle complex filters for the first time. For index sensing capability, we design a twolevel transformer to capture the intrinsic associations of nodes in the query plan tree and the relationship between indexes and query plans. In particular, we reorganize complex filters into a predicate tree, design a word2vec hash embedding to encode predicates, and introduce a min-max pool to handle logical term nesting. Experiments on two famous industry-standard benchmarks and a real dataset demonstrate the significant prediction accuracy gains of IndexFormer over the other two latest competitors.