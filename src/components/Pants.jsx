import React, { useRef } from 'react'
import { useGLTF, useTexture} from '@react-three/drei'
import { useCustomization } from '../contexts/Customization';
import { RepeatWrapping } from 'three';

const Pants = (props) => {
  const {atasColor, kakikananColor, kakikiriColor} = useCustomization();
  const { nodes, materials } = useGLTF('./models/pants.glb')
  return (
    <group {...props} dispose={null}>

      <mesh geometry={nodes.atas.geometry} material={materials.Back} >
      <meshStandardMaterial color={atasColor.color} />
      </mesh>
      <mesh geometry={nodes.kakikanan.geometry} material={materials.Back} >
      <meshStandardMaterial color={kakikananColor.color} />
      </mesh>
      <mesh geometry={nodes.kakikiri.geometry} material={materials.Back} >
      <meshStandardMaterial color={kakikiriColor.color} />
      </mesh>
    </group>
  )
}

useGLTF.preload('./models/pants.glb')

export default Pants;