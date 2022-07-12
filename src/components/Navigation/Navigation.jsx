import "./Navigation.scss";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Navigation() {
  const { scroll } = useLocomotiveScroll();

  const projects = () => {
    scroll.scrollTo("#projects", { duration: 800, offset: -160 });
  };

  const skills = () => {
    scroll.scrollTo("#skills", { duration: 1000, offset: -95 });
  };

  const about = () => {
    scroll.scrollTo("#about", { duration: 1200, offset: -95 });
  };

  const testimonials = () => {
    scroll.scrollTo("#testimonials", { duration: 1400, offset: -95 });
  };

  return (
    <nav className='navigation'>
      <ul className='navbar'>
        <li>
          <Logo />
        </li>
        <motion.li className='nav' whileHover={{ scale: 1.2, rotate: -10 }}>
          <Link to='/' onClick={projects}>
            Projects
          </Link>
        </motion.li>
        <motion.li className='nav' whileHover={{ scale: 1.2, rotate: 10 }}>
          <Link to='/' onClick={skills}>
            Skills
          </Link>
        </motion.li>
        <motion.li className='nav' whileHover={{ scale: 1.2, rotate: -10 }}>
          <Link to='/' onClick={about}>
            About
          </Link>
        </motion.li>
        <motion.li className='nav' whileHover={{ scale: 1.2, rotate: 10 }}>
          <Link to='/' onClick={testimonials}>
            Testimonials
          </Link>
        </motion.li>
      </ul>
      <div className='contact'>
        <motion.div whileHover={{ scale: 0.96, y: 4, x: 4 }}>
          <Link to='/contact'>Let's Talk</Link>
        </motion.div>
      </div>
    </nav>
  );
}
