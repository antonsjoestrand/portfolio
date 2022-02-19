import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../../sass/app.scss";
import "../Skills.scss";
import { SiNextdotjs } from "react-icons/si";
import Modal from "./Modal";

export default function NextSkill() {
  const nextjs = {
    name: "Next.js",
    details:
      "is an open-source, React based development framework built on top of Node.js.",
  };

  const [nextjsOpen, setNextjsOpen] = useState(false);

  const closeNextjs = () => setNextjsOpen(false);
  const openNextjs = () => setNextjsOpen(true);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        onClick={() => (nextjsOpen ? closeNextjs() : openNextjs())}
      >
        <SiNextdotjs />
      </motion.div>

      {/* SKILL MODAL */}

      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {nextjsOpen && (
          <Modal
            modalOpen={nextjsOpen}
            handleClose={closeNextjs}
            id='nextjs'
            name={nextjs.name}
            details={nextjs.details}
          />
        )}
      </AnimatePresence>
    </>
  );
}
