import "../../sass/app.scss";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionTitle from "../Title/SectionTitle";
import LogoBackground from "./LogoBackground";
import React, { Component } from "react";
import Logo from "../Navigation/Logo";

export default class Footer extends Component {
  render() {
    const scrollTop = () => {
      window.scrollTo(0, 0);
    };

    return (
      <div className='container container--footer'>
        <div className='wrapper'>
          <footer className='footer'>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className='section__title'
            >
              <div className='text'>
                <SectionTitle title='Connect With Me' color='#7547ff' />
                <p>
                  I'm not afraid of a challenge. And I love creating brilliant
                  user experiences.
                </p>
              </div>
              <motion.div whileHover={{ scale: 0.94, y: 6, x: 6 }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.84, y: 100 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.5,
                    type: "spring",
                    bounce: 0.6,
                    duration: 1.5,
                  }}
                  className='contact'
                >
                  <Link
                    to='/contact'
                    onClick={scrollTop}
                    className='cta contact--cta'
                  >
                    Let's Talk
                    <span className='arrow'>
                      <i className='fa-solid fa-angle-right'></i>
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
            <div className='footer__info'>
              <div className='footer__info__bg'>
                <LogoBackground />
              </div>
              <div className='footer__info__contact'>
                <Logo />
                <ul>
                  <li>
                    <i className='fa-solid fa-phone'></i>+1 778 222 1708
                  </li>
                  <li>
                    <i className='fa-solid fa-envelope'></i>
                    anton.r.sjostrand@gmail.com
                  </li>
                </ul>
              </div>
              <div className='footer__info__copy'>
                <p className='copy'>
                  &copy; 2021 Anton Sjöstrand, All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
