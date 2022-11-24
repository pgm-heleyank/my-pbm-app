import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Suspense } from "react";
import Castle from "./Castle";
import Ground from "./Ground";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import PinBall from "./PinBall";
import LeftFlipper from "./LeftFlipper";
import RightFlipper from "./RightFlipper";

const Scene = () => {
  const result = useLoader(GLTFLoader, "models/lollipop11.glb");
  return (
    <Suspense fallback={null}>
      <Environment
        files={"textures/qwantani_puresky_4k-_1_.hdr"}
        background={"both"}
      />
      <PerspectiveCamera makeDefault position={[0, 0, 0]} fov={40} />
      <OrbitControls target={[-2.64, -0.71, 0.03]} />

      <Castle />
      <Ground object={result.nodes.platform} />
      <PinBall object={result.nodes.pinBall} />
      <LeftFlipper
        object={result.nodes.eclairLeft}
        object2={result.nodes.eclairLeftIcing}
      />
      <RightFlipper
        object={result.nodes.eclairRight}
        object2={result.nodes.eclairRightIcing}
      />
    </Suspense>
  );
};

export default Scene;
