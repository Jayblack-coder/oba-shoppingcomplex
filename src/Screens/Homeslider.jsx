import { Box } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "/src/assets/hero1.jpg",
  "/src/assets/hero2.jpg",
  "/src/assets/hero3.jpg",
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

export default function HomeImageSlider() {
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = (newDirection) => {
    setIndex([
      (index + newDirection + images.length) % images.length,
      newDirection,
    ]);
  };

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: 300, md: 500 },
        overflow: "hidden",
        borderRadius: 3,
      }}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={index}
          src={images[index]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 260, damping: 30 },
            opacity: { duration: 0.4 },
          }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, { offset }) => {
            if (offset.x > 100) paginate(-1);
            else if (offset.x < -100) paginate(1);
          }}
        />
      </AnimatePresence>
    </Box>
  );
}
