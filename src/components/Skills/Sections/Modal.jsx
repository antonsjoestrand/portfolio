import "../Skills.scss";
import { motion } from "framer-motion";

export default function Modal({ handleClose, id, name, details }) {
  const dropIn = {
    hidden: {
      opacity: 0,
      scale: 0.6,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        bounce: 0.4,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.6,
    },
  };

  return (
    <motion.div
      onClick={handleClose}
      className='modal'
      variants={dropIn}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <button onClick={handleClose}>
        <motion.i
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className='fa-solid fa-xmark'
        ></motion.i>
      </button>
      <p>
        <span id={id}>{name}</span> {details}
      </p>
    </motion.div>
  );
}
