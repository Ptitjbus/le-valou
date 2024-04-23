"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";
import { OrbitControls, Html, useProgress } from '@react-three/drei'

function MeshComponent() {
  const fileUrl = "/valentin/valou.glb";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

function Loader() {
  const { progress } = useProgress()
  return <Html center className="w-52">Le créateur arrive ... ({progress.toFixed()}%)</Html>
}

export function Valou() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Canvas className='h-2xl w-2xl' camera={
        { position: [0, 0, 1] }
      }>
        <Suspense fallback={<Loader />}>
          <OrbitControls />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <MeshComponent />
        </Suspense>
      </Canvas>
    </div>
  );
}