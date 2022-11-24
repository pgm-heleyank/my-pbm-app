import { useBox, usePlane } from "@react-three/cannon";
import { useRef } from "react";

const Ground = ({ object }) => {
  const rotation = [-Math.PI / 2, 0, 0];
  const position = [-2.22, -0.89, 0.096];
  const [ref] = useBox(
    () => ({
      type: "Static",
      rotation,
      position,
    }),
    useRef(null)
  );
  return (
    <>
      <primitive object={object} position={[-2.22, -0.87, 0.096]} />
      <mesh ref={ref}>
        <planeGeometry />
        <meshBasicMaterial transparent={true} opacity={0.2} />
      </mesh>
    </>
  );
};

export default Ground;
