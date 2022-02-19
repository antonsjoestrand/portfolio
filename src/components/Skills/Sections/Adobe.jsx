import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import "../../../sass/app.scss";
import "../Skills.scss";
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobexd,
  SiAdobepremierepro,
  SiAdobeaftereffects,
} from "react-icons/si";
import Modal from "./Modal";

export default function Adobe() {
  const adobe = {
    photoshop: {
      name: "Photoshop",
      details: "is a raster graphics editor application.",
    },
    illustrator: {
      name: "Illustrator",
      details: "is a vector graphics editor and design application.",
    },
    indesign: {
      name: "InDesign",
      details: "is a desktop publishing and page layout design application.",
    },

    adobexd: {
      name: "Adobe XD",
      details: "is a vector-based user experience design application.",
    },
    premiere: {
      name: "Premiere",
      details: "is a timeline-based video editing application.",
    },
    aftereffects: {
      name: "After Effects",
      details:
        "is a visual effects, motion graphics, and compositing application.",
    },
  };

  const [psOpen, setPsOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const [idOpen, setIdOpen] = useState(false);
  const [xdOpen, setXdOpen] = useState(false);
  const [prOpen, setPrOpen] = useState(false);
  const [aeOpen, setAeOpen] = useState(false);

  const closePs = () => setPsOpen(false);
  const openPs = () => setPsOpen(true);

  const closeAi = () => setAiOpen(false);
  const openAi = () => setAiOpen(true);

  const closeId = () => setIdOpen(false);
  const openId = () => setIdOpen(true);

  const closeXd = () => setXdOpen(false);
  const openXd = () => setXdOpen(true);

  const closePr = () => setPrOpen(false);
  const openPr = () => setPrOpen(true);

  const closeAe = () => setAeOpen(false);
  const openAe = () => setAeOpen(true);

  return (
    <>
      <div className='row'>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={() => (psOpen ? closePs() : openPs())}
        >
          <SiAdobephotoshop className='photoshop' />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={() => (aiOpen ? closeAi() : openAi())}
        >
          <SiAdobeillustrator className='illustrator' />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={() => (idOpen ? closeId() : openId())}
        >
          <SiAdobeindesign className='indesign' />
        </motion.div>

        {/* SKILL MODALS */}

        <AnimatePresence
          initial={false}
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {psOpen && (
            <Modal
              modalOpen={psOpen}
              handleClose={closePs}
              id='photoshop'
              name={adobe.photoshop.name}
              details={adobe.photoshop.details}
            />
          )}

          {aiOpen && (
            <Modal
              modalOpen={aiOpen}
              handleClose={closeAi}
              id='illustrator'
              name={adobe.illustrator.name}
              details={adobe.illustrator.details}
            />
          )}

          {idOpen && (
            <Modal
              modalOpen={idOpen}
              handleClose={closeId}
              id='indesign'
              name={adobe.indesign.name}
              details={adobe.indesign.details}
            />
          )}
        </AnimatePresence>
      </div>
      <div className='row'>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={() => (xdOpen ? closeXd() : openXd())}
        >
          <SiAdobexd className='xd' />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={() => (prOpen ? closePr() : openPr())}
        >
          <SiAdobepremierepro className='premiere' />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={() => (aeOpen ? closeAe() : openAe())}
        >
          <SiAdobeaftereffects className='aftereffects' />
        </motion.div>

        {/* SKILL MODALS */}

        <AnimatePresence
          initial={false}
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {xdOpen && (
            <Modal
              modalOpen={xdOpen}
              handleClose={closeXd}
              id='xd'
              name={adobe.adobexd.name}
              details={adobe.adobexd.details}
            />
          )}

          {prOpen && (
            <Modal
              modalOpen={prOpen}
              handleClose={closePr}
              id='premiere'
              name={adobe.premiere.name}
              details={adobe.premiere.details}
            />
          )}

          {aeOpen && (
            <Modal
              modalOpen={aeOpen}
              handleClose={closeAe}
              id='aftereffects'
              name={adobe.aftereffects.name}
              details={adobe.aftereffects.details}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
