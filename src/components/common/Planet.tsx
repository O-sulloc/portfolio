import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model';

const Planet = () => {
  const [scale, setScale] = useState(1.5);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 1440) {
        setScale(1.5);
      } else if (width > 1024) {
        setScale(1.0);
      }
      // if (width == 1440) {
      //   // setScale(1.0); // 중간 크기 화면 (예: 태블릿)
      // } else if (width < 768){
      //   // setScale(0.5); // 작은 화면 (예: 모바일)
      // } else if (width >= 425 ){
      //   // setScale(1.5); // 작은 화면 (예: 모바일)
      // } else {
      //   setScale(1.5); // 큰 화면 (예: 데스크탑)
      // }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // 초기 크기 설정

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
        <Model url="/assets/planet/scene.gltf" scale={scale} />
      </Canvas>
    </div>
  );
};

export default Planet;