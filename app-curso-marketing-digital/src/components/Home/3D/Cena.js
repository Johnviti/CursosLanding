import React, { useRef, useState } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const GLTFModel = ({ isPaused }) => {
  const gltf = useLoader(GLTFLoader, `${process.env.PUBLIC_URL}/Models/scene.gltf`);
  const modelRef = useRef();

  const traverseAndSetColor = (object, objectName, color) => {
    if (object.name === objectName) {
      object.material.color.set(color);
      object.castShadow = false;
      object.receiveShadow = false;
    }
    if (object.children) {
      object.children.forEach(child => traverseAndSetColor(child, objectName, color));
    }
  };

  traverseAndSetColor(gltf.scene, 'Object_2', 0xff007f); 
  traverseAndSetColor(gltf.scene, 'Object_4', 0xFFFF00); 

  useFrame(({ clock }) => {
    if (!isPaused) {
      modelRef.current.rotation.y += 0.02;
      modelRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.3;
    }
  });

  return <primitive object={gltf.scene} ref={modelRef} />;
};

const Cena = () => {
  const [isPaused, setIsPaused] = useState(false);

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="">
      <div className="canva_3d">
        <Canvas camera={{ position: [0, 0, 10], near: 0.1, far: 100 }} onClick={handlePause}>
          <ambientLight intensity={1} />
          <directionalLight intensity={5} position={[0, 0, 1]} />
          <GLTFModel isPaused={isPaused} />
        </Canvas>
      </div>
    </div>
  );
};

export default Cena;
