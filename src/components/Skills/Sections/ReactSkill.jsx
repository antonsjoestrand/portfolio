import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../../sass/app.scss";
import "../Skills.scss";
import { SiReact } from "react-icons/si";
import Modal from "./Modal";

export default function ReactSkill() {
  const react = {
    name: "React",
    details:
      "is an open-source front-end JavaScript library for building user interfaces based on UI components.",
  };

  const [reactOpen, setReactOpen] = useState(false);

  const closeReact = () => setReactOpen(false);
  const openReact = () => setReactOpen(true);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        onClick={() => (reactOpen ? closeReact() : openReact())}
      >
        <SiReact className='react' />
      </motion.div>

      {/* SKILL MODAL */}

      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {reactOpen && (
          <Modal
            modalOpen={reactOpen}
            handleClose={closeReact}
            id='react'
            name={react.name}
            details={react.details}
          />
        )}
      </AnimatePresence>
    </>
  );
}
