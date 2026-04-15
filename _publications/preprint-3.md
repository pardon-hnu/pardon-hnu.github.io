---
title: "MDS-ViT: A Multi-Data Stream FPGA-Based Vision Transformer Accelerator"
collection: publications
category: preprints
permalink: /publication/preprint-3
authors: 'Wenhua Ye, Huan Li, Xu Zhou, **Dong Pan**, Kenli Li.'
date: 2025-06-30
venue: 'submitted to Journal of Systems Architecture (JSA)'
# paperurl: 'https://ieeexplore.ieee.org/document/11113079'
# codeurl: 'https://github.com/pardon-hnu/Hyper-SCAN'
---

Currently, research on vision models based on transformers is highly popular, particularly in areas such as vision large models and multi-modal applications. However, due to their massive computational requirements and parameters, these models face limitations in real-time application scenarios. FPGA, with its high-performance computing capabilities and low-power characteristics, is well-suited to address these limitations. Nevertheless, most existing FPGA-based vision transformer accelerators are limited to supporting medium and small-scale models, lacking the ability to handle large models efficiently. We present MDS-ViT, a novel FPGA-based vision transformer accelerator that leverages multi-data flows. It employs high-performance matrix multiplication modules as its computational core, connecting multiple functional modules through several data streams. The design utilizes highly pipelined forms to split data and computation processes, ensuring consistent parallelism within each module. This approach prevents data flow bottlenecks and avoids cache resource contention due to model size, thereby achieving strong versatility across various ViT models of different sizes. To enhance overall computational efficiency, both the Multi-Head Self-Attention (MHA) and Multilayer Perceptron (MLP) modules within the transformer are fully computed on the FPGA. Additionally, multiple blocks are sequentially processed within the FPGA. To accommodate large image dimensions and model parameters, DDR memory is utilized for intermediate computation result caching, complemented by a multi-level cache design to improve data read/write efficiency. Experimental results demonstrate that under the ViT-Base model, MDS-ViT achieves energy consumption reductions of 27.91X and 2.82X compared to CPU and GPU, respectively. Under the ViT-Huge model, these savings increase to 25.38X and 2.92X relative to CPU and GPU, respectively.