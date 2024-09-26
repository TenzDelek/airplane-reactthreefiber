'use client'
import { Experience } from "@/components/Experience";
import { Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
    <Canvas  camera={{
      position: [0, 0, 5],
      fov: 30,
    }}>
      <color attach="background" args={["#ececec"]} />
      <Text color="white" position={[0, 0, -1]}>
        AIRPLANE
      </Text>
      <Experience />
    </Canvas>
    <div className=" bg-[#DCDCDC] text-black flex items-center justify-center h-screen w-full">
      hello
    </div>
  </>
  );
}
