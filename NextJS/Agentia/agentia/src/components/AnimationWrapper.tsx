import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimationWrapperProps {
  children: React.ReactNode;
  animation?: "fadeIn" | "slideUp" | "slideRight";
}

export default function AnimationWrapper({ children, animation = "fadeIn" }: AnimationWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const animations = {
    fadeIn: { opacity: isInView ? 1 : 0, transition: { duration: 0.8 } },
    slideUp: {
      opacity: isInView ? 1 : 0,
      y: isInView ? 0 : 50,
      transition: { duration: 0.8 }
    },
    slideRight: {
      opacity: isInView ? 1 : 0,
      x: isInView ? 0 : -50,
      transition: { duration: 0.8 }
    }
  };

  return (
    <motion.div ref={ref} animate={animations[animation]}>
      {children}
    </motion.div>
  );
}
