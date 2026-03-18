import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Ring, Html } from '@react-three/drei';
import * as THREE from 'three';

const OrbitRing = ({ radius }) => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <ringGeometry args={[radius - 0.02, radius + 0.02, 64]} />
      <meshBasicMaterial color="#DFF2F3" transparent opacity={0.3} side={THREE.DoubleSide} />
    </mesh>
  );
};

const OrbitingIcons = ({ radius, count = 8 }) => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
        groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {new Array(count).fill(0).map((_, i) => {
        const angle = (i / count) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        return (
          <group key={i} position={[x, 0, z]}>
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[0.8, 0.8]} />
                <meshBasicMaterial color="#DFF2F3" transparent opacity={0.8} side={THREE.DoubleSide} />
            </mesh>
            {/* Connection Line to Center */}
            <mesh position={[-x/2, 0, -z/2]} rotation={[0, -angle, 0]}>
                <boxGeometry args={[radius, 0.02, 0.02]} />
                <meshBasicMaterial color="#DFF2F3" transparent opacity={0.1} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
};

const SolarSystem = () => {
  return (
    <group rotation={[0.5, 0, 0]}> {/* Tilted view */}
      {/* Central Hub */}
      <Sphere args={[1, 32, 32]}>
        <meshStandardMaterial color="#0F131A" roughness={0.2} metalness={0.8} />
      </Sphere>
      <pointLight position={[0, 2, 0]} color="#DFF2F3" intensity={2} distance={5} />

      {/* Orbits */}
      <OrbitRing radius={3} />
      <OrbitingIcons radius={3} count={8} />
    </group>
  );
};

const OrbitalViz = () => {
  return (
    <Canvas camera={{ position: [0, 8, 8], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <SolarSystem />
    </Canvas>
  );
};

export default OrbitalViz;
