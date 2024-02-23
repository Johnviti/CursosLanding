import React, { useRef, useState } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const GLTFModel = ({ isPaused }) => {
  const gltf = useLoader(GLTFLoader, './Models/scene.glb');
  const modelRef = useRef();

  useFrame(({ clock }) => {
    if (!isPaused) {
      modelRef.current.rotation.y += 0.02;
      //ocilar
      modelRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.3;
    }
  });

  return (
    <primitive object={gltf.scene} ref={modelRef} />
  );
};

const Cena = () => {
  const [isPaused, setIsPaused] = useState(false);

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="">
      <div className="canva_3d">
        <Canvas camera={{ far: 100 }} onClick={handlePause}>
          <ambientLight intensity={1.8} />
          <directionalLight intensity={1} />
          <GLTFModel isPaused={isPaused} />
          <meshStandardMaterial color="white" roughness={0.5} metalness={0.5} />
        </Canvas>
      </div>
    </div>
  );
};

export default Cena;