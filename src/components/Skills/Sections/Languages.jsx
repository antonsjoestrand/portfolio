import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../../sass/app.scss";
import "../Skills.scss";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiPython,
} from "react-icons/si";
import Modal from "./Modal";

export default function Languages() {
  const languages = {
    html: {
      name: "HTML5",
      details:
        "is a markup language used for structuring and presenting content on the web.",
    },
    css: {
      name: "CSS3",
      details:
        "is a style sheet language used for describing the presentation of the markup language.",
    },
    javascript: {
      name: "JavaScript",
      details: "is a programming language that manages web page behavior.",
    },

    typescript: {
      name: "TypeScript",
      details:
        "is a programming language that is a strict syntactical superset of JavaScript.",
    },
    php: {
      name: "PHP",
      details:
        "is a general-purpose scripting language geared towards web development.",
    },
    python: {
      name: "Python",
      details:
        "is an interpreted high-level general-purpose programming language.",
    },
  };

  const [htmlOpen, setHtmlOpen] = useState(false);
  const [cssOpen, setCssOpen] = useState(false);
  const [jsOpen, setJsOpen] = useState(false);
  const [tsOpen, setTsOpen] = useState(false);
  const [phpOpen, setPhpOpen] = useState(false);
  const [pyOpen, setPyOpen] = useState(false);

  const closeHtml = () => setHtmlOpen(false);
  const openHtml = () => setHtmlOpen(true);

  const closeCss = () => setCssOpen(false);
  const openCss = () => setCssOpen(true);

  const closeJs = () => setJsOpen(false);
  const openJs = () => setJsOpen(true);

  const closeTs = () => setTsOpen(false);
  const openTs = () => setTsOpen(true);

  const closePhp = () => setPhpOpen(false);
  const openPhp = () => setPhpOpen(true);

  const closePy = () => setPyOpen(false);
  const openPy = () => setPyOpen(true);

  return (
    <>
      <div className='row'>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={() => (htmlOpen ? closeHtml() : openHtml())}
        >
          <SiHtml5 className='html5' />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={() => (cssOpen ? closeCss() : openCss())}
        >
          <SiCss3 className='css3' />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={() => (jsOpen ? closeJs() : openJs())}
        >
          <SiJavascript className='javascript' />
        </motion.div>

        {/* SKILL MODALS */}

        <AnimatePresence
          initial={false}
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {htmlOpen && (
            <Modal
              modalOpen={htmlOpen}
              handleClose={closeHtml}
              id='html5'
              name={languages.html.name}
              details={languages.html.details}
            />
          )}

          {cssOpen && (
            <Modal
              modalOpen={cssOpen}
              handleClose={closeCss}
              id='css3'
              name={languages.css.name}
              details={languages.css.details}
            />
          )}

          {jsOpen && (
            <Modal
              modalOpen={jsOpen}
              handleClose={closeJs}
              id='javascript'
              name={languages.javascript.name}
              details={languages.javascript.details}
            />
          )}
        </AnimatePresence>
      </div>
      <div className='row'>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={() => (tsOpen ? closeTs() : openTs())}
        >
          <SiTypescript className='typescript' />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={() => (phpOpen ? closePhp() : openPhp())}
        >
          <SiPhp className='php' />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={() => (pyOpen ? closePy() : openPy())}
        >
          <SiPython className='python' />
        </motion.div>

        {/* SKILL MODALS */}

        <AnimatePresence
          initial={false}
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {tsOpen && (
            <Modal
              modalOpen={tsOpen}
              handleClose={closeTs}
              id='typescript'
              name={languages.typescript.name}
              details={languages.typescript.details}
            />
          )}

          {phpOpen && (
            <Modal
              modalOpen={phpOpen}
              handleClose={closePhp}
              id='php'
              name={languages.php.name}
              details={languages.php.details}
            />
          )}

          {pyOpen && (
            <Modal
              modalOpen={pyOpen}
              handleClose={closePy}
              id='python'
              name={languages.python.name}
              details={languages.python.details}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
