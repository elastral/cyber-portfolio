import React, { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

// Main animated mesh - SIMPLE AND CLEAR
function AnimatedContent() {
  const groupRef = useRef()

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    const t = clock.getElapsedTime()

    // Main group rotation
    groupRef.current.rotation.x = Math.sin(t * 0.4) * 0.6
    groupRef.current.rotation.y = t * 0.4
    groupRef.current.rotation.z = Math.cos(t * 0.3) * 0.4
  })

  return (
    <group ref={groupRef}>
      {/* Central glowing cube */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial
          color="#00ff99"
          emissive="#00ff99"
          emissiveIntensity={1}
          metalness={0.85}
          roughness={0.15}
        />
      </mesh>

      {/* Orbiting spheres */}
      <mesh position={[4, 0, 0]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial
          color="#39a0ff"
          emissive="#39a0ff"
          emissiveIntensity={0.9}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      <mesh position={[-4, 0, 0]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial
          color="#ff006e"
          emissive="#ff006e"
          emissiveIntensity={0.9}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      <mesh position={[0, 4, 0]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial
          color="#00ff99"
          emissive="#00ff99"
          emissiveIntensity={0.9}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      <mesh position={[0, -4, 0]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial
          color="#39a0ff"
          emissive="#39a0ff"
          emissiveIntensity={0.9}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Rotating torus ring 1 */}
      <mesh rotation={[Math.PI / 2.5, 0, 0]}>
        <torusGeometry args={[3, 0.25, 32, 300]} />
        <meshStandardMaterial
          color="#ff006e"
          emissive="#ff006e"
          emissiveIntensity={0.8}
          metalness={0.85}
          roughness={0.12}
        />
      </mesh>

      {/* Rotating torus ring 2 */}
      <mesh rotation={[0, 0, Math.PI / 3]}>
        <torusGeometry args={[2.5, 0.25, 32, 300]} />
        <meshStandardMaterial
          color="#39a0ff"
          emissive="#39a0ff"
          emissiveIntensity={0.8}
          metalness={0.85}
          roughness={0.12}
        />
      </mesh>

      {/* Rotating torus ring 3 */}
      <mesh rotation={[Math.PI / 4, Math.PI / 3, 0]}>
        <torusGeometry args={[3.5, 0.2, 32, 300]} />
        <meshStandardMaterial
          color="#00ff99"
          emissive="#00ff99"
          emissiveIntensity={0.75}
          metalness={0.8}
          roughness={0.15}
        />
      </mesh>
    </group>
  )
}

export default function ThreeScene() {
  const containerRef = useRef()

  useEffect(() => {
    if (!containerRef.current) return
    const obs = new IntersectionObserver(
      () => {},
      { threshold: 0.1 }
    )
    obs.observe(containerRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="w-full h-[520px] md:h-[680px] canvas-container">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, powerPreference: 'high-performance' }}
      >
        {/* Lighting setup */}
        <ambientLight intensity={0.9} color="#ffffff" />
        <ambientLight intensity={0.5} color="#00ff99" />
        <directionalLight position={[12, 8, 12]} intensity={2.5} color="#39a0ff" />
        <directionalLight position={[-12, 8, -12]} intensity={1.8} color="#ff006e" />
        <pointLight position={[0, 10, 0]} intensity={1.3} color="#00ff99" />
        <pointLight position={[8, 0, 8]} intensity={1} color="#39a0ff" />
        <pointLight position={[-8, 0, -8]} intensity={1} color="#ff006e" />

        {/* Main animated content */}
        <AnimatedContent />

        {/* Controls */}
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />

        {/* Post-processing */}
        <EffectComposer multisampling={8}>
          <Bloom luminanceThreshold={0.05} mipmapBlur intensity={2.5} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}
