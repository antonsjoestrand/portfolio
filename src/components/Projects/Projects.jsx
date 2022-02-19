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
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.2, duration: 1.5 }}
            className='section__title'
            id="projects"
          >
            <SectionTitle title='My Projects' />
            <p>I design for the experience with a touch of brilliance.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.2, duration: 1.5 }}
            className='projects__cards'
          >
            <Card
              name='projects__cards__card studies'
              icon='fa-solid fa-file-lines cat-icon'
              title='Case Studies'
            />

            <Card
              name='projects__cards__card development'
              icon='fa-solid fa-browser cat-icon'
              title='Development'
            />
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", bounce: 0.2, duration: 1.5 }}
              className='projects__cards__small'
            >
              <Card
                name='projects__cards__card design'
                icon='fa-solid fa-pen-ruler cat-icon'
                title='Design'
              />
              <Card
                name='projects__cards__card other'
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
