import { Float, MeshReflectorMaterial, PresentationControls, Stage } from "@react-three/drei";
import Dena from "./Dena";



const Experience = () => {


  return (
    <PresentationControls speed={10} global zoom={0.7} polar={[-1, Math.PI / 2]}>
      <Stage environment={"city"} intensity={0.5} contactShadow={false}>
        <Dena />
      </Stage>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[170, 170]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={40}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#101010"
          metalness={0.5}
        />
      </mesh>
    </PresentationControls>
  )
}

export default Experience;
