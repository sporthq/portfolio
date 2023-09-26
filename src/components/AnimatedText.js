import React from "react";
import { motion } from "framer-motion";

const AnimatedText = ({ text, className = "", fromBottom }) => {
  const quote = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };
  const singelWord = {
    initial: {
      opacity: 0,
      x: fromBottom ? 0 : 50,
      y: fromBottom ? 50 : 0,
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <motion.h2
      variants={quote}
      initial="initial"
      animate="animate"
      className={` w-full mx-auto ${className}`}
    >
      {text.split(" ").map((word, index) => (
        <motion.span variants={singelWord} className="inline-block" key={index}>
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.h2>
  );
};

export default AnimatedText;
