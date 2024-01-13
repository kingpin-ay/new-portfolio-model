import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { revealAnimationVariant } from "../navbarVariants";

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
}

const Reveal = ({ children, width = "fit-content" }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref, { once: true });
  const animationControllerMain = useAnimation();
  const animationControllerSlider = useAnimation();

  useEffect(() => {
    if (isVisible) {
      animationControllerMain.start("visible");
      animationControllerSlider.start("sliderVisible");
    }
  }, [isVisible]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={revealAnimationVariant}
        initial="hidden"
        animate={animationControllerMain}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={revealAnimationVariant}
        initial="sliderHidden"
        animate={animationControllerSlider}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          zIndex: 20,
        }}
        className="bg-extraDark"
      />
    </div>
  );
};

export default Reveal;
