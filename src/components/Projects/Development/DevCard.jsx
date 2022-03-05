import "../../../sass/app.scss";
import { motion } from "framer-motion";

export default function StudyCard({
  name,
  title,
  labels,
  text,
  view,
  github,
  image,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", bounce: 0.4, duration: 1.5 }}
      className='project-card'
    >
      <div className={name}>
        <div className='text'>
          <h4 className='dev-title'>{title}</h4>
          {labels}
          <p className='dev-text'>{text}</p>
          <div className='links'>
            <motion.a whileHover={{ scale: 0.96 }} target='_blank' href={view}>
              Demo
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -10 }}
              target='_blank'
              href={github}
            >
              <i className='fa-brands fa-github'></i>
            </motion.a>
          </div>
        </div>
        <div className={image}></div>
      </div>
    </motion.div>
  );
}
