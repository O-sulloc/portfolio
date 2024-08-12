import React from 'react';
import { useGLTF } from '@react-three/drei';

type ModelProps = {
  url: string;
  scale: number;
};

const Model: React.FC<ModelProps> = ({ url, scale }) => {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={scale} />;
};

export default Model;