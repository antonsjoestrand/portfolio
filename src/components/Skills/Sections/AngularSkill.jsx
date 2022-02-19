import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../../sass/app.scss";
import "../Skills.scss";
import { SiAngular } from "react-icons/si";
import Modal from "./Modal";

export default function AngularSkill() {
  const angular = {
    name: "Angular",
    details: "is a TypeScript based open-source web application framework.",
  };

  const [angularOpen, setAngularOpen] = useState(false);

  const closeAngular = () => setAngularOpen(false);
  const openAngular = () => setAngularOpen(true);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        onClick={() => (angularOpen ? closeAngular() : openAngular())}
      >
        <SiAngular className='angular' />
      </motion.div>

      {/* SKILL MODAL */}

      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {angularOpen && (
          <Modal
            modalOpen={angularOpen}
            handleClose={closeAngular}
            id='angular'
            name={angular.name}
            details={angular.details}
          />
        )}
      </AnimatePresence>
    </>
  );
}
