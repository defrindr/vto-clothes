import React, { useRef } from 'react'
import { useGLTF, useTexture} from '@react-three/drei'
import { useCustomization } from '../contexts/Customization';
import { RepeatWrapping } from 'three';

const Skirt = (props) => {

  const {atasColor, bawahColor, } = useCustomization();

  const { nodes, materials } = useGLTF('./models/skirt.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[2.277, -2.13, 0.033]} rotation={[-Math.PI / 2, 0, 0]} scale={2.293}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.atas.geometry} material={materials['Back_FRONT_2239.001']} position={[-0.993, 0.929, -0.014]} >
          <meshStandardMaterial color={atasColor.color} />
          </mesh>
          <mesh geometry={nodes.bawah.geometry} material={materials['Back_FRONT_2239.001']} position={[-0.993, 0.929, -0.014]} >
          <meshStandardMaterial color={bawahColor.color} />
          </mesh>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/skirt.glb')

export default Skirt;
