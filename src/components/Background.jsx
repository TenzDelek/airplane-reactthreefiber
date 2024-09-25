import { Environment, Sphere } from "@react-three/drei";
import { Gradient, LayerMaterial } from "lamina";
import React from "react";
import * as THREE from "three"
const Background = () => {
  return (
    <>
      <Environment preset="sunset" />
      <Sphere scale={[100, 100, 100]} rotateY={Math.PI / 2}>
    <LayerMaterial lighting="physical" side={THREE.BackSide} transmission={1}>
    <Gradient axes={"y"} start={0} end={-0.5} colorA={"#0469DB"} colorB={"white"}/>
    </LayerMaterial>
      </Sphere>
    </>
  );
};

export default Background;
