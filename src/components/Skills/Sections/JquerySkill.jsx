import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../../sass/app.scss";
import "../Skills.scss";
import { SiJquery } from "react-icons/si";
import Modal from "./Modal";

export default function JquerySkill() {
  const jquery = {
    name: "jQuery",
    details:
      "is a JavaScript library designed to simplify HTML DOM manipulation.",
  };

  const [jqueryOpen, setJqueryOpen] = useState(false);

  const closeJquery = () => setJqueryOpen(false);
  const openJquery = () => setJqueryOpen(true);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        onClick={() => (jqueryOpen ? closeJquery() : openJquery())}
      >
        <SiJquery className='jquery' />
      </motion.div>

      {/* SKILL MODAL */}

      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {jqueryOpen && (
          <Modal
            modalOpen={jqueryOpen}
            handleClose={closeJquery}
            id='jquery'
            name={jquery.name}
            details={jquery.details}
          />
        )}
      </AnimatePresence>
    </>
  );
}
