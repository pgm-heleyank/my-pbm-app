import { useSphere, useRaycastVehicle } from "@react-three/cannon";
import { useEffect, useRef } from "react";
const PinBall = ({ object }) => {
  const position = [-2.5, -0.85, 0.06];
  const rotation = [-Math.PI / 2, 0, 0];
  const width = 0.029;
  const height = 0.029;
  const front = 0.029;
  const pinBallBodyArgs = [width, height, front];
  const [pinBallBody, pinBallApi] = useSphere(() => ({
    mass: 0,
    position,
    rotation,
    friction: 0.1,
    type: "Dynamic",
  }));
  return (
    <>
      <primitive
        object={object}
        attached={"geometry"}
        position={[-2.5, -0.85, 0.06]}
      />
      <mesh ref={pinBallBody}>
        <meshBasicMaterial transparent={true} opacity={1} color="blue" />
        <sphereGeometry args={[0.015, 36, 36]} />
      </mesh>
    </>
  );
};

export default PinBall;
