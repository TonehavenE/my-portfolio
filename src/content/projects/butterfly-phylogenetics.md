---
title: "Butterfly Phylogenetics"
description: "Computational analysis of evolutionary relationships among butterfly species using molecular sequence data and advanced statistical methods to reconstruct phylogenetic trees."
tags: 
  - "Bioinformatics"
  - "Python"
  - "Statistics"
featured: false
order: 2
status: "active"
github: "https://github.com/yourusername/butterfly-phylogenetics"
---

# Butterfly Phylogenetics Research

## Project Overview

This computational biology project focuses on reconstructing evolutionary relationships among butterfly species using whole-genome sequencing data and advanced phylogenetic methods. The research combines molecular biology, statistics, and high-performance computing to understand lepidopteran evolution.

## Bayesian Phylogenetic Inference

The core methodology uses Bayesian inference to estimate phylogenetic trees:

$$P(T|D) \propto P(D|T)P(T)$$

Where:
- $P(T|D)$ is the posterior probability of tree $T$ given data $D$
- $P(D|T)$ is the likelihood of observing data $D$ given tree $T$  
- $P(T)$ is the prior probability of tree $T$

## Methodology

### Data Collection and Processing

1. **Genome Sequencing**: Whole-genome sequencing of 150+ butterfly species
2. **Quality Control**: Read filtering, adapter trimming, and quality assessment
3. **Assembly**: *de novo* genome assembly using SPAdes and Canu
4. **Annotation**: Gene prediction and functional annotation

### Phylogenetic Analysis Pipeline

```python
def reconstruct_phylogeny(sequences, model='GTR+G+I'):
    """
    Reconstruct phylogenetic tree using maximum likelihood
    and Bayesian methods
    """
    # Multiple sequence alignment
    alignment = muscle_align(sequences)
    
    # Model selection
    best_model = select_model(alignment)
    
    # Maximum likelihood estimation  
    ml_tree = iqtree(alignment, model=best_model)
    
    # Bayesian analysis
    bayesian_tree = mrbayes(alignment, model=best_model, 
                           ngen=1000000, samplefreq=1000)
    
    return ml_tree, bayesian_tree
```

### Molecular Clock Analysis

The molecular clock hypothesis assumes constant evolutionary rates:

$$d_{ij} = 2r \cdot t_{ij}$$

Where $d_{ij}$ is the genetic distance between species $i$ and $j$, $r$ is the substitution rate, and $t_{ij}$ is the divergence time.

## Key Findings

### Evolutionary Relationships

- Confirmed monophyly of major butterfly families
- Resolved deep relationships within Papilionoidea
- Identified several cases of convergent evolution in wing patterns

### Divergence Times

Using relaxed molecular clock models:
- Papilionoidea origin: ~100 million years ago (Cretaceous)
- Major family divergences: 60-80 million years ago
- Recent radiations coincide with angiosperm diversification

### Genomic Evolution

- Identified gene family expansions related to:
  - Chemoreception (odorant and gustatory receptors)
  - Detoxification (cytochrome P450s)
  - Wing pattern development (regulatory genes)

## Computational Methods

### High-Performance Computing

The analysis leverages parallel computing for computationally intensive tasks:

```python
from mpi4py import MPI
import numpy as np

def parallel_likelihood_calculation(trees, data):
    """
    Distribute likelihood calculations across MPI processes
    """
    comm = MPI.COMM_WORLD
    rank = comm.Get_rank()
    size = comm.Get_size()
    
    # Divide trees among processes
    local_trees = trees[rank::size]
    local_results = []
    
    for tree in local_trees:
        likelihood = calculate_likelihood(tree, data)
        local_results.append(likelihood)
    
    # Gather results
    all_results = comm.gather(local_results, root=0)
    
    return all_results
```

### Machine Learning Integration

Applied machine learning techniques for:
- Feature selection from genomic data
- Classification of evolutionary relationships
- Prediction of species traits from phylogenetic position

## Statistical Validation

### Model Adequacy Testing

- Posterior predictive checks
- Cross-validation analysis  
- Comparison with morphological data

### Uncertainty Quantification

- Bootstrap support values
- Bayesian posterior probabilities
- Confidence intervals for divergence times

## Biological Implications

### Conservation Genetics

The phylogenetic framework informs:
- Identification of evolutionarily distinct species
- Prioritization of conservation efforts
- Understanding of adaptive potential

### Host-Plant Coevolution

Analysis reveals:
- Parallel evolution in plant use across lineages
- Constraints imposed by phylogenetic history
- Mechanisms of host-plant specialization

## Tools and Technologies

- **Sequencing**: Illumina HiSeq, PacBio Sequel
- **Assembly**: SPAdes, Canu, Flye
- **Phylogenetics**: IQ-TREE, MrBayes, BEAST2
- **Languages**: Python, R, C++
- **Libraries**: BioPython, DendroPy, APE
- **Computing**: SLURM cluster, GPU acceleration
