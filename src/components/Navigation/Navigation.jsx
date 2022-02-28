import React, { Component } from "react";
import "./Navigation.scss";
import { gsap, Circ } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default class Navigation extends Component {
  componentDidMount() {
    gsap.registerPlugin(ScrollToPlugin);
  }

  render() {
    const projects = () =>
      gsap.to(window, {
        duration: 0.8,
        ease: Circ.easeOut,
        scrollTo: {
          y: "#projects",
          offsetY: 100,
        },
      });

    const skills = () =>
      gsap.to(window, {
        duration: 0.8,
        ease: Circ.easeOut,
        scrollTo: {
          y: "#skills",
          offsetY: 80,
        },
      });

    const about = () =>
      gsap.to(window, {
        duration: 1.5,
        ease: Circ.easeOut,
        scrollTo: {
          y: "#about",
          offsetY: 40,
        },
      });

    const testimonials = () =>
      gsap.to(window, {
        duration: 1.5,
        ease: Circ.easeOut,
        scrollTo: {
          y: "#testimonials",
          offsetY: 40,
        },
      });

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
}
