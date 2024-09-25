'use client'
import { Experience } from "@/components/Experience";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <>
    <Canvas camera={{
      position: [0, 0, 5],
      fov: 30,
    }}>
      <color attach="background" args={["#ececec"]} />
      <Experience />
    </Canvas>
  </>
  );
}
