import "../../sass/app.scss";
import "./Skills.scss";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";
import SectionTitle from "../Title/SectionTitle";
import Adobe from "./Sections/Adobe";
import Design from "./Sections/Design";
import Tools from "./Sections/Tools";
import Languages from "./Sections/Languages";
import SassSkill from "./Sections/SassSkill";
import BootstrapSkill from "./Sections/BootstrapSkill";
import ReactSkill from "./Sections/ReactSkill";
import JquerySkill from "./Sections/JquerySkill";
import LaravelSkill from "./Sections/LaravelSkill";
import AngularSkill from "./Sections/AngularSkill";
import NextSkill from "./Sections/NextSkill";
import NodeSkill from "./Sections/NodeSkill";

export default function Skills() {
  return (
    <div className='container container--skills'>
      <div className='wrapper'>
        <section className='skills'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.2, duration: 1.5 }}
            className='section__title'
            id='skills'
          >
            <SectionTitle title='My Skillset' />
            <p>
              My first love and passion is design. I fell in love with front-end
              development because it gives me the ability to bring my ideas and
              concepts to life.
            </p>
          </motion.div>
          <div className='skills__box'>
            <IconContext.Provider
              value={{
                className: "react-icons",
                size: "2em",
                color: "rgba(136, 147, 170, 1)",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.2, duration: 1.5 }}
                className='skills__box__row row1'
              >
                <div className='box'>
                  <div className='box__title'>
                    <h5>Adobe</h5>
                  </div>
                  <Adobe />
                </div>
                <div className='box'>
                  <div className='box__title'>
                    <h5>Design</h5>
                  </div>
                  <Design />
                </div>
                <div className='box'>
                  <div className='box__title'>
                    <h5>Tools</h5>
                  </div>
                  <Tools />
                </div>
                <div className='box'>
                  <div className='box__title'>
                    <h5>Languages</h5>
                  </div>
                  <Languages />
                </div>
              </motion.div>
            </IconContext.Provider>
            <IconContext.Provider
              value={{
                className: "react-icons",
                size: "5em",
                color: "rgba(136, 147, 170, 1)",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.2, duration: 1.5 }}
                className='skills__box__row row2'
              >
                <div className='box'>
                  <div className='box__title'>
                    <h5>Sass</h5>
                  </div>
                  <SassSkill />
                </div>
                <div className='box'>
                  <div className='box__title'>
                    <h5>Bootstrap</h5>
                  </div>
                  <BootstrapSkill />
                </div>
                <div className='box'>
                  <div className='box__title'>
                    <h5>React</h5>
                  </div>
                  <ReactSkill />
                </div>
                <div className='box'>
                  <div className='box__title'>
                    <h5>jQuery</h5>
                  </div>
                  <JquerySkill />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.2, duration: 1.5 }}
                className='skills__box__row row3'
              >
                <div className='box'>
                  <div className='box__title'>
                    <h5>Node.js</h5>
                  </div>
                  <NodeSkill />
                </div>
                <div className='box'>
                  <div className='box__title'>
                    <h5>Next.js</h5>
                  </div>
                  <NextSkill />
                </div>
                <div className='box'>
                  <div className='box__title'>
                    <h5>Angular</h5>
                  </div>
                  <AngularSkill />
                </div>
                <div className='box'>
                  <div className='box__title'>
                    <h5>Laravel</h5>
                  </div>
                  <LaravelSkill />
                </div>
              </motion.div>
            </IconContext.Provider>
          </div>
        </section>
      </div>
    </div>
  );
}
