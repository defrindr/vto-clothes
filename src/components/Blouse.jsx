import React, { useRef } from 'react'
import { useGLTF, useTexture} from '@react-three/drei'
import { useCustomization } from '../contexts/Customization';
import { RepeatWrapping } from 'three';

const Blouse = (props)  => {

  const {
    material,
    uploadedTextureURL,
    tangankananColor,
    tangankiriColor,
    kerahColor,
    belakangColor,
    depanColor,
  } = useCustomization();

  const { nodes, materials } = useGLTF('./models/blouse.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.belakang.geometry} material={materials.Back}>
      <meshStandardMaterial color={belakangColor.color} />
      </mesh>

      <mesh geometry={nodes.depan.geometry} material={materials.Back}>
      <meshStandardMaterial color={depanColor.color} />
      </mesh>
      <mesh geometry={nodes.kerah.geometry} material={materials.Back}>
      <meshStandardMaterial color={kerahColor.color} />
      </mesh>
      <mesh geometry={nodes.tangankanan.geometry} material={materials.Back} >
      <meshStandardMaterial color={tangankananColor.color} />
      </mesh>
      <mesh geometry={nodes.tangankiri.geometry} material={materials.Back}>
      <meshStandardMaterial color={tangankiriColor.color} />
      </mesh>
    </group>
  )
}

useGLTF.preload('./models/blouse.glb')

export default Blouse;
