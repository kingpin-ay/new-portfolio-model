"use client";
import Earth from "./lib/components/threeDObject/Earth";
import CanvasRenderer from "./lib/components/threeDObject/CanvasRenderer";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-between gap-10">
      <CanvasRenderer>
        <Earth />
      </CanvasRenderer>

      <div className="flex flex-col justify-center text-center text-extraLight">
        <div className="hero">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">
                Welcome to my digital realm!
              </h1>
              <p className="py-6">
                I'm{" "}
                <span className="font-bold text-base-100 underline underline-offset-2">
                  Ayush Mondal
                </span>
                —an ardent developer on a mission to turn innovative ideas into
                powerful, secure solutions. Specializing in Rust, TypeScript,
                Next.js, and Cryptography. Fascinated by the possibilities of
                blockchain.
              </p>
              <button className="btn btn-primary">Explore</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
