import "../../sass/app.scss";
import "./Projects.scss";
import { motion } from "framer-motion";
import Card from "./Card";
import SectionTitle from "../Title/SectionTitle";

export default function Projects() {
  return (
    <div className='container container--projects'>
      <div className='wrapper'>
        <section className='projects'>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='section__title'
            id='projects'
          >
            <SectionTitle title='My Projects' color='#7547ff' />
            <p>I design for the experience with a touch of brilliance.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.4, duration: 1.5 }}
            className='projects__cards'
          >
            <Card
              to='/case-studies'
              name='projects__cards__card card--case-studies'
              icon='fa-solid fa-file-lines cat-icon'
              title='Case Studies'
            />
            <Card
              to='/development'
              name='projects__cards__card card--development'
              icon='fa-solid fa-browser cat-icon'
              title='Development'
            />
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", bounce: 0.4, duration: 1.5 }}
              className='projects__cards__small'
            >
              <Card
                to='/design'
                name='projects__cards__card card--design'
                icon='fa-solid fa-pen-ruler cat-icon'
                title='Design'
              />
              <Card
                to='/other'
                name='projects__cards__card card--other'
                icon='fa-solid fa-lightbulb cat-icon'
                title='Other'
              />
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
