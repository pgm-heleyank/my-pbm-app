import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import PinBall from "./PinBall";
import Ground from "./Ground";
import { usePlane } from "@react-three/cannon";
import { useRef } from "react";

const Castle = () => {
  const result = useLoader(GLTFLoader, "models/lollipop11.glb");
  let geometry = result.scene;

  console.log(result.nodes.kers);
  return (
    <>
      <mesh>
        <primitive
          object={geometry}
          attached={"geometry"}
          position={[-4.5, -1, 0.4]}
        />
      </mesh>
    </>
  );
};

export default Castle;
