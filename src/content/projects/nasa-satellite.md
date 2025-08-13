---
title: "NASA Satellite Systems"
description: "Development and analysis of satellite control systems, focusing on attitude determination and orbital mechanics. Working on next-generation satellite technology for Earth observation missions."
tags: ["Orbital Mechanics", "C++", "Space Tech"]
featured: true
order: 1
math: "\\vec{L} = \\vec{r} \\times m\\vec{v} = I\\vec{\\omega}"
mathDescription: "Angular momentum conservation in satellite dynamics"
status: "active"
---

# NASA Satellite Systems Project

## Overview

This project involves the development and analysis of satellite control systems for NASA's next-generation Earth observation missions. My work focuses on attitude determination and control systems (ADCS), orbital mechanics calculations, and mission planning optimization.

## Key Components

### Attitude Determination and Control

The spacecraft attitude is determined using a combination of:
- Star trackers for high-precision attitude determination
- Inertial Measurement Units (IMUs) for attitude rate sensing
- Magnetometers for geomagnetic field reference
- GPS receivers for position and velocity determination

The angular momentum equation governs the rotational dynamics:

$$\vec{L} = \vec{r} \times m\vec{v} = I\vec{\omega}$$

Where $\vec{L}$ is the angular momentum, $I$ is the moment of inertia tensor, and $\vec{\omega}$ is the angular velocity vector.

### Orbital Mechanics

The satellite's orbital motion is governed by the two-body problem with perturbations:

$$\frac{d^2\vec{r}}{dt^2} = -\frac{\mu}{r^3}\vec{r} + \vec{a}_{pert}$$

Major perturbations include:
- Atmospheric drag
- Solar radiation pressure  
- Earth's gravitational harmonics
- Third-body gravitational effects

### Control System Design

The attitude control system uses reaction wheels and magnetorquers:

```cpp
class AttitudeController {
    Vector3 computeControlTorque(const Quaternion& q_desired, 
                                const Quaternion& q_current,
                                const Vector3& omega_current) {
        // PID control implementation
        Vector3 error = quaternionToEuler(q_desired * q_current.conjugate());
        Vector3 torque = Kp * error - Kd * omega_current;
        return saturate(torque, MAX_TORQUE);
    }
};
```

## Mission Applications

This work supports several NASA missions:
- **PACE (Plankton, Aerosol, Cloud, ocean Ecosystem)**: Ocean color and atmospheric measurements
- **SWOT (Surface Water and Ocean Topography)**: High-resolution water elevation mapping
- **NISAR (NASA-ISRO SAR)**: Synthetic aperture radar for Earth surface monitoring

## Results and Impact

- Achieved 0.1° pointing accuracy for Earth observation payloads
- Reduced fuel consumption by 15% through optimized attitude maneuvers
- Developed autonomous orbit maintenance algorithms
- Contributed to mission planning software used by NASA JPL

## Technologies Used

- **Languages**: C++, Python, MATLAB
- **Frameworks**: NASA GMAT, STK, Simulink
- **Hardware**: Space-qualified processors, reaction wheels, star trackers
- **Standards**: NASA software engineering standards, DO-178C
