import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function RotatingBox() {
  const meshRef = useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh ref={meshRef} position={[0, .2, 0]}>
    <boxGeometry args={[2, 2, 2]} />
    <meshPhongMaterial color="red" />
    </mesh>
  )
}
export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} color="red" />
      <RotatingBox />
    </Canvas>
  );
}