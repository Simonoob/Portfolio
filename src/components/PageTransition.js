import React from "react";
import { motion } from "framer-motion";

const pageTransitionVariants = {
  in: {
    // transition: {
    //   staggerChildren: 0.2,
    // },
  },
  out: {
    // transition: {
    //   staggerChildren: 0.5,
    // },
  },
};

const liTransition = {
  in: {
    height: "0vh",
  },
  out: {
    height: "100vh",
  },
};

const PageTransition = () => {
  return (
    <motion.ul
      className="overlay"
      variants={pageTransitionVariants}
      initial="out"
      animate="in"
      exit="out"
    >
      <motion.li
        className="odd"
        variants={liTransition}
        initial="out"
        animate="in"
        exit="out"
        transition={{ duration: 0.2, ease: "easeOut", delay: 0 }}
      ></motion.li>
      <motion.li
        variants={liTransition}
        initial="out"
        animate="in"
        exit="out"
        transition={{ duration: 0.2, ease: "easeOut", delay: 0.1 }}
      ></motion.li>
      <motion.li
        className="odd"
        variants={liTransition}
        initial="out"
        animate="in"
        exit="out"
        transition={{ duration: 0.2, ease: "easeOut", delay: 0.2 }}
      ></motion.li>
      <motion.li
        variants={liTransition}
        initial="out"
        animate="in"
        exit="out"
        transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
      ></motion.li>
      <motion.li
        className="odd"
        variants={liTransition}
        initial="out"
        animate="in"
        exit="out"
        transition={{ duration: 0.2, ease: "easeOut", delay: 0.4 }}
      ></motion.li>
    </motion.ul>
  );
};

export default PageTransition;
