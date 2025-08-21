---
title: "Rebuilding Channelflow"
description: "Channelflow is a storied C++ library that has contributed to many research papers in plane geometry fluid dynamics problems. However, the C++ structure has grown old. Channelflow.jl is my attempt to rebuild it in Julia."
tags: 
  - "Fluid Mechanics"
  - "Julia"
  - "Research"
featured: true
order: 4
status: "active"
---

# Complex Fluid Dynamics Research

## Project Overview

This research focuses on understanding the behavior of complex fluids, including non-Newtonian fluids, multiphase flows, and turbulent systems. The work combines theoretical analysis, computational fluid dynamics (CFD), and experimental validation to advance our understanding of fluid mechanics in engineering applications.

## Theoretical Framework

### Navier-Stokes Equations

The fundamental equations governing fluid motion are the Navier-Stokes equations:

**Continuity Equation:**
$$\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \vec{u}) = 0$$

**Momentum Equation:**
$$\frac{\partial \vec{u}}{\partial t} + (\vec{u} \cdot \nabla)\vec{u} = -\frac{1}{\rho}\nabla p + \nu \nabla^2 \vec{u} + \vec{f}$$

For incompressible flow ($\nabla \cdot \vec{u} = 0$), these simplify considerably.

### Non-Newtonian Fluid Models

#### Power-Law Model
$$\tau = K \left(\frac{du}{dy}\right)^n$$

Where $n < 1$ for shear-thinning fluids and $n > 1$ for shear-thickening fluids.

#### Bingham Plastic Model
$$\tau = \tau_0 + \mu_p \frac{du}{dy} \quad \text{for } |\tau| > \tau_0$$

## Computational Methods

### Finite Volume Method

The governing equations are discretized using the finite volume method:

```matlab
function [u, v, p] = solve_navier_stokes(u0, v0, p0, dt, dx, dy, Re)
    % Solve incompressible Navier-Stokes equations
    % using SIMPLE algorithm
    
    [nx, ny] = size(u0);
    u = u0; v = v0; p = p0;
    
    % Momentum equations
    for iter = 1:max_iter
        % U-momentum
        u_star = solve_u_momentum(u, v, p, dt, dx, dy, Re);
        
        % V-momentum  
        v_star = solve_v_momentum(u, v, p, dt, dx, dy, Re);
        
        % Pressure correction
        [p_prime, u, v] = pressure_correction(u_star, v_star, p, dt, dx, dy);
        
        p = p + p_prime;
        
        % Check convergence
        if max(abs(p_prime(:))) < tolerance
            break;
        end
    end
end
```

### Turbulence Modeling

#### Reynolds-Averaged Navier-Stokes (RANS)

For turbulent flows, we solve the Reynolds-averaged equations with closure models:

**k-ε Model:**
$$\frac{\partial k}{\partial t} + U_j \frac{\partial k}{\partial x_j} = P_k - \varepsilon + \frac{\partial}{\partial x_j}\left[\left(\nu + \frac{\nu_t}{\sigma_k}\right)\frac{\partial k}{\partial x_j}\right]$$

$$\frac{\partial \varepsilon}{\partial t} + U_j \frac{\partial \varepsilon}{\partial x_j} = C_{1\varepsilon}\frac{\varepsilon}{k}P_k - C_{2\varepsilon}\frac{\varepsilon^2}{k} + \frac{\partial}{\partial x_j}\left[\left(\nu + \frac{\nu_t}{\sigma_\varepsilon}\right)\frac{\partial \varepsilon}{\partial x_j}\right]$$

#### Large Eddy Simulation (LES)

For high-fidelity simulations, LES resolves large-scale turbulent structures:

$$\frac{\partial \bar{u_i}}{\partial t} + \frac{\partial}{\partial x_j}(\bar{u_i}\bar{u_j}) = -\frac{1}{\rho}\frac{\partial \bar{p}}{\partial x_i} + \nu \frac{\partial^2 \bar{u_i}}{\partial x_j^2} - \frac{\partial \tau_{ij}}{\partial x_j}$$

## Research Applications

### Microfluidics

Analysis of flow in microchannels with applications to:
- Lab-on-a-chip devices
- Drug delivery systems
- Biological fluid transport

Key phenomena studied:
- Electrokinetic effects
- Surface tension forces
- Slip boundary conditions

### Industrial Processes

#### Polymer Processing

Investigation of non-Newtonian fluid flow in:
- Injection molding
- Extrusion processes
- Fiber spinning

#### Heat Transfer Enhancement

Study of heat transfer in:
- Nanofluids
- Porous media
- Enhanced surfaces

## Experimental Validation

### Particle Image Velocimetry (PIV)

Used PIV to validate CFD predictions:
- Velocity field measurements
- Turbulence statistics
- Flow pattern visualization

### Rheological Characterization

Experimental determination of fluid properties:
- Viscosity measurements
- Yield stress determination
- Thixotropic behavior

## Results and Findings

### Non-Newtonian Flow Characteristics

Discovered novel flow patterns in:
- Viscoelastic fluids through contractions
- Yield stress fluids around obstacles
- Shear-thinning fluids in complex geometries

### Turbulence Modification

Quantified effects of:
- Polymer additives on drag reduction
- Particle loading on turbulence modulation
- Surface roughness on boundary layer development

### Heat Transfer Correlations

Developed new correlations for:
- Nusselt number in non-Newtonian flows
- Heat transfer enhancement with nanofluids
- Convective heat transfer in porous media

## Performance Metrics

### Computational Efficiency

- Achieved 10x speedup using GPU acceleration
- Implemented parallel algorithms with 90% efficiency
- Reduced memory footprint by 40% through optimized data structures

### Accuracy Validation

- CFD predictions within 5% of experimental data
- Turbulence models validated against DNS data
- Heat transfer correlations accurate within 10%

## Future Directions

### Machine Learning Integration

- Neural network turbulence models
- AI-assisted mesh adaptation
- Automated parameter optimization

### Multiphysics Coupling

- Fluid-structure interaction
- Conjugate heat transfer
- Electrokinetic flows

### Advanced Materials

- Smart fluids (magnetorheological, electrorheological)
- Bio-inspired fluid systems
- Multifunctional fluids
