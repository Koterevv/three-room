import { usePersonControls } from '@/hooks/usePersonControls';
import { useFrame } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';
import React, { FC, useRef } from 'react';
import { Vector3 } from 'three';

const MOVE_SPEED = 1;
const direction = new Vector3();
const frontVector = new Vector3();
const sideVector = new Vector3();

export const Player: FC = () => {
  const playerRef = useRef<RigidBody>();
  const { forward, backward, left, right } = usePersonControls();

  useFrame((state) => {
    if (!playerRef.current) return;

    const velocity = playerRef.current.linvel();

    frontVector.set(0, 0, backward - forward);
    sideVector.set(left - right, 0, 0);
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(MOVE_SPEED);

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(MOVE_SPEED)
      .applyEuler(state.camera.rotation);
    playerRef.current.wakeUp();
    playerRef.current.setLinvel({
      x: direction.x,
      y: velocity.y,
      z: direction.z,
    });

    const { x, y, z } = playerRef.current.translation();
    state.camera.position.set(x, y, z);
  });
  return (
    <>
      <RigidBody position={[0, 3, 0]} ref={playerRef}>
        <mesh ref={playerRef}>
          <capsuleGeometry args={[0.7, 0.1]} />
          <meshStandardMaterial color={'red'} />
        </mesh>
      </RigidBody>
    </>
  );
};
