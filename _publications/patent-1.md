---
title: "A k-truss decomposition method based on Quegel distributed graph computing systemrs"
collection: publications
category: patents
permalink: /publication/patent-1
authors: 'Xu Zhou, Tongfeng Weng, Ji Zhang, Ting Yu, **Dong Pan**, Guoqing Xiao, Zhibang Yang, Cen Chen, kenli Li.'
date: 2021-07-19
venue: 'CN202110814231.6'
# paperurl: 'https://ieeexplore.ieee.org/document/11113079'
# codeurl: 'https://github.com/pardon-hnu/Hyper-SCAN'
---

The present invention proposes a k-truss decomposition method based on the Quegel distributed graph computing system. For large-scale network graphs, after the system runs and loads the graph, the file storing the graph is read line by line and converted into strings. A user-defined UDF function is then invoked to transform the string data of each line into vertices and adjacency lists, and the set of edges with vertices as endpoints is stored in a global edge map. After the loading process is completed, a decomposition function resets the timer, creates a new query task for decomposition, initializes the query task, adds it to the query task queue, and then clears the communication and computation volumes of the query task queue. The query task queue is executed, all vertices are activated, and k-truss decomposition is performed on all activated vertices. The number of edges in the global edge map is counted and evaluated. When the edge map is empty, the decomposition is determined to be complete, the process is exited, and information is printed. This solution addresses the problem that most existing technical solutions perform k-truss decomposition on a graph using a single machine, which requires high machine configurations and consumes a large amount of memory when processing large-scale graphs.