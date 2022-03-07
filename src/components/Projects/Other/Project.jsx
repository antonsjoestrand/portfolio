import { motion } from "framer-motion";
import "../../../sass/app.scss";
import "../Projects.scss";
import "./Other.scss";

export default function Project({
  title,
  description,
  content,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", bounce: 0.4, duration: 1.5 }}
      className='other-projects__section'
    >
      <div className='project-title'>
        <h4>
          <span>{title}</span> <span>{description}</span>
        </h4>
      </div>
      <div className='project-content'>
        {content}
      </div>
    </motion.div>
  );
}
