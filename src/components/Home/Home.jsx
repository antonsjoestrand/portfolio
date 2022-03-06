import React, { Component } from "react";
import { gsap, Power2, Circ } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { motion } from "framer-motion";
import "../../sass/app.scss";
import { Link } from "react-router-dom";
import Elements from "./Elements";
import Navigation from "../Navigation/Navigation";
import IntroFooter from "../IntroFooter/IntroFooter";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import About from "../About/About";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";

export default class Home extends Component {
  componentDidMount() {
    gsap.registerPlugin(ScrollToPlugin);

    let tla = gsap.timeline({ repeat: -1 });

    tla
      .to(".arrow", 0, {
        yoyo: true,
        repeat: 1,
        ease: Power2.easeOut,
      })
      .to(".arrow", 1, {
        x: 12,
        ease: Power2.easeOut,
        yoyo: true,
        repeat: 1,
      });
  }

  render() {
    const introText = [
      "Hey",
      "There!",
      "I'm...",
      "Anton",
      "Sjöstrand",
      "UI/UX",
      "Designer",
      "&",
      "Developer",
    ];

    const intro = {
      hidden: { opacity: 1 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.25,
        },
      },
    };

    const letter = {
      hidden: { opacity: 0, scale: 0.5, skew: 40, x: -40, y: -20 },
      visible: {
        type: "spring",
        bounce: 1,
        opacity: 1,
        scale: 1,
        skew: 0,
        x: 0,
        y: 0,
      },
    };

    const projects = () =>
      gsap.to(window, {
        duration: 0.8,
        ease: Circ.easeOut,
        scrollTo: {
          y: "#projects",
          offsetY: 100,
        },
      });

    return (
      <motion.div
        initial={{ opacity: 0.5 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className='container container--hero'>
          <div className='wrapper'>
            <Navigation />
            <header className='header'>
              <section className='intro'>
                <motion.div
                  variants={intro}
                  initial='hidden'
                  animate='visible'
                  className='intro__text'
                >
                  <h2>
                    <motion.span variants={letter}>{introText[0]}</motion.span>{" "}
                    <motion.span variants={letter}>{introText[1]}</motion.span>{" "}
                    {introText[2].split("").map((char, index) => {
                      return (
                        <motion.span key={char + "-" + index} variants={letter}>
                          {char}
                        </motion.span>
                      );
                    })}
                    <br />
                    {introText[3].split("").map((char, index) => {
                      return (
                        <motion.span key={char + "-" + index} variants={letter}>
                          {char}
                        </motion.span>
                      );
                    })}{" "}
                    {introText[4].split("").map((char, index) => {
                      return (
                        <motion.span key={char + "-" + index} variants={letter}>
                          {char}
                        </motion.span>
                      );
                    })}
                  </h2>
                  <h2 className='tablet-title'>Anton Sjöstrand</h2>
                  <p>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 5.6, duration: 0.8 }}
                    >
                      UI/UX Designer
                    </motion.span>{" "}
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 6.2, duration: 0.8 }}
                    >
                      &
                    </motion.span>{" "}
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 6.8, duration: 0.8 }}
                    >
                      Developer
                    </motion.span>
                  </p>
                  <p className='tablet-paragraph'>
                    <span>UI/UX Designer</span> <span>&</span>{" "}
                    <span>Developer</span>
                  </p>
                </motion.div>
                <motion.div whileHover={{ scale: 0.94, y: 6, x: 6 }}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.84, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      delay: 7.4,
                      type: "spring",
                      bounce: 0.6,
                      duration: 1.5,
                    }}
                  >
                    <Link
                      to='/'
                      onClick={projects}
                      className='cta projects--cta'
                    >
                      See My Projects
                      <span className='arrow'>
                        <i className='fa-solid fa-angle-right'></i>
                      </span>
                    </Link>
                  </motion.div>
                </motion.div>
                <div className='tablet-cta'>
                  <Link
                    to='/'
                    onClick={projects}
                    className='cta projects--cta tablet-cta'
                  >
                    See My Projects
                    <span className='arrow'>
                      <i className='fa-solid fa-angle-right'></i>
                    </span>
                  </Link>
                </div>
              </section>
              <section className='elements'>
                <Elements />
              </section>
            </header>
            <IntroFooter />
          </div>
        </div>

        <Projects />

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", bounce: 0.4, duration: 1.5 }}
        >
          <Skills />
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", bounce: 0.4, duration: 1.5 }}
        >
          <About />
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", bounce: 0.4, duration: 1.5 }}
        >
          <Testimonials />
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", bounce: 0.4, duration: 1.5 }}
        >
          <Footer />
        </motion.div>
      </motion.div>
    );
  }
}
