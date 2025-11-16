import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useCustomization } from '../contexts/Customization';
import { RepeatWrapping } from 'three';

const Femaletshirt = (props) => {
  const {
    material,
    uploadedTextureURL,
    depanColor,
    tangankananColor,
    tangankiriColor,
    kerahColor,
    belakangColor
  } = useCustomization(); 

  const { nodes, materials } = useGLTF('./models/femaletshirt.glb');

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.kerah.geometry} material={materials['Material_1']}>
      <meshStandardMaterial color={kerahColor.color} />
      </mesh>

      <mesh geometry={nodes.depan.geometry} material={materials['Material_2']}>
        <meshStandardMaterial color={depanColor} />
      </mesh>

      <mesh geometry={nodes.tangankiri.geometry} material={materials['Material_3']} >
        <meshStandardMaterial color={tangankiriColor.color} />
      </mesh>

      <mesh geometry={nodes.tangankanan.geometry} material={materials['Material_4']}>
        <meshStandardMaterial color={tangankananColor.color} />
      </mesh>

      <mesh geometry={nodes.belakang.geometry} material={materials['Material_5']}>
        <meshStandardMaterial color={belakangColor.color} />
      </mesh>
    </group>
  );
};


useGLTF.preload('./models/femaletshirt.glb')

export default Femaletshirt;