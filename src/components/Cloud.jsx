import React from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export function Cloud({ opacity = 1, ...props }) {
  const { nodes, materials } = useGLTF('./model/cloud/model.glb')

  // Create a new material based on the original, but with opacity applied
  const cloudMaterial = new THREE.MeshStandardMaterial({
    ...materials['lambert2SG.001'],
    transparent: true,
    opacity: opacity,
  })

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Node.geometry} material={cloudMaterial} />
    </group>
  )
}

useGLTF.preload('./model/cloud/model.glb')