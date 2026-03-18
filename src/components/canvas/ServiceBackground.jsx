import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PointMaterial } from '@react-three/drei';
import * as random from 'maath/random';

const NeuralMesh = () => {
  const ref = useRef();
  
  // Use native Float32Array to ensure strict control over buffer size
  const positions = useMemo(() => {
    const data = new Float32Array(6000); // 2000 points * 3
    random.inBox(data, { sides: [20, 15, 10] });
    return data;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
        ref.current.rotation.x -= delta / 30;
        ref.current.rotation.y -= delta / 40;
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
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.3}
        />
      </points>
    </group>
  );
};

const ServiceBackground = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }} dpr={[1, 2]}>
        <NeuralMesh />
      </Canvas>
    </div>
  );
};

export default ServiceBackground;
