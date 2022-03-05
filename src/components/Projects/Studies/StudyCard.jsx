import "../../../sass/app.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function StudyCard({ to, name, logo, text, image }) {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", bounce: 0.4, duration: 1.5 }}
      whileHover={{ scale: 0.98, transition: 0.5 }}
      className='project-card'
    >
      <Link to={to} onClick={scrollTop} className={name}>
        <div className='text'>
          <img className='brand' src={logo} alt='Brand logo' />
          <p className='study-text'>{text}</p>
        </div>
        <div className={image}></div>
      </Link>
    </motion.div>
  );
}
