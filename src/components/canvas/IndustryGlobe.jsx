import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PointMaterial } from '@react-three/drei';
import * as random from 'maath/random';

const ParticleGlobe = () => {
  const ref = useRef();
  
  // Use native Float32Array to ensure strict control over buffer size
  const positions = useMemo(() => {
    const data = new Float32Array(12000); // 4000 points * 3
    random.inSphere(data, { radius: 2.5 });
    return data;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.05;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
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
          color="#0F131A"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
        />
      </points>
    </group>
  );
};

const IndustryGlobe = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <ParticleGlobe />
      </Canvas>
    </div>
  );
};

export default IndustryGlobe;
