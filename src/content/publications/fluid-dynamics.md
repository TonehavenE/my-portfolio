---
title: "Exploring Navier Stokes and Rebuilding Channelflow"
description: "Channelflow is a storied C++ library that has contributed to many research papers in plane geometry fluid dynamics problems. However, the C++ structure has grown old. Channelflow.jl is my attempt to rebuild it in Julia."
featured: true
authors: 
  - "John F. Gibson"
  - "Eben Quenneville"
status: "development"
---

# Exploring Navier Stokes and Rebuilding Channelflow

Channelflow is a C++ library developed by John Gibson for simulating incompressible fluid flow in channel geometries. It has been used in many research papers to explore the dynamics of shear flows, including the discovery of exact coherent states and the study of transition to turbulence. However, the C++ codebase has become difficult to maintain and extend over time. I am working on a Julia version of Channelflow, called Channelflow.jl, to make it more accessible and easier to use for researchers in fluid dynamics.

## Background
Channelflow solves the incompressible Navier-Stokes equations in a channel geometry using spectral methods. The flow is driven by a mean pressure gradient, which we let be $\bar{p}_{x} = - 2 \nu$, in the $x$-direction, with constant viscosity $\nu$. We consider the two-dimensional subcase, for ease of implementation. The equations are then written as:
$$
\begin{aligned}
\frac{\partial \vec{u}}{\partial t} + \vec{u} \cdot \vec{\nabla} \vec{u} &= - \vec{\nabla} p - \bar{p}_{x} \vec{e}_{1} + \nu \nabla^{2} \vec{u} \quad \text{in}~ \Omega\\
\vec{\nabla} \cdot \vec{u} &= 0 \quad \text{in}~ \Omega
\end{aligned}
$$
where $\vec{u} = (u, v)^{T}$ with $u$ and $v$ denoting the velocity components in the $x$ and $y$ directions. $p$ here denotes the actual pressure minus the contribution from the mean pressure gradient. $\vec{e}_{1}$ is the unit vector]] in the $x$ direction. We additionally impose the periodic [[Boundary Conditions]] in $x$ and no-slip boundary conditions in $y$:
$$
\vec{u} = \vec{0} \quad \text{on} \quad y = \pm 1
$$

What we mean here is that there is a pressure forcing the fluid down the pipe, in the $x$ direction. The pressure term in the incompressible Navier Stokes equations can then be simplified slightly, using our special definition of $p$. We let $\vec{u}$ be a column vector representing the velocity components, and enforce natural boundary conditions that the fluid is not flowing along the rigid walls. We often further enforce periodic boundary conditions in $x$ and $z$.