import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, Float, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import * as random from 'maath/random';

const TechCore = () => {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={meshRef}>
        {/* Main Wireframe Core */}
        <Icosahedron args={[3.5, 1]}>
          <meshBasicMaterial 
            color="#DFF2F3" 
            wireframe 
            transparent 
            opacity={0.15} 
          />
        </Icosahedron>
        
        {/* Inner Glowing Core */}
        <Icosahedron args={[2, 0]}>
           <meshBasicMaterial 
            color="#DFF2F3" 
            wireframe 
            transparent 
            opacity={0.3} 
          />
        </Icosahedron>

        {/* Accent Points on Vertices */}
        <points>
            <icosahedronGeometry args={[3.5, 1]} />
            <PointMaterial
                transparent
                color="#DFF2F3"
                size={0.05}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.8}
            />
        </points>
      </group>
    </Float>
  );
};

const BackgroundParticles = () => {
    const ref = useRef();
    
    // Create particles once using useMemo to prevent buffer resizing errors
    const positions = useMemo(() => {
        const data = new Float32Array(3000); // 1000 particles * 3
        random.inSphere(data, { radius: 12 });
        return data;
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.y -= delta * 0.05;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <points ref={ref}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={positions.length / 3}
                        array={positions}
                        itemSize={3}
                    />
                </bufferGeometry>
                <PointMaterial
                    transparent
                    color="#DFF2F3"
                    size={0.02}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.4}
                />
            </points>
        </group>
    );
};

const ImpactBackground = () => {
  return (
    <div className="absolute inset-0 z-0 h-full w-full">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <TechCore />
        <BackgroundParticles />
        <fog attach="fog" args={['#0F131A', 5, 20]} />
      </Canvas>
    </div>
  );
};

export default ImpactBackground;
