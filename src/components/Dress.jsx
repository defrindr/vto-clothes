import React, { useRef } from 'react'
import { useGLTF, useTexture} from '@react-three/drei'
import { useCustomization } from '../contexts/Customization';
import { RepeatWrapping } from 'three';

const Dress = (props) => {
  const {
    material,
    uploadedTextureURL,
    depankananColor,
    depankiriColor,
    tangankananColor,
    tangankiriColor,
    belakangColor,
    hiasanColor,
    bawahColor,
  } = useCustomization();
  const { nodes, materials } = useGLTF('./models/dress.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.bawah.geometry} material={materials.Back}>
      <meshStandardMaterial color={bawahColor.color} />
      </mesh>
      <mesh geometry={nodes.belakang.geometry} material={materials.Back}>
      <meshStandardMaterial color={belakangColor.color} />
      </mesh>
      <mesh geometry={nodes.hiasan.geometry} material={materials.Dress_mtl} >
      <meshStandardMaterial color={hiasanColor.color} />
      </mesh>
      <mesh geometry={nodes.depankiri.geometry} material={materials.Back} >
      <meshStandardMaterial color={depankiriColor.color} />
      </mesh>
      <mesh geometry={nodes.tangankiri.geometry} material={materials.Back} >
      <meshStandardMaterial color={tangankiriColor.color} />
      </mesh>
      <mesh geometry={nodes.depankanan.geometry} material={materials.Back} >
      <meshStandardMaterial color={depankananColor.color} />
      </mesh>
      <mesh geometry={nodes.tangankanan.geometry} material={materials.Back} >
      <meshStandardMaterial color={tangankananColor.color} />
      </mesh>
    </group>
  )
}

useGLTF.preload('./models/dress.glb')

export default Dress;
