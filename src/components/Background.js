import React, { useRef } from "react";
import "../scss/App.scss";
import { Canvas, useFrame } from "react-three-fiber";
import { softShadows, MeshWobbleMaterial } from "drei";

import { a } from "react-spring/three";

softShadows();

const SpinMesh = ({ position, color, args, speed, Mouse }) => {
  const mesh = useRef(null);

  let cursorY = 0;
  let cursorX = 0;

  useFrame(() => {
    if (window.innerWidth < 500) {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.006;
    } else {
      if (
        localStorage.getItem("cursorY") !== cursorY ||
        localStorage.getItem("cursorX") !== cursorX
      ) {
        cursorY = localStorage.getItem("cursorY");
        cursorX = localStorage.getItem("cursorX");
        mesh.current.rotation.x = cursorY / 700 + cursorX / 700;
        mesh.current.rotation.y = cursorY / 700 - cursorX / 700;
      }
    }
  });

  return (
    <a.mesh castShadow position={position} ref={mesh}>
      <boxBufferGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial
        attach="material"
        color={color}
        speed={speed}
        factor={0.5}
      />
    </a.mesh>
  );
};

function Background({ Mouse }) {
  return (
    <div className="bg">
      <Canvas colorManagement camera={{ position: [-5, 2, 10] }} shadowMap>
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[10, -10, 20]} intensity={0.5} />
        <pointLight position={[0, -10, 50]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />
        <pointLight position={[0, 100, 0]} intensity={1.5} />

        <SpinMesh
          position={[0, 0, 0]}
          args={[8, 8, 8]}
          color="white"
          speed={0.4}
          Mouse={Mouse}
        />
      </Canvas>
    </div>
  );
}

export default Background;
