import { useDispatch } from 'react-redux'
import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from "three"
import { useSelector } from 'react-redux'
import ConfiguratorSlice from '../../redux/ConfiguratorSlice'
import { Html } from '@react-three/drei'





const Dena = (props) => {

  const state = useSelector((state) => state.configurator);
  const setRimType = state.mesh;
  const setRimTypeGeometry = setRimType.geometry;

  const setTire = state.material;
  const setTireMap = state.material.map;
  const setTireNormalMap = state.material.normalMap;
  const setTireRoughnessMap = state.material.roughnessMap;
  const setTireAoMap = state.material.aoMap;
  const { nodes, materials } = useGLTF('./models/denafull.gltf');


  function controlSetRimTypeGeometry1() {
    if (setRimTypeGeometry === "1") {
      return true;
    } else {
      return false;
    }
  }

  function controlSetRimTypeGeometry2() {
    if (setRimTypeGeometry === "2") {
      return true;
    } else {
      return false;
    }
  }

  function controlSetRimTypeGeometry3() {
    if (setRimTypeGeometry === "3") {
      return true;
    } else {
      return false;
    }
  }

  function controlSetRimTypeGeometry4() {
    if (setRimTypeGeometry === "4") {
      return true;
    } else {
      return false;
    }
  }

  return (
    <group {...props} dispose={null}>
      <group position={[71.28, 33.26, 129.6]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
        <mesh geometry={nodes.Tire.geometry} material={materials.Dena_Tyre} position={[9.51, 0, 0]} rotation={[-1.57, 0.02, 0.02]} />
        <mesh geometry={nodes.rim.geometry} material={materials['14___3Default']} visible={controlSetRimTypeGeometry1()} position={[85.71, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
      <group position={[-71.26, 33.26, 129.6]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
        <mesh geometry={nodes.rim002.geometry} material={materials['14___3Default']} visible={controlSetRimTypeGeometry1()} position={[-75.43, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Tire002.geometry} material={materials.Dena_Tyre} position={[0.77, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
      <group position={[-71.26, 33.26, -135.02]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
        <mesh geometry={nodes.rim003.geometry} material={materials['14___3Default']} visible={controlSetRimTypeGeometry1()} position={[-75.43, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Tire003.geometry} material={materials.Dena_Tyre} position={[0.77, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.rim004.geometry} material={materials['14___3Default']} visible={controlSetRimTypeGeometry1()} position={[1499.76, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[-1, 1, 1]} />
      </group>
      <group position={[71.28, 33.26, -135.02]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
        <mesh geometry={nodes.Tire001.geometry} material={materials.Dena_Tyre} position={[-0.77, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
      <group position={[540.63, 19.48, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
        <mesh geometry={nodes.rimUpLeft1001.geometry} material={materials['14___3Default.005']} visible={controlSetRimTypeGeometry2()} position={[-4586.97, -1291.82, 173.94]} rotation={[1.89, 1.56, -1.25]} scale={1.15} />
        <mesh geometry={nodes.rimUpLeft1005.geometry} material={materials['14___3Default.005']} visible={controlSetRimTypeGeometry2()} position={[-4594.19, 1356.21, 175.27]} rotation={[-1.1, 1.54, 1.75]} scale={1.15} />
        <mesh geometry={nodes.rimUpLeft1006.geometry} material={materials['14___3Default.005']} visible={controlSetRimTypeGeometry2()} position={[-6215.13, -1284.39, 172.1]} rotation={[2.71, -1.55, 2.07]} scale={[-1.15, 1.15, 1.15]} />
        <mesh geometry={nodes.rimUpLeft1007.geometry} material={materials['14___3Default.005']} visible={controlSetRimTypeGeometry2()} position={[-6217.01, 1360.26, 172.57]} rotation={[2.25, -1.55, 1.61]} scale={[-1.15, 1.15, 1.15]} />
      </group>
      <group position={[-1.12, 93.24, -33.67]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
        <mesh geometry={nodes.mesh_0.geometry} material={materials['11 - Default']} />
        <mesh geometry={nodes.mesh_0_1.geometry} material={materials.Dena_Plastic} />
      </group>
      <mesh geometry={nodes.Dena_Navar.geometry} material={materials.Dena_Ayne} position={[0, 102.25, -19.02]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
      <mesh geometry={nodes.Dena_Window.geometry} material={materials.Dena_Window} position={[0, 121.36, -34.31]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
      <group position={[0, 87.57, -197.84]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
        <mesh geometry={nodes.mesh_3.geometry} material={materials.Dena_Back_Light_White} />
        <mesh geometry={nodes.mesh_3_1.geometry} material={materials.Dena_Back_Light_Red} />
      </group>
      <mesh geometry={nodes.Dena_Back_Light_Glass.geometry} material={materials.Dena_Back_Light_Glass} position={[0, 87.57, -197.85]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
      <group position={[0, 71.24, 197.08]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
        <mesh geometry={nodes.mesh_5.geometry} material={materials.Dena_Ayne} />
        <mesh geometry={nodes.mesh_5_1.geometry} material={materials.Dena_Details} />
      </group>
      <group position={[0, 88.1, -1.26]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
        <mesh geometry={nodes.mesh_6.geometry} material={materials.Dena_Plastic} />
        <mesh geometry={nodes.mesh_6_1.geometry} material={materials.interior} />
      </group>
      <mesh geometry={nodes.Dena_Front_Light_Glass001.geometry} material={materials.Dena_Front_Light_Glass} position={[0, 55.52, 197.13]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
      <mesh geometry={nodes.Dena_Logo.geometry} material={materials.Dena_Logo} position={[-0.29, 82.92, 3.08]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
      <mesh geometry={nodes.Dena_Grills.geometry} material={materials.Dena_Grils} position={[0.13, 50.4, 221.2]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
      <mesh geometry={nodes.Body.geometry} material={materials.Dena_CarPaint} position={[0, 85.82, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
      <mesh geometry={nodes.Dena_Back_Light_2.geometry} material={materials.Dena_Details} position={[0, 43.37, -225.75]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
      <group position={[0, 105.94, 58.48]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
        <mesh geometry={nodes.mesh_12.geometry} material={materials.Dena_Plastic} />
        <mesh geometry={nodes.mesh_12_1.geometry} material={materials.Dena_CarPaint} />
        <mesh geometry={nodes.mesh_12_2.geometry} material={materials.Dena_Ayne} />
      </group>

      <mesh geometry={nodes.rim_s1.geometry} material={materials['14___3Default']} visible={controlSetRimTypeGeometry3()} position={[83.51, 33.35, 129.4]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh geometry={nodes.rim_s2.geometry} material={materials['14___3Default']} visible={controlSetRimTypeGeometry3()} position={[82.48, 33.35, -135.17]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh geometry={nodes.rim_s3.geometry} material={materials['14___3Default']} visible={controlSetRimTypeGeometry3()} position={[-82.63, 33.48, 129.4]} rotation={[0, Math.PI / 2, 0]} scale={[-1, 1, 1]} />
      <mesh geometry={nodes.rim_s4.geometry} material={materials['14___3Default']} visible={controlSetRimTypeGeometry3()} position={[-82.63, 33.48, -135.17]} rotation={[0, Math.PI / 2, 0]} scale={[-1, 1, 1]} />
      <mesh geometry={nodes.rimUpLeft5001.geometry} material={materials['14___3Default']} visible={controlSetRimTypeGeometry4()} position={[83.49, 33.34, 129.88]} rotation={[0.61, 1.54, -0.6]} scale={0.58} />
      <mesh geometry={nodes.rimUpLeft5002.geometry} material={materials['14___3Default']} visible={controlSetRimTypeGeometry4()} position={[82.83, 33.5, -134.97]} rotation={[3.02, 1.56, -3.01]} scale={0.58} />
      <mesh geometry={nodes.rimUpLeft5003.geometry} material={materials['14___3Default']} visible={controlSetRimTypeGeometry4()} position={[-82.36, 33.13, 129.16]} rotation={[2.64, -1.56, 2.63]} scale={[-0.58, 0.58, 0.58]} />
      <mesh geometry={nodes.rimUpLeft5004.geometry} material={materials['14___3Default']} visible={controlSetRimTypeGeometry4()} position={[-82.56, 33.19, -135.29]} rotation={[-2.14, -1.57, -2.14]} scale={[-0.58, 0.58, 0.58]} />
    </group>
  )
}

useGLTF.preload('./models/irandena/denafull.gltf')

export default Dena;
