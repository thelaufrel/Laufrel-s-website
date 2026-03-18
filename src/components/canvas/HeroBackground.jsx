import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import * as random from 'maath/random';

const MorphingDonut = () => {
  const ref = useRef();
  const count = 8000; // Fixed particle count
  const holdTime = 5; 
  const transitionTime = 3; 
  
  // Generate all positions once to ensure buffer sizes never change
  const { torusPositions, cloudPositions, currentPositions } = useMemo(() => {
    // 1. Target: Torus (Donut)
    const torus = new Float32Array(count * 3);
    const R = 3.5; // Major radius
    const r = 1.2; // Minor radius
    
    for (let i = 0; i < count; i++) {
      const u = Math.random() * Math.PI * 2;
      const v = Math.random() * Math.PI * 2;
      
      const x = (R + r * Math.cos(v)) * Math.cos(u);
      const y = (R + r * Math.cos(v)) * Math.sin(u);
      const z = r * Math.sin(v);
      
      torus[i * 3] = x + (Math.random() - 0.5) * 0.1;
      torus[i * 3 + 1] = y + (Math.random() - 0.5) * 0.1;
      torus[i * 3 + 2] = z + (Math.random() - 0.5) * 0.1;
    }

    // 2. Start: Random Cloud (Out of nowhere)
    const cloud = new Float32Array(count * 3);
    // Large radius to simulate "nowhere" - scattered far
    random.inSphere(cloud, { radius: 100 }); 

    // 3. Current Buffer (Initialize with cloud)
    const current = new Float32Array(count * 3);
    current.set(cloud);

    return { 
      torusPositions: torus, 
      cloudPositions: cloud, 
      currentPositions: current 
    };
  }, []); // Empty dependency array = created once and never resized

  // Animation State
  // 0: Form (Cloud -> Torus)
  // 1: Hold (Torus)
  // 2: Disperse (Torus -> Cloud)
  const [mode, setMode] = useState(0); 
  const modeStartTime = useRef(0);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Initialize start time
    if (modeStartTime.current === 0) modeStartTime.current = t;
    
    const timeInMode = t - modeStartTime.current;

    if (ref.current) {
      // Continuous rotation
      ref.current.rotation.x = t * 0.1;
      ref.current.rotation.y = t * 0.15;
    }

    // State Machine
    if (mode === 0 && timeInMode > transitionTime) {
      setMode(1); // Start Holding
      modeStartTime.current = t;
    } else if (mode === 1 && timeInMode > holdTime) {
      setMode(2); // Start Dispersing
      modeStartTime.current = t;
    } else if (mode === 2 && timeInMode > transitionTime) {
      setMode(0); // Start Forming again
      modeStartTime.current = t;
    }

    // Calculate interpolation factor (alpha)
    let alpha = 0;
    if (mode === 0) {
      // Forming: 0 -> 1 (Ease Out)
      alpha = Math.min(timeInMode / transitionTime, 1);
      alpha = 1 - Math.pow(1 - alpha, 3); 
    } else if (mode === 1) {
      // Holding
      alpha = 1;
    } else if (mode === 2) {
      // Dispersing: 1 -> 0 (Ease In)
      alpha = 1 - Math.min(timeInMode / transitionTime, 1);
      alpha = Math.pow(alpha, 3); 
    }

    // Update particle positions directly in the buffer
    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      const iy = i * 3 + 1;
      const iz = i * 3 + 2;

      // Interpolate
      const tx = THREE.MathUtils.lerp(cloudPositions[ix], torusPositions[ix], alpha);
      const ty = THREE.MathUtils.lerp(cloudPositions[iy], torusPositions[iy], alpha);
      const tz = THREE.MathUtils.lerp(cloudPositions[iz], torusPositions[iz], alpha);
      
      // Add "life" to particles
      if (mode === 1) {
         // Breathing effect while holding
         const breath = Math.sin(t * 2 + i) * 0.02;
         currentPositions[ix] = tx + breath;
         currentPositions[iy] = ty + breath;
         currentPositions[iz] = tz + breath;
      } else {
         currentPositions[ix] = tx;
         currentPositions[iy] = ty;
         currentPositions[iz] = tz;
      }
    }

    // Notify Three.js that geometry has changed
    if (ref.current && ref.current.geometry && ref.current.geometry.attributes.position) {
        ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group rotation={[0, 0, 0]}>
      <points ref={ref}> 
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={currentPositions}
            itemSize={3}
            usage={THREE.DynamicDrawUsage}
          />
        </bufferGeometry>
        <PointMaterial
          transparent
          color="#0F131A"
          size={0.035}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.NormalBlending}
          opacity={0.8}
        />
      </points>
    </group>
  );
};

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 12], fov: 45 }} dpr={[1, 2]}>
        <color attach="background" args={['#FFF7F0']} />
        <ambientLight intensity={0.5} />
        <MorphingDonut />
      </Canvas>
    </div>
  );
};

export default HeroBackground;
