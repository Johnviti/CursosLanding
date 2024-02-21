import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { createRoot } from 'react-dom/client';

function Box(props) {
  const ref = useRef();
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  useFrame((state, delta) => (ref.current.rotation.x += delta));
  
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? '#00C9F5' : '#AA7BE9'} />
    </mesh>
  );
}

// Exporte o componente Cena
const Cena = () => {
  return (
    <Canvas style={{ width: '35vw', height: '65vh' }}>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Box position={[-1.2, 0, 0]} />
    </Canvas>
  );
};

export default Cena; // Exporte o componente Cena
