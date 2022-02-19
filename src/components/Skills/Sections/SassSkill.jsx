import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../../sass/app.scss";
import "../Skills.scss";
import {
  SiSass,
} from "react-icons/si";
import Modal from "./Modal";

export default function SassSkill() {
  const sass = {
    name: "Sass",
    details:
      "is a preprocessor scripting language that is interpreted or compiled into CSS.",
  };

  const [sassOpen, setSassOpen] = useState(false);

  const closeSass = () => setSassOpen(false);
  const openSass = () => setSassOpen(true);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        onClick={() => (sassOpen ? closeSass() : openSass())}
      >
        <SiSass className='sass' />
      </motion.div>

      {/* SKILL MODAL */}

      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {sassOpen && (
          <Modal
            modalOpen={sassOpen}
            handleClose={closeSass}
            id='sass'
            name={sass.name}
            details={sass.details}
          />
        )}
      </AnimatePresence>
    </>
  );
}
