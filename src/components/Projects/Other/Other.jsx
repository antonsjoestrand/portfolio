import { motion } from "framer-motion";
import "../../../sass/app.scss";
import "../Projects.scss";
import "./Other.scss";
import CloseNav from "../../Navigation/CloseNav";
import SectionTitle from "../../Title/SectionTitle";
import Category from "../Category";
import Project from "./Project";
import Resume from './images/resume.mp4';
import Disaster from './images/disaster.png';
import Cleanup from "./images/cleanup.png";
import Jesse from "./images/jesse.png";

export default function Other() {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className='container container--projects-page'
    >
      <div className='wrapper'>
        <CloseNav />
        <section className='projects-page'>
          <div className='section__title'>
            <SectionTitle title='Other' color='#30bb83' />
          </div>
          <nav className='category-nav'>
            <Category
              to='/case-studies'
              name='category case-studies'
              title='Case Studies'
              icon='fa-solid fa-file-lines'
            />
            <Category
              to='/development'
              name='category development'
              title='Development'
              icon='fa-solid fa-browser'
            />
            <Category
              to='/design'
              name='category design'
              title='Design'
              icon='fa-solid fa-pen-ruler'
            />
          </nav>

          <div className='other-projects'>
            <Project
              title='Resume'
              description='- After Effects'
              content={
                <video controls>
                  <source src={Resume} type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
              }
            />

            <Project
              title='Disaster'
              description='- Photoshop'
              content={<img src={Disaster} alt='Disaster' />}
            />

            <Project
              title='Cleanup'
              description='- Photoshop'
              content={<img src={Cleanup} alt='Cleanup' />}
            />

            <Project
              title='Jesse'
              description='- Photoshop'
              content={<img src={Jesse} alt='Jesse' />}
            />
          </div>
        </section>
      </div>
    </motion.div>
  );
}
