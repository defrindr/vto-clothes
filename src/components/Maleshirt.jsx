import React from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { useCustomization } from '../contexts/Customization';
import { RepeatWrapping } from 'three';

const Maleshirt = (props) => {
  const {
    material,
    uploadedTextureURL,
    depankananColor,
    depankiriColor,
    kancingColor,
    tangankananColor,
    tangankiriColor,
    kerahColor,
    bahuColor,
    belakangColor
  } = useCustomization(); 

  const { nodes, materials } = useGLTF('./models/maleshirt.glb');
  const texturesTextureProps = useTexture({
    map: uploadedTextureURL || "./public/textures/Fabric_001_DISP.png",
    normalMap: "./public/textures/Fabric_001_NORM.jpg",
    //roughnessMap: "./public/textures/Fabric_001_ROUGH.jpg",
    aoMap:"./public/textures/Fabric_001_OCC.jpg",
});

texturesTextureProps.normalMap.repeat.set(0.001, 0.001);
  texturesTextureProps.map.repeat.set(0.001, 0.001);
  texturesTextureProps.aoMap.repeat.set(0.001, 0.001);

// Mengatur pengulangan (repeat) pada normalMap
texturesTextureProps.normalMap.wrapS = RepeatWrapping;
texturesTextureProps.normalMap.wrapT = RepeatWrapping;
texturesTextureProps.normalMap.repeat.set(2, 2); // Sesuaikan nilai repeat dengan kebutuhan Anda
texturesTextureProps.normalMap.flipY = false; // Cobalah mengatur flipY menjadi false

// Mengatur pengulangan (repeat) pada map
texturesTextureProps.map.wrapS = RepeatWrapping;
texturesTextureProps.map.wrapT = RepeatWrapping;
texturesTextureProps.map.repeat.set(2, 2); // Ganti nilai 3 dengan nilai yang sesuai

// Mengatur pengulangan (repeat) pada aoMap
texturesTextureProps.aoMap.wrapS = RepeatWrapping;
texturesTextureProps.aoMap.wrapT = RepeatWrapping;
texturesTextureProps.aoMap.repeat.set(-100, -100); // Ganti nilai -10 dengan nilai yang sesuai


  return (
    <group {...props} dispose={null}>
      
      <mesh geometry={nodes.depankanan.geometry} material={materials.Back} >
      <meshStandardMaterial color={depankananColor.color} />
      </mesh>
      
      <mesh geometry={nodes.depankiri.geometry} material={materials.Back} >
      <meshStandardMaterial color={depankiriColor.color} />
      </mesh>
      
      <mesh geometry={nodes.belakang.geometry} material={materials.Back} >
      <meshStandardMaterial {...(material === "textures" ? texturesTextureProps : {})} color={belakangColor.color} />
      </mesh>
      
      <mesh geometry={nodes.bahu.geometry} material={materials.Back} >
      <meshStandardMaterial color={bahuColor.color} />
      </mesh>
      
      <mesh geometry={nodes.tangankiri.geometry} material={materials.Back} >
      <meshStandardMaterial color={tangankiriColor.color} />
      </mesh>

      <mesh geometry={nodes.tangankanan.geometry} material={materials.Back} >
      <meshStandardMaterial color={tangankananColor.color} />
      </mesh>
      <mesh geometry={nodes.kerah.geometry} material={materials.Back} >
      <meshStandardMaterial color={kerahColor.color} />
      </mesh>
      <mesh geometry={nodes.kancing.geometry} material={materials.Back} >
      <meshStandardMaterial color={kancingColor.color} />
      </mesh>
    </group>
  )
}

useGLTF.preload('./models/maleshirt.glb')

export default Maleshirt;
