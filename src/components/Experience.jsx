
import { Float, OrbitControls } from "@react-three/drei";
import Background from "./Background";
import { Airplane } from "./Airplane";
import { Cloud } from "./Cloud";
import { Airplanetib } from "./Airplanetib";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Background/>
      {/* <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh> */}
         <Cloud opacity={0.5} scale={[0.3, 0.3, 0.3]} position={[-2,1,-3]}/>
         <Cloud opacity={0.5} scale={[0.2, 0.3, 0.4]} position={[1.5,-0.5,-2]}/>
         <Cloud opacity={0.7} scale={[0.3, 0.3, 0.4]} rotation-y={Math.PI / 9} position={[2,-0.2,-2]}/>
         <Cloud opacity={0.7} scale={[0.4, 0.4, 0.4]} rotation-y={Math.PI / 9} position={[1,-0.2,-12]}/>
         <Cloud opacity={0.7} scale={[0.5, 0.5, 0.5]} position={[-1,1,-53]}/>
         <Cloud opacity={0.3} scale={[0.8, 0.8, 0.8]} position={[0,1,-100]}/>

      <Float floatIntensity={2} speed={4}>
       <Airplanetib rotation-y={Math.PI / 2} scale={[0.2, 0.2, 0.2]} position-y={0.1}/>
      {/* <Airplane rotation-y={Math.PI / 2} scale={[0.2, 0.2, 0.2]} position-y={0.1}/> */}
      </Float>
    </>
  );
};