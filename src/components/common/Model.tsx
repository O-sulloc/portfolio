import React from 'react';
import { useGLTF } from '@react-three/drei';

type ModelProps = {
  url: string;
};

const Model: React.FC<ModelProps> = ({ url }) => {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={1.5}/>;
};

export default Model;