import { useDispatch } from 'react-redux'
import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from "three"
import { useSelector } from 'react-redux'
import ConfiguratorSlice from './ConfiguratorSlice'
import { Html } from '@react-three/drei'



  const state = useSelector((state) => state.configurator);
  const setTire = state.material;
  const setTireMap = state.material.map;
  const setTireNormalMap = state.material.normalMap;
  const setTireRoughnessMap = state.material.roughnessMap;
  const setTireAoMap = state.material.aoMap;
  const { nodes, materials } = useGLTF('./models/dena5.gltf');





  return (
  
    <group {...props} dispose={null}>
      <group position={[0.71, 0.33, 1.3]} scale={0}>
        <mesh geometry={nodes.rimUpLeft4.geometry} material={materials['14___3Default']} position={[75.43, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} />
        
        <mesh geometry={nodes.Tire.geometry} material={materials.Dena_Tyre} position={[-0.77, 0, 0]} rotation={[-Math.PI / 2, 0.02, -0.02]} />
      </group>
      <group position={[-0.71, 0.33, 1.3]} scale={0}>
        <mesh geometry={nodes.rimUpRight4.geometry} material={materials['14___3Default']} position={[-75.43, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Tire002.geometry} material={materials.Dena_Tyre} position={[0.77, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
      <group position={[-0.71, 0.33, -1.35]} scale={0}>
        <mesh geometry={nodes.rimBotRight4.geometry} material={materials['14___3Default']} position={[-75.43, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Tire003.geometry} material={materials.Dena_Tyre} position={[0.77, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
      <group position={[0.71, 0.33, -1.35]} scale={0}>
        <mesh geometry={nodes.rimBotLeft4.geometry} material={materials['14___3Default']} position={[75.43, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Tire001.geometry} material={materials.Dena_Tyre} position={[-0.77, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
      <group position={[0, 0.19, 0]} scale={0}>
        <mesh geometry={nodes.rimBotRight1001.geometry} material={materials['14___3Default']} position={[-811.86, 174.21, -1345.95]} rotation={[2.51, 0, 1.55]} scale={1.15} />
      </group>
      <group position={[0, 0.19, 0]} scale={0}>
        <mesh geometry={nodes.rimUpRight1.geometry} material={materials['14___3Default.001']} position={[-802.76, 173.85, 1304.84]} rotation={[2.5, 0, Math.PI / 2]} scale={1.15} />
      </group>
      <group position={[0, 0.19, 0]} scale={0}>
        <mesh geometry={nodes.rimUpLeft1001.geometry} material={materials['14___3Default.005']} position={[796.72, 173.94, 1291.82]} rotation={[0.64, -0.01, -1.57]} scale={1.15} />
      </group>
      <group position={[0, 0.19, 0]} scale={0}>
        <mesh geometry={nodes.rimBotLeft1003.geometry} material={materials['14___3Default.009']} position={[807.93, 169.34, -1361.42]} rotation={[0.64, -0.01, -1.57]} scale={1.15} />
      </group>
      <group position={[-0.01, 0.93, -0.34]} scale={0}>
        <mesh geometry={nodes.Mesh.geometry} material={materials['11 - Default']} />
        <mesh geometry={nodes.Mesh_1.geometry} material={materials.Dena_Plastic} />
      </group>
      <mesh geometry={nodes.Dena_Navar.geometry} material={materials.Dena_Ayne} position={[0, 1.02, -0.19]} scale={0} />
      <mesh geometry={nodes.Dena_Window.geometry} material={materials.Dena_Window} position={[0, 1.21, -0.34]} scale={0} />
      <group position={[0, 0.88, -1.98]} scale={0}>
        <mesh geometry={nodes.Mesh003.geometry} material={materials.Dena_Back_Light_White} />
        <mesh geometry={nodes.Mesh003_1.geometry} material={materials.Dena_Back_Light_Red} />
      </group>
      <mesh geometry={nodes.Dena_Back_Light_Glass.geometry} material={materials.Dena_Back_Light_Glass} position={[0, 0.88, -1.98]} scale={0} />
      <group position={[0, 0.71, 1.97]} scale={0}>
        <mesh geometry={nodes.Mesh005.geometry} material={materials.Dena_Ayne} />
        <mesh geometry={nodes.Mesh005_1.geometry} material={materials.Dena_Details} />
      </group>
      <group position={[0, 0.88, -0.01]} scale={0}>
        <mesh geometry={nodes.Mesh006.geometry} material={materials.Dena_Plastic} />
        <mesh geometry={nodes.Mesh006_1.geometry} material={materials.interior} />
      </group>
      <mesh geometry={nodes.Dena_Front_Light_Glass001.geometry} material={materials.Dena_Front_Light_Glass} position={[0, 0.56, 1.97]} scale={0} />
      <mesh geometry={nodes.Dena_Logo.geometry} material={materials.Dena_Logo} position={[0, 0.83, 0.03]} scale={0} />
      <mesh geometry={nodes.Dena_Grills.geometry} material={materials.Dena_Grils} position={[0, 0.5, 2.21]} scale={0} />
      <mesh geometry={nodes.Body.geometry} material={materials.Dena_CarPaint} position={[0, 0.86, 0]} scale={0} />
      <mesh geometry={nodes.Dena_Back_Light_2.geometry} material={materials.Dena_Details} position={[0, 0.43, -2.26]} scale={0} />
      <group position={[0, 1.06, 0.58]} scale={0}>
        <mesh geometry={nodes.Mesh012.geometry} material={materials.Dena_Plastic} />
        <mesh geometry={nodes.Mesh012_1.geometry} material={materials.Dena_CarPaint} />
        <mesh geometry={nodes.Mesh012_2.geometry} material={materials.Dena_Ayne} />
      </group>
      <mesh geometry={nodes.rimBotLeft2.geometry} material={materials['14___3Default']} position={[0.75, 0.33, -1.34]} rotation={[Math.PI / 2, 0, -1.58]} scale={0.01} />
      <mesh geometry={nodes.rimBotLeft3.geometry} material={materials['14___3Default']} position={[0.77, 0.33, -1.35]} rotation={[1.47, -0.02, 3.13]} scale={0} />
      <mesh geometry={nodes.rimBotLeft5.geometry} material={materials['14___3Default']} position={[0.82, 0.33, -1.35]} rotation={[1.58, -0.01, -1.55]} scale={0.01} />
      <mesh geometry={nodes.rimUpLeft5001.geometry} material={materials['14___3Default']} position={[0.83, 0.33, 1.3]} rotation={[1.58, -0.01, -1.55]} scale={0.01} />
      <mesh geometry={nodes.rimBotRight2.geometry} material={materials['14___3Default.002']} position={[-0.76, 0.33, -1.36]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.rimBotRight3.geometry} material={materials['14___3Default.003']} position={[-0.76, 0.33, -1.35]} rotation={[1.67, 0.02, -0.02]} scale={0} />
      <mesh geometry={nodes.rimUpLeft2002.geometry} material={materials['14___3Default.006']} position={[0.75, 0.33, 1.31]} rotation={[Math.PI / 2, 0, -1.58]} scale={0.01} />
      <mesh geometry={nodes.rimUpLeft3002.geometry} material={materials['14___3Default.007']} position={[0.76, 0.34, 1.3]} rotation={[1.47, -0.02, 3.13]} scale={0} />
      <mesh geometry={nodes.rimBotRight5.geometry} material={materials['14___3Default']} position={[-0.82, 0.33, -1.35]} rotation={[1.6, 0.01, 1.58]} scale={0.01} />
      <mesh geometry={nodes.rimUpRight2001.geometry} material={materials['14___3Default.010']} position={[-0.76, 0.33, 1.31]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.rimUpRight3001.geometry} material={materials['14___3Default.011']} position={[-0.76, 0.33, 1.3]} rotation={[1.67, 0.02, -0.02]} scale={0} />
      <mesh geometry={nodes.rimUpRight5001.geometry} material={materials['14___3Default']} position={[-0.82, 0.33, 1.3]} rotation={[1.6, 0.01, 1.58]} scale={0.01} />
    </group>
  )
}

