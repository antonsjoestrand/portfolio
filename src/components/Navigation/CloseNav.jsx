import "./Navigation.scss";
import "./CloseNav.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from './Logo';

export default function CloseNav() {
  return (
    <nav className='navigation'>
      <ul className='navbar'>
        <li>
          <Logo />
        </li>
      </ul>
      <div className='close'>
        <motion.div whileHover={{ scale: 0.96 }}>
          <Link to='/'>
            Close<i className='fa-solid fa-xmark'></i>
          </Link>
        </motion.div>
      </div>
    </nav>
  );
}
