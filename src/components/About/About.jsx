import "../../sass/app.scss";
import "./About.scss";
import { motion } from "framer-motion";
import SectionTitle from "../Title/SectionTitle";

export default function About() {
  return (
    <div className='container container--about'>
      <div className='wrapper'>
        <section className='about'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.2, duration: 1.5 }}
            className='section__title'
            id='about'
          >
            <SectionTitle title='About Me' />
            <div className='social'>
              <motion.a
                whileHover={{ scale: 1.2, rotate: -10 }}
                href='https://www.linkedin.com/in/antonsj/'
                target='_blank'
                rel='noreferrer'
                className='linkedin'
              >
                <i className='fa-brands fa-linkedin-in'></i>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: -10 }}
                href='https://dribbble.com/antonsjoestrand'
                target='_blank'
                rel='noreferrer'
                className='dribbble'
              >
                <i className='fa-brands fa-dribbble'></i>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: -10 }}
                href='https://github.com/antonsjoestrand'
                target='_blank'
                rel='noreferrer'
                className='github'
              >
                <i className='fa-brands fa-github'></i>
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.2, duration: 1.5 }}
            className='about__info'
          >
            <div className='about__info__profile'>
              <div className='image'></div>
              <motion.a
                whileHover={{ scale: 0.94 }}
                whileTap={{ scale: 1.05 }}
                href='#'
              >
                See My Resume
                <i className='fa-regular fa-arrow-down-to-bracket'></i>
              </motion.a>
            </div>
            <div className='about__info__text'>
              <p>
                <span>
                  <i className='fa-solid fa-location-dot'></i>
                </span>
                <span>Vancouver, B.C</span>
              </p>
              <p>
                I am an aspiring UI/UX Designer & Developer from Sweden who is
                currently based in Vancouver, where I recently attended VanArts
                and studied Web Development & Interactive Design. I believe that
                the trick to life is finding what you love to do, and that is
                ultimately my biggest strength, I don't just do the things that
                I do. I love the things that I do.
              </p>
              <p>
                Day-to-day you can find me zoned in on solving a complex problem
                in design or code, spending time with my friends and family,
                listening to a podcast or watching a good TV-Show.
              </p>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
