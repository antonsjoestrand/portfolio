import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../../sass/app.scss";
import "../Skills.scss";
import { SiNodedotjs } from "react-icons/si";
import Modal from "./Modal";

export default function NodeSkill() {
  const nodejs = {
    name: "Node.js",
    details:
      "is an open-source, cross-platform, back-end JavaScript runtime environment.",
  };

  const [nodejsOpen, setNodejsOpen] = useState(false);

  const closeNodejs = () => setNodejsOpen(false);
  const openNodejs = () => setNodejsOpen(true);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        onClick={() => (nodejsOpen ? closeNodejs() : openNodejs())}
      >
        <SiNodedotjs className='nodejs' />
      </motion.div>

      {/* SKILL MODAL */}

      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {nodejsOpen && (
          <Modal
            modalOpen={nodejsOpen}
            handleClose={closeNodejs}
            id='nodejs'
            name={nodejs.name}
            details={nodejs.details}
          />
        )}
      </AnimatePresence>
    </>
  );
}
