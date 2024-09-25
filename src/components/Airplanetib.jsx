import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const bladespeed = 6

export function Airplanetib(props) {
  const bladeref = useRef()
  const planeBodyRef = useRef()

  useFrame((state, delta) => {
    if (bladeref.current) {
      bladeref.current.rotation.x += delta * bladespeed
    }
    // Optional: Add some movement to the plane body
    if (planeBodyRef.current) {
      planeBodyRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  const { nodes, materials } = useGLTF('./model/airplanetib/model.glb')

  // Create a custom material for the plane body
  const planeMaterial = new THREE.MeshStandardMaterial({
    color: 0x3a86ff, // Blue color
    metalness: 0.7,
    roughness: 0.2,
    envMapIntensity: 1,
  })

  return (
    <group {...props} dispose={null}>
      <mesh 
        ref={planeBodyRef}
        geometry={nodes.planetibet.geometry} 
        material={planeMaterial} 
        rotation={[0.032, -0.021, 0.162]} 
      />
      <mesh 
        ref={bladeref} 
        geometry={nodes.PUSHILIN_Plane_Helix001.geometry} 
        material={materials.plane} 
        position={[0.983, 0.226, 0.013]} 
      />
    </group>
  )
}

useGLTF.preload('./model/airplanetib/model.glb')