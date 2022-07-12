import "../../sass/app.scss";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import SectionTitle from "../Title/SectionTitle";
import LogoBackground from "./LogoBackground";
import Logo from "../Navigation/Logo";

export default function Footer() {
  const { scroll } = useLocomotiveScroll();

  const scrollTop = () => {
    scroll.scrollTo(0, { duration: 0, disableLerp: true });
  };

  return (
    <div className='container container--footer'>
      <div className='wrapper'>
        <footer className='footer'>
          <div className='section__title'>
            <div className='text'>
              <SectionTitle title='Contact Me' color='#7547ff' />
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
                  delay: 1,
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
            <div className='tablet-cta'>
              <Link
                to='/contact'
                onClick={scrollTop}
                className='cta contact--cta tablet-cta'
              >
                Let's Talk
                <span className='arrow'>
                  <i className='fa-solid fa-angle-right'></i>
                </span>
              </Link>
            </div>
          </div>
          <div className='footer__info'>
            <div className='footer__info__bg'>
              <LogoBackground />
            </div>
            <div className='footer__info__contact'>
              <Logo />
              <ul>
                <li>
                  <i className='fa-solid fa-phone'></i>+46 79 359 70 15
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
