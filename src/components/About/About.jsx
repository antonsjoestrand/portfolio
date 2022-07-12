import "../../sass/app.scss";
import "./About.scss";
import { motion } from "framer-motion";
import SectionTitle from "../Title/SectionTitle";

export default function About() {
  return (
    <div className='container container--about'>
      <div className='wrapper'>
        <section className='about'>
          <div className='section__title' id='about'>
            <SectionTitle title='About Me' color='#7547ff' />
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
          </div>
          <div className='about__info'>
            <div className='about__info__profile'>
              <div className='image'></div>
              <motion.a
                whileHover={{ scale: 0.94 }}
                whileTap={{ scale: 1.05 }}
                target='_blank'
                href='https://drive.google.com/file/d/1ZU3_Gf7SmtKV9Uvvhgr-_ydA1pM_O7a-/view'
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
                <span>Gothenburg</span>
              </p>
              <p>
                I am a UI/UX Designer & Developer with a big background in
                technology. I have studied abroad in Vancouver where I met a lot
                of ambitious and talented people, as well as gathering most of
                the skillset that I have today. I am currently based in
                Gothenburg where I am working at Halon to improve their user
                experience and interface design.
              </p>
              <p>
                Day-to-day you can find me zoned in on solving complex
                design/coding problems, listening to a podcast, reading a design
                book, or spending time with my family and friends.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
