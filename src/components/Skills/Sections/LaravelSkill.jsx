import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../../sass/app.scss";
import "../Skills.scss";
import { SiLaravel } from "react-icons/si";
import Modal from "./Modal";

export default function LaravelSkill() {
  // ==== Laravel ====

  const laravel = {
    name: "Laravel",
    details: "is an open-source PHP web framework.",
  };

  const [laravelOpen, setLaravelOpen] = useState(false);

  const closeLaravel = () => setLaravelOpen(false);
  const openLaravel = () => setLaravelOpen(true);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        onClick={() => (laravelOpen ? closeLaravel() : openLaravel())}
      >
        <SiLaravel className='laravel' />
      </motion.div>

      {/* SKILL MODAL */}

      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {laravelOpen && (
          <Modal
            modalOpen={laravelOpen}
            handleClose={closeLaravel}
            id='laravel'
            name={laravel.name}
            details={laravel.details}
          />
        )}
      </AnimatePresence>
    </>
  );
}
