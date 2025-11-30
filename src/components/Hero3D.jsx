import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const MilkBottle = (props) => {
    const mesh = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        mesh.current.rotation.y = Math.sin(t / 4) / 2;
        mesh.current.position.y = Math.sin(t / 1.5) / 10;
    });

    return (
        <group {...props} ref={mesh}>
            {/* Bottle Body */}
            <mesh position={[0, -1, 0]}>
                <cylinderGeometry args={[0.7, 0.7, 2.5, 32]} />
                <meshPhysicalMaterial
                    color="#ffffff"
                    transmission={0.2}
                    roughness={0.1}
                    thickness={0.5}
                    clearcoat={1}
                />
            </mesh>

            {/* Bottle Neck */}
            <mesh position={[0, 0.75, 0]}>
                <cylinderGeometry args={[0.3, 0.7, 1, 32]} />
                <meshPhysicalMaterial
                    color="#ffffff"
                    transmission={0.2}
                    roughness={0.1}
                    thickness={0.5}
                    clearcoat={1}
                />
            </mesh>

            {/* Bottle Cap */}
            <mesh position={[0, 1.3, 0]}>
                <cylinderGeometry args={[0.32, 0.32, 0.2, 32]} />
                <meshStandardMaterial color="#silver" metalness={0.8} roughness={0.2} />
            </mesh>

            {/* Label */}
            <mesh position={[0, -0.5, 0.71]}>
                <planeGeometry args={[0.8, 0.8]} />
                <meshStandardMaterial color="#1e88e5" />
            </mesh>
        </group>
    );
};

const Hero3D = () => {
    return (
        <div className="h-full w-full absolute inset-0 z-0">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 6]} />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />

                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <MilkBottle position={[2, 0, 0]} rotation={[0, -0.2, 0]} />
                </Float>

                <Sparkles count={100} scale={10} size={4} speed={0.4} opacity={0.5} color="#ffffff" />
                <Environment preset="studio" />
                <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
            </Canvas>
        </div>
    );
};

export default Hero3D;
