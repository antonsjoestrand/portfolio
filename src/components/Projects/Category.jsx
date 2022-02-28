import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Category({ to, name, title, icon }) {
  return (
    <motion.div whileHover={{ scale: 0.96 }}>
      <Link to={to} className={name}>
        {title}
        <i className={icon}></i>
      </Link>
    </motion.div>
  );
}
