---
title: "Training Methods for Index-Based Recommendation Models, Index-Based Recommendation Methods and Systems"
collection: publications
category: patents
permalink: /publication/patent-5
authors: 'Qi Zhang, Quanqing Xu, **Dong Pan**, Chuanhui Yang, Yao Feng, Xu Zhou.'
date: 2025-08-11
venue: 'CN202511120662.7'
# paperurl: 'https://ieeexplore.ieee.org/document/11113079'
# codeurl: 'https://github.com/pardon-hnu/Hyper-SCAN'
---
This specification provides a training method for an index recommendation model, an index recommendation method, and a system. The training method includes: obtaining a workload and a candidate index set. In the n-th iteration: for each sub-network, a recommended index corresponding to the workload is determined from the candidate index set to determine a local gradient for each sub-network, and parameters of a global network are updated based on the local gradients corresponding to the multiple sub-networks, and parameters corresponding to each of the multiple sub-networks are updated based on the updated parameters of the global network. The index recommendation model includes the globally converged global network, and the index recommendation model is used to recommend an index configuration for a workload to be recommended. This method greatly accelerates the training speed and improves the stability and generalization ability of the index recommendation model.