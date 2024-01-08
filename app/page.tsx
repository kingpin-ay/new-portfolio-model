"use client";
import Earth from "./lib/components/threeDObject/Earth";
import CanvasRenderer from "./lib/components/threeDObject/CanvasRenderer";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-between gap-10">
      <CanvasRenderer>
        <Earth />
      </CanvasRenderer>

      <div className="flex justify-center text-center">
        <h2 className="kbd">Ayush Mondal</h2>
      </div>
    </div>
  );
}
