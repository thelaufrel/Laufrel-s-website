import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Torus, Box, Sphere, Octahedron, MeshTransmissionMaterial } from '@react-three/drei';

const Shape = ({ type, color }) => {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.5;
      mesh.current.rotation.y += delta * 0.6;
      if (hovered) {
          mesh.current.scale.lerp({ x: 1.2, y: 1.2, z: 1.2 }, 0.1);
      } else {
          mesh.current.scale.lerp({ x: 1, y: 1, z: 1 }, 0.1);
      }
    }
  });

  const materialProps = {
    resolution: 512,
    thickness: 0.2,
    roughness: 0,
    transmission: 1,
    ior: 1.5,
    chromaticAberration: 0.1,
    background: color
  };

  return (
    <Float floatIntensity={2} rotationIntensity={1}>
      <mesh 
        ref={mesh} 
        onPointerOver={() => setHover(true)} 
        onPointerOut={() => setHover(false)}
      >
        {type === 'sphere' && <Sphere args={[1.2, 32, 32]}><MeshTransmissionMaterial {...materialProps} color="#DFF2F3" /></Sphere>}
        {type === 'box' && <Box args={[1.8, 1.8, 1.8]}><MeshTransmissionMaterial {...materialProps} color="#DFF2F3" /></Box>}
        {type === 'torus' && <Torus args={[1, 0.4, 32, 32]}><MeshTransmissionMaterial {...materialProps} color="#DFF2F3" /></Torus>}
        {type === 'octahedron' && <Octahedron args={[1.5]}><MeshTransmissionMaterial {...materialProps} color="#DFF2F3" /></Octahedron>}
      </mesh>
    </Float>
  );
};

const ServiceShape = ({ type }) => {
  return (
    <div className="h-full w-full absolute inset-0 pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 5] }} gl={{ alpha: true }}>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <Shape type={type} color="#DFF2F3" />
      </Canvas>
    </div>
  );
};

export default ServiceShape;
