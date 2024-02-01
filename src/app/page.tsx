'use client';
import { Player } from '@/components/Player';
import { Room } from '@/components/models/Room';
import { PointerLockControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Physics, RigidBody } from '@react-three/rapier';

export default function Home() {
  return (
    <main className="h-screen">
      <Canvas>
        <PointerLockControls />
        <ambientLight intensity={0.1} />
        <directionalLight position={[-5, 3, 5]} />
        <Room />
        <Physics gravity={[0, -20, 0]}>
          <mesh position={[-3, -1.3, 0]}>
            <Player />
            <RigidBody type="fixed">
              <mesh>
                <boxGeometry args={[10, 0.5, 5]} />
                <meshStandardMaterial color={'red'} transparent opacity={0} />
              </mesh>
              <mesh position={[-2.5, 1, 0]}>
                <boxGeometry args={[0.5, 5, 5]} />
                <meshStandardMaterial color={'red'} transparent opacity={0} />
              </mesh>
              <mesh position={[0, 1, -3]}>
                <boxGeometry args={[5, 5, 0.5]} />
                <meshStandardMaterial color={'red'} transparent opacity={0} />
              </mesh>
              <mesh position={[0, 1, 2.8]}>
                <boxGeometry args={[5, 5, 0.5]} />
                <meshStandardMaterial color={'red'} transparent opacity={0} />
              </mesh>
              <mesh position={[4, 1, 0]}>
                <boxGeometry args={[0.5, 5, 5]} />
                <meshStandardMaterial color={'red'} transparent opacity={0} />
              </mesh>
              <mesh position={[0.3, 0.3, 0]}>
                <boxGeometry args={[0.5, 3, 0.25]} />
                <meshStandardMaterial color={'red'} transparent opacity={0} />
              </mesh>
            </RigidBody>
          </mesh>
        </Physics>
      </Canvas>
    </main>
  );
}

// function Controller() {
//   const meshRef = useRef<THREE.Group>(null);

//   const [keys, setKeys] = useState({
//     w: false,
//     a: false,
//     s: false,
//     d: false,
//   });

//   const handleKeyDown = (event: KeyboardEvent) => {
//     if (event.key === 'w') setKeys((prevKeys) => ({ ...prevKeys, w: true }));
//     if (event.key === 'a') setKeys((prevKeys) => ({ ...prevKeys, a: true }));
//     if (event.key === 's') setKeys((prevKeys) => ({ ...prevKeys, s: true }));
//     if (event.key === 'd') setKeys((prevKeys) => ({ ...prevKeys, d: true }));
//   };

//   const handleKeyUp = (event: KeyboardEvent) => {
//     if (event.key === 'w') setKeys((prevKeys) => ({ ...prevKeys, w: false }));
//     if (event.key === 'a') setKeys((prevKeys) => ({ ...prevKeys, a: false }));
//     if (event.key === 's') setKeys((prevKeys) => ({ ...prevKeys, s: false }));
//     if (event.key === 'd') setKeys((prevKeys) => ({ ...prevKeys, d: false }));
//   };

//   useEffect(() => {
//     window.addEventListener('keydown', handleKeyDown);
//     window.addEventListener('keyup', handleKeyUp);

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//       window.removeEventListener('keyup', handleKeyUp);
//     };
//   }, []);

//   useFrame(() => {
//     if (meshRef.current && keys) {
//       const { x, y, z } = meshRef.current.position;

//       if (keys.w) meshRef.current.position.z += 0.04;
//       if (keys.s) meshRef.current.position.z -= 0.04;
//       if (keys.a) meshRef.current.position.x += 0.04;
//       if (keys.d) meshRef.current.position.x -= 0.04;
//     }
//   });
//   return (
//     <group position={[0, 0, -2]} rotation-y={1.45} ref={meshRef}>
//       <Room />
//       <PointerLockControls />
//     </group>
//   );
// }
