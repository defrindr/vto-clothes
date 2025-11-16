import React from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { useCustomization } from '../contexts/Customization';
import { RepeatWrapping } from 'three';

const Maletshirt = (props) => {
  const {
    material,
    uploadedTextureURL,
    depanColor,
    tangankananColor,
    tangankiriColor,
    kerahColor,
    belakangColor
  } = useCustomization();

  const { nodes, materials } = useGLTF('./models/maletshirt.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.kerah.geometry} material={materials.Back}>
      <meshStandardMaterial color={kerahColor.color} />
      </mesh>

      <mesh geometry={nodes.depan.geometry} material={materials.Back}>
      <meshStandardMaterial color={depanColor.color} />
      </mesh>

      <mesh geometry={nodes.belakang.geometry} material={materials.Back}>
      <meshStandardMaterial color={belakangColor.color} />
      </mesh>

      <mesh geometry={nodes.tangankiri.geometry} material={materials.Back}>
      <meshStandardMaterial color={tangankiriColor.color} />
      </mesh>
      <mesh geometry={nodes.tangankanan.geometry} material={materials.Back} >
      <meshStandardMaterial color={tangankananColor.color} />
      </mesh>
    </group>
  )
}

useGLTF.preload('./models/maletshirt.glb')

export default Maletshirt;
