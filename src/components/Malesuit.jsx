import React, { useRef } from 'react'
import { useGLTF,useTexture } from '@react-three/drei'
import { useCustomization } from '../contexts/Customization';
import { RepeatWrapping } from 'three';

const Malesuit = (props) => {
  const {
    material,
    uploadedTextureURL,
    depankananColor,
    depankiriColor,
    tangankananColor,
    tangankiriColor,
    kerahColor,
    belakangColor
  } = useCustomization();

  const { nodes, materials } = useGLTF('./models/malesuit.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.belakang.geometry} material={materials.Back}>
      <meshStandardMaterial color={belakangColor.color} />
      </mesh>

      <mesh geometry={nodes.depankanan.geometry} material={materials.Back}>
      <meshStandardMaterial color={depankananColor.color} />
      </mesh>

      <mesh geometry={nodes.depankiri.geometry} material={materials.Back}> 
      <meshStandardMaterial color={depankiriColor.color} />
      </mesh>
      <mesh geometry={nodes.kerah.geometry} material={materials.Back}> 
      <meshStandardMaterial color={kerahColor.color} />
      </mesh>
      <mesh geometry={nodes.tangankanan.geometry} material={materials.Back}>
      <meshStandardMaterial color={tangankananColor.color} />
      </mesh>
      <mesh geometry={nodes.tangankiri.geometry} material={materials.Back}>
      <meshStandardMaterial color={tangankiriColor.color} />
      </mesh>
    </group>
  )
}

useGLTF.preload('./models/malesuit.glb')

export default Malesuit;
