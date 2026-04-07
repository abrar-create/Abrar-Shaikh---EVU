"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line, Points, PointMaterial } from "@react-three/drei";
import type { Group } from "three";

type Node = [number, number, number];
type Connection = [Node, Node];

function DataNetwork() {
  const groupRef = useRef<Group>(null);

  const { nodes, connections } = useMemo(() => {
    const generatedNodes: Node[] = Array.from({ length: 220 }, () => [
      (Math.random() - 0.5) * 18,
      (Math.random() - 0.5) * 12,
      (Math.random() - 0.5) * 12,
    ]);

    const generatedConnections: Connection[] = [];
    for (let i = 0; i < generatedNodes.length; i += 1) {
      for (let j = i + 1; j < generatedNodes.length; j += 1) {
        const a = generatedNodes[i];
        const b = generatedNodes[j];
        const dx = a[0] - b[0];
        const dy = a[1] - b[1];
        const dz = a[2] - b[2];
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (distance < 2.15 && generatedConnections.length < 320) {
          generatedConnections.push([a, b]);
        }
      }
    }

    return { nodes: generatedNodes, connections: generatedConnections };
  }, []);

  const flatNodes = useMemo(
    () => new Float32Array(nodes.flatMap((node) => [node[0], node[1], node[2]])),
    [nodes],
  );

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.045;
    groupRef.current.rotation.x += delta * 0.012;

    const targetX = state.mouse.x * 0.6;
    const targetY = state.mouse.y * 0.4;
    state.camera.position.x += (targetX - state.camera.position.x) * 0.04;
    state.camera.position.y += (targetY - state.camera.position.y) * 0.04;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={groupRef}>
      <Points positions={flatNodes} stride={3}>
        <PointMaterial color="#0070f3" size={0.038} sizeAttenuation transparent opacity={0.9} />
      </Points>
      {connections.map((segment, idx) => (
        <Line
          key={idx}
          points={segment}
          color="#0070f3"
          lineWidth={0.6}
          transparent
          opacity={0.18}
        />
      ))}
    </group>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 9], fov: 55 }} dpr={[1, 1.6]}>
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.4} />
        <DataNetwork />
      </Canvas>
    </div>
  );
}
