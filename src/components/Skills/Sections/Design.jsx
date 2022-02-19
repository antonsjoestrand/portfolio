import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../../sass/app.scss";
import "../Skills.scss";
import {
  SiFigma,
  SiSketch,
  SiInvision,
  SiAffinitydesigner,
  SiFramer,
} from "react-icons/si";
import Modal from "./Modal";

export default function Design() {
  const design = {
    figma: {
      name: "Figma",
      details:
        "is a collaboration, vector graphics editor and design application.",
    },
    sketch: {
      name: "Sketch",
      details: "is a vector graphics editor and design application for macOS.",
    },
    invision: {
      name: "InVision",
      details: "is a visual collaboration design platform.",
    },

    affinity: {
      name: "Affinity Designer",
      details: "is a vector graphics editor and design application.",
    },
    framer: {
      name: "Framer",
      details: "is a page layout design application and animation tool.",
    },
  };

  const [fiOpen, setFiOpen] = useState(false);
  const [skOpen, setSkOpen] = useState(false);
  const [inOpen, setInOpen] = useState(false);
  const [afOpen, setAfOpen] = useState(false);
  const [frOpen, setFrOpen] = useState(false);

  const closeFi = () => setFiOpen(false);
  const openFi = () => setFiOpen(true);

  const closeSk = () => setSkOpen(false);
  const openSk = () => setSkOpen(true);

  const closeIn = () => setInOpen(false);
  const openIn = () => setInOpen(true);

  const closeAf = () => setAfOpen(false);
  const openAf = () => setAfOpen(true);

  const closeFr = () => setFrOpen(false);
  const openFr = () => setFrOpen(true);

  return (
    <>
      <div className='row'>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={() => (fiOpen ? closeFi() : openFi())}
        >
          <SiFigma />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={() => (skOpen ? closeSk() : openSk())}
        >
          <SiSketch className='sketch' />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={() => (inOpen ? closeIn() : openIn())}
        >
          <SiInvision className='invision' />
        </motion.div>

        {/* SKILL MODALS */}

        <AnimatePresence
          initial={false}
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {fiOpen && (
            <Modal
              modalOpen={fiOpen}
              handleClose={closeFi}
              id='figma'
              name={design.figma.name}
              details={design.figma.details}
            />
          )}

          {skOpen && (
            <Modal
              modalOpen={skOpen}
              handleClose={closeSk}
              id='sketch'
              name={design.sketch.name}
              details={design.sketch.details}
            />
          )}

          {inOpen && (
            <Modal
              modalOpen={inOpen}
              handleClose={closeIn}
              id='invision'
              name={design.invision.name}
              details={design.invision.details}
            />
          )}
        </AnimatePresence>
      </div>
      <div className='row'>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={() => (afOpen ? closeAf() : openAf())}
        >
          <SiAffinitydesigner className='affinity' />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={() => (frOpen ? closeFr() : openFr())}
        >
          <SiFramer className='framer' />
        </motion.div>

        {/* SKILL MODALS */}

        <AnimatePresence
          initial={false}
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {afOpen && (
            <Modal
              modalOpen={afOpen}
              handleClose={closeAf}
              id='affinity'
              name={design.affinity.name}
              details={design.affinity.details}
            />
          )}

          {frOpen && (
            <Modal
              modalOpen={frOpen}
              handleClose={closeFr}
              id='framer'
              name={design.framer.name}
              details={design.framer.details}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
}