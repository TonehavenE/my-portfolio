---
title: "Exploring Navier Stokes and Rebuilding Channelflow"
description: "Channelflow is a storied C++ library that has contributed to many research papers in plane geometry fluid dynamics problems. However, the C++ structure has grown old. Channelflow.jl is my attempt to rebuild it in Julia."
featured: true
authors: 
  - "John F. Gibson"
  - "Eben Quenneville"
status: "development"
---

Channelflow is a C++ library developed by John Gibson for simulating incompressible fluid flow in channel geometries. It has been used in many research papers to explore the dynamics of shear flows, including the discovery of exact coherent states and the study of transition to turbulence. However, the C++ codebase has become difficult to maintain and extend over time. I am working on a Julia version of Channelflow, called Channelflow.jl, to make it more accessible and easier to use for researchers in fluid dynamics.

## Background

### Incompressible Navier-Stokes Equations

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

### Spectral Methods

For spectral methods, we typically use a Fourier representation in $x$ and a Chebyshev representation in $y$. The latter could be replaced by any of the Jacobi Polynomials. In the more complicated case of three dimensions, we add a Fourier representation in $z$. With that in mind, we get the discrete representations in $x$ of the form

$$
\vec{u}(x, y, t) = \sum\limits_{k=\frac{-N_{x}}{2}}^{\frac{N_{x}}{2} - 1} \hat{\vec{u}}_{k}(y, t)e^{2\pi i kx/L_{x}}
$$
and the pressure as
$$
p(x, y, t) = \sum\limits_{k=\frac{-N_{x}}{2}}^{\frac{N_{x}}{2} - 1} \hat{p}_{k}(y, t)e^{2\pi i kx/L_{x}}
$$
Then, we define the Chebyshev polynomial representations in $y$ of the form
$$
\hat{\vec{u}}_{k}(y, t) = \sum\limits_{m=0}^{N_{y}} \tilde{\vec{u}}_{k,m} (t) T_{m}(y)
$$
and 
$$
\hat{p}_{k}(y, t) = \sum\limits_{m=0}^{N_{y}} \tilde{p}_{k,m} (t) T_{m}(y)
$$

For all of these, we typically use 
$$
\begin{aligned}
x_{j} &= j \frac{L_{x}}{N_{x}}, \quad j = 0, 1, \dots, N_x - 1\\
y_{j} &= \cos{\frac{\pi j}{N_y}}, \quad j = 0, 1, \dots, N_{y} 
\end{aligned}
$$
where, as usual, $L_x$ is the length of the box in the $x$ direction.

## Channelflow

According to the original [website](http://channelflow.org/),

>
> The main goals of Channelflow are
> * to lower the barrier to entry to numerical research in fluid dynamics
> * to enable creation of short, readable, easily-modified CFD codes
> * to provide easy access to advanced algorithms for computing exact solutions of Navier-Stokes

It was written in C++ by John Gibson, and has been used in many research papers to explore the dynamics of shear flows, including the discovery of exact coherent states and the study of transition to turbulence. However, the C++ codebase has become difficult to maintain and extend over time. I am working on a Julia version of Channelflow, called Channelflow.jl, to make it more accessible and easier to use for researchers in fluid dynamics.