import "./index.css";
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { Physics } from "@react-three/cannon";

createRoot(document.getElementById("root")).render(
  <Canvas>
    <Physics
      broadphase="SAP"
      contactEquationRelaxation={4}
      friction={1e-3}
      allowSleep
    >
      <Scene />
    </Physics>
  </Canvas>
);
