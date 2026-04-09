import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Float, Grid as DreiGrid } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<THREE.Points>(null!);
  const { viewport } = useThree();
  
  const [positions, colors] = useMemo(() => {
    const count = 3000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color = new THREE.Color('#00ff99');
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
      
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    return [positions, colors];
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 0.05;
    if (ref.current) {
      ref.current.rotation.y = t;
      ref.current.rotation.x = t * 0.5;
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.012}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.6}
      />
    </Points>
  );
}

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00ff99" />
      <Suspense fallback={null}>
        <ParticleField />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <DreiGrid
            infiniteGrid
            fadeDistance={30}
            fadeStrength={5}
            cellSize={1}
            sectionSize={5}
            sectionThickness={1.5}
            sectionColor="#00ff99"
            cellColor="#111"
            position={[0, -4, 0]}
          />
        </Float>
      </Suspense>
    </>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 -z-20 bg-[#020202]">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <SceneContent />
      </Canvas>
      {/* Vignette and Noise */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020202_100%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020202]/30 to-[#020202] pointer-events-none" />
    </div>
  );
}
