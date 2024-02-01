import { useEffect, useState } from 'react';

type KeysType = {
  KeyW: 'forward';
  KeyS: 'backward';
  KeyA: 'left';
  KeyD: 'right';
};

type MovementType = {
  forward: boolean;
  backward: boolean;
  left: boolean;
  right: boolean;
};

export const usePersonControls = () => {
  const keys: KeysType = {
    KeyW: 'forward',
    KeyS: 'backward',
    KeyA: 'left',
    KeyD: 'right',
  };

  const moveFieldByKey = <T extends keyof KeysType>(key: T): KeysType[T] =>
    keys[key];

  const [movement, setMovement] = useState<MovementType>({
    forward: false,
    backward: false,
    left: false,
    right: false,
  });

  const setMovementStatus = (code: keyof KeysType, status: boolean) => {
    setMovement((m) => ({ ...m, [code]: status }));
  };

  useEffect(() => {
    const handleKeyDown = (ev: KeyboardEvent) => {
      setMovementStatus(moveFieldByKey(ev.code), true);
    };

    const handleKeyUp = (ev: KeyboardEvent) => {
      setMovementStatus(moveFieldByKey(ev.code), false);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return movement;
};
