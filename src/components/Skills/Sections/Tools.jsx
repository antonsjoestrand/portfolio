import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../../sass/app.scss";
import "../Skills.scss";
import {
  SiGithub,
  SiWordpress,
  SiDocker,
  SiMysql,
  SiMongodb,
  SiNpm,
} from "react-icons/si";
import Modal from "./Modal";

export default function Tools() {
  const tools = {
    github: {
      name: "GitHub",
      details:
        "is hosting provider for software development and version control using Git.",
    },
    docker: {
      name: "Docker",
      details:
        "is a tool that service products that use OS-level virtualization to deliver software in packages.",
    },
    wordpress: {
      name: "WordPress",
      details: "is an open-source content management system written in PHP.",
    },

    mysql: {
      name: "MySQL",
      details: "is an open-source relational database management system.",
    },
    mongodb: {
      name: "MongoDB",
      details:
        "is a source-available cross-platform document-oriented database program.",
    },
    npm: {
      name: "npm",
      details:
        "is a command line tool that manages Node packages in your development environment.",
    },
  };

  const [ghOpen, setGhOpen] = useState(false);
  const [doOpen, setDoOpen] = useState(false);
  const [wpOpen, setWpOpen] = useState(false);
  const [msOpen, setMsOpen] = useState(false);
  const [mdOpen, setMdOpen] = useState(false);
  const [npOpen, setNpOpen] = useState(false);

  const closeGh = () => setGhOpen(false);
  const openGh = () => setGhOpen(true);

  const closeDo = () => setDoOpen(false);
  const openDo = () => setDoOpen(true);

  const closeWp = () => setWpOpen(false);
  const openWp = () => setWpOpen(true);

  const closeMs = () => setMsOpen(false);
  const openMs = () => setMsOpen(true);

  const closeMd = () => setMdOpen(false);
  const openMd = () => setMdOpen(true);

  const closeNp = () => setNpOpen(false);
  const openNp = () => setNpOpen(true);

  return (
    <>
      <div className='row'>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={() => (ghOpen ? closeGh() : openGh())}
        >
          <SiGithub />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={() => (doOpen ? closeDo() : openDo())}
        >
          <SiDocker className='docker' />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={() => (wpOpen ? closeWp() : openWp())}
        >
          <SiWordpress />
        </motion.div>

        {/* SKILL MODALS */}

        <AnimatePresence
          initial={false}
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {ghOpen && (
            <Modal
              modalOpen={ghOpen}
              handleClose={closeGh}
              id='github'
              name={tools.github.name}
              details={tools.github.details}
            />
          )}

          {doOpen && (
            <Modal
              modalOpen={doOpen}
              handleClose={closeDo}
              id='docker'
              name={tools.docker.name}
              details={tools.docker.details}
            />
          )}

          {wpOpen && (
            <Modal
              modalOpen={wpOpen}
              handleClose={closeWp}
              id='wordpress'
              name={tools.wordpress.name}
              details={tools.wordpress.details}
            />
          )}
        </AnimatePresence>
      </div>
      <div className='row'>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={() => (msOpen ? closeMs() : openMs())}
        >
          <SiMysql className='mysql' />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={() => (mdOpen ? closeMd() : openMd())}
        >
          <SiMongodb className='mongodb' />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={() => (npOpen ? closeNp() : openNp())}
        >
          <SiNpm className='npm' />
        </motion.div>

        {/* SKILL MODALS */}

        <AnimatePresence
          initial={false}
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {msOpen && (
            <Modal
              modalOpen={msOpen}
              handleClose={closeMs}
              id='mysql'
              name={tools.mysql.name}
              details={tools.mysql.details}
            />
          )}

          {mdOpen && (
            <Modal
              modalOpen={mdOpen}
              handleClose={closeMd}
              id='mongodb'
              name={tools.mongodb.name}
              details={tools.mongodb.details}
            />
          )}

          {npOpen && (
            <Modal
              modalOpen={npOpen}
              handleClose={closeNp}
              id='npm'
              name={tools.npm.name}
              details={tools.npm.details}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
