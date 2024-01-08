"use client";
import Earth from "./lib/components/threeDObject/Earth";
import CanvasRenderer from "./lib/components/threeDObject/CanvasRenderer";

export default function Home() {
  return (
    <div className="w-full h-full">
      <CanvasRenderer>
        <Earth />
      </CanvasRenderer>
    </div>
  );
}
