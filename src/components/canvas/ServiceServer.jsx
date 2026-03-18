import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const ServerLayer = ({ position, delay }) => {
  const centerNode = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Pulsing effect
    if (centerNode.current) {
        const scale = 1 + Math.sin(t * 2 + delay) * 0.1;
        centerNode.current.scale.set(scale, scale, scale);
        centerNode.current.material.opacity = 0.6 + Math.sin(t * 2 + delay) * 0.4;
    }
  });

  return (
    <group position={position}>
      {/* Left Node */}
      <Sphere args={[0.15, 16, 16]} position={[-1, 0, 0]}>
        <meshStandardMaterial color="#DFF2F3" emissive="#DFF2F3" emissiveIntensity={0.5} roughness={0.2} metalness={0.8} />
      </Sphere>
      {/* Center Node (Brightest) */}
      <Sphere ref={centerNode} args={[0.25, 16, 16]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#DFF2F3" emissive="#DFF2F3" emissiveIntensity={2} toneMapped={false} transparent />
      </Sphere>
      {/* Right Node */}
      <Sphere args={[0.15, 16, 16]} position={[1, 0, 0]}>
        <meshStandardMaterial color="#DFF2F3" emissive="#DFF2F3" emissiveIntensity={0.5} roughness={0.2} metalness={0.8} />
      </Sphere>
      {/* Connection Line */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.02, 0.02, 2, 8]} />
        <meshBasicMaterial color="#DFF2F3" transparent opacity={0.3} />
      </mesh>
    </group>
  );
};

const DataParticles = () => {
  const particles = useMemo(() => {
    return new Array(5).fill(0).map(() => ({
      offset: Math.random() * 10,
      speed: 0.5 + Math.random() * 0.5,
      xOffset: (Math.random() - 0.5) * 0.5
    }));
  }, []);

  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    groupRef.current.children.forEach((child, i) => {
      const p = particles[i];
      const y = ((t * p.speed + p.offset) % 5) - 2.5; // Loop from -2.5 to 2.5
      child.position.y = y;
      child.position.x = Math.sin(y * 2) * 0.5 + p.xOffset; // Curved path
    });
  });

  return (
    <group ref={groupRef}>
      {particles.map((_, i) => (
        <mesh key={i}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial color="#DFF2F3" toneMapped={false} />
        </mesh>
      ))}
    </group>
  );
};

const ServerModel = () => {
  const groupRef = useRef();

  useFrame((state) => {
    // Slow rotation
    if (groupRef.current) {
        groupRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      {/* 5 Layers */}
      {[-2, -1, 0, 1, 2].map((y, i) => (
        <ServerLayer key={i} position={[0, y * 0.8, 0]} delay={i * 0.2} />
      ))}

      {/* Vertical Connections */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 4, 8]} />
        <meshBasicMaterial color="#DFF2F3" transparent opacity={0.2} />
      </mesh>

      {/* Wireframe Box Container */}
      <Box args={[3, 5, 3]}>
        <meshBasicMaterial color="#0F131A" wireframe transparent opacity={0.1} />
      </Box>

      <DataParticles />
    </group>
  );
};

const ServiceServer = () => {
  return (
    <Canvas camera={{ position: [5, 2, 5], fov: 45 }}>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 5, 10]} color="#DFF2F3" intensity={1} />
      <pointLight position={[-10, 5, -10]} color="#0F131A" intensity={0.5} />
      
      <ServerModel />
      
      <OrbitControls 
        enableZoom={false} 
        minPolarAngle={Math.PI / 4} 
        maxPolarAngle={Math.PI / 1.5}
      />
    </Canvas>
  );
};

export default ServiceServer;
