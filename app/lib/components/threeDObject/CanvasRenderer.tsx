import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { ReactNode } from "react";

const CanvasRenderer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-full">
      <Canvas>{children}</Canvas>
    </div>
  );
};

export default CanvasRenderer;
