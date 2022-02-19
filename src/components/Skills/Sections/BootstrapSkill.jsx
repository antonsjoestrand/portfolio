import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../../sass/app.scss";
import "../Skills.scss";
import { SiBootstrap } from "react-icons/si";
import Modal from "./Modal";

export default function BootstrapSkill() {
  const bootstrap = {
    name: "Bootstrap",
    details:
      "is an open-source CSS framework directed at responsive web development.",
  };

  const [bootstrapOpen, setBootstrapOpen] = useState(false);

  const closeBootstrap = () => setBootstrapOpen(false);
  const openBootstrap = () => setBootstrapOpen(true);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        onClick={() => (bootstrapOpen ? closeBootstrap() : openBootstrap())}
      >
        <SiBootstrap className='bootstrap' />
      </motion.div>

      {/* SKILL MODAL */}

      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {bootstrapOpen && (
          <Modal
            modalOpen={bootstrapOpen}
            handleClose={closeBootstrap}
            id='bootstrap'
            name={bootstrap.name}
            details={bootstrap.details}
          />
        )}
      </AnimatePresence>
    </>
  );
}
