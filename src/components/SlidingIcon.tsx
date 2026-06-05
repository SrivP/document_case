import { useMemo } from "react";
import { motion } from "motion/react";

function SlidingIcon({
  corner = "top-left",
  zone = "left",
  children,
  onClick,
  className = "",
}: any) {
  // STRATIFIED Y POSITIONING (Anti-Overlap)
  // Top icons stay in the upper half (15% to 40%)
  // Bottom icons stay in the lower half (55% to 80%)
  const randomY = useMemo(() => {
    if (corner.includes("top")) {
      return Math.floor(Math.random() * 25) + 15 + "%";
    } else {
      return Math.floor(Math.random() * 25) + 55 + "%";
    }
  }, [corner]);

  // X POSITIONING (Stays safely on the sides)
  const randomX = useMemo(() => {
    if (zone === "left") {
      return Math.floor(Math.random() * 15) + 5 + "%";
    } else {
      return Math.floor(Math.random() * 15) + 75 + "%";
    }
  }, [zone]);

  const finalRotation = useMemo(() => Math.floor(Math.random() * 30) - 15, []);
  const randomDelay = useMemo(() => Math.random() * 0.4, []);

  const initialPositions: Record<string, { left: string; top: string }> = {
    "top-left": { left: "-20%", top: "-20%" },
    "top-right": { left: "120%", top: "-20%" },
    "bottom-left": { left: "-20%", top: "120%" },
    "bottom-right": { left: "120%", top: "120%" },
  };

  return (
    <motion.div
      onClick={onClick}
      // We apply the incoming className prop here!
      // Removed the default bg colors so your custom classes apply cleanly.
      className={`absolute rounded-2xl flex items-center justify-center px-6 py-4 cursor-pointer transition-colors z-20 ${className}`}
      initial={{
        ...initialPositions[corner],
        rotate: finalRotation - 60,
      }}
      animate={{
        left: randomX,
        top: randomY,
        rotate: finalRotation,
      }}
      whileHover={{
        scale: 1.1,
        rotate: 0,
        zIndex: 50,
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 35,
        damping: 10,
        mass: 1.2,
        delay: randomDelay,
      }}
    >
      {children}
    </motion.div>
  );
}

export default SlidingIcon;
