import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { sunPostion } from "../../data/cordinateData";

const Earth = () => {
  const mesh = useRef<any>(null);
  useFrame((state, delta) => {
    mesh.current.rotation.y += delta * -0.2;
  });

  const surroundingLightIntesity = 0.4;
  const sunPositonIncanvas = new THREE.Vector3().fromArray(
    sunPostion[sunPostion.length - 1]
  );
  const sunIntensity = 3.5;
  const earthRotationalPosition = new THREE.Euler().fromArray([0, 0, -0.3]);

  const [texture, normal, aoMap] = useLoader(TextureLoader, [
    "/2k_earth_daymap.jpg",
    "/2k_earth_normal_map.jpg",
    "/2k_earth_clouds.jpg",
  ]);

  return (
    <>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
      <ambientLight intensity={surroundingLightIntesity} />
      <directionalLight
        intensity={sunIntensity}
        position={sunPositonIncanvas}
      />
      <mesh rotation={earthRotationalPosition} ref={mesh}>
        <sphereGeometry args={[3, 64, 64]} />
        <meshStandardMaterial map={texture} normalMap={normal} aoMap={aoMap} />
      </mesh>
    </>
  );
};

export default Earth;
