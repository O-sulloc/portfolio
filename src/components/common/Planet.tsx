import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model';

const Planet = () => {
  return (
    <div className='planet-container'>
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-2, 1.5, 3],
        }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls 
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
        />
        <Model url="/assets/planet/scene.gltf" />
      </Canvas>
    </div>
  );
};

export default Planet;