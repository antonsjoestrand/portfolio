import { motion } from "framer-motion";
import "../../../sass/app.scss";
import "../Projects.scss";
import "./Studies.scss";
import CloseNav from "../../Navigation/CloseNav";
import SectionTitle from "../../Title/SectionTitle";
import Category from "../Category";
import StudyCard from "./StudyCard";
import Zenx from "./ZenxStudy/images/zenx.png";
import Biogeek from "./BiogeekStudy/images/biogeek1.png";
import Twd from "./TwdStudy/images/twd.png";

export default function Studies() {
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
            <SectionTitle title='Case Studies' color='#7547ff' />
          </div>
          <nav className='category-nav'>
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
            <Category
              to='/other'
              name='category other'
              title='Other'
              icon='fa-solid fa-lightbulb'
            />
          </nav>

          <div className='projects-page__cards'>
            <StudyCard
              to='/case-studies/zenx-study'
              name='projects-page__cards__card zenx'
              logo={Zenx}
              text='Freelance solution for projects and payments'
              image='image zenx--img'
            />

            <StudyCard
              to='/case-studies/biogeek-study'
              name='projects-page__cards__card biogeek'
              logo={Biogeek}
              text='Online educational solution for biology courses'
              image='image biogeek--img'
            />

            <StudyCard
              to='/case-studies/twd-study'
              name='projects-page__cards__card twd'
              logo={Twd}
              text='Business solution for The Walking Dead fan site & wiki'
              image='image twd--img'
            />
          </div>
        </section>
      </div>
    </motion.div>
  );
}
