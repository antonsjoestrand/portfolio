import { motion } from "framer-motion";
import "../../../sass/app.scss";
import "../Projects.scss";
import "./Development.scss";
import CloseNav from "../../Navigation/CloseNav";
import SectionTitle from "../../Title/SectionTitle";
import Category from "../Category";
import DevCard from "./DevCard";

export default function Development() {
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
            <SectionTitle title='Development' color='#00aeff' />
          </div>
          <nav className='category-nav'>
            <Category
              to='/case-studies'
              name='category case-studies'
              title='Case Studies'
              icon='fa-solid fa-file-lines'
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
            <DevCard
              name='projects-page__cards__card maya'
              title='Maya Sorvala'
              labels={
                <div className='labels'>
                  <button>React</button>
                  <button>JavaScript</button>
                  <button>HTML5</button>
                  <button>CSS3</button>
                  <button>API</button>
                </div>
              }
              text='My first React project. An artwork portfolio designed and built for artist Maya Sorvala.'
              view='https://antonsjostrand.com/maya'
              github='https://github.com/antonsjoestrand/maya_react'
              image='image maya--img'
            />

            <DevCard
              name='projects-page__cards__card binx'
              title='Binx'
              labels={
                <div className='labels'>
                  <button>Laravel</button>
                  <button>PHP</button>
                  <button>HTML5</button>
                  <button>CSS3</button>
                  <button>MySQL</button>
                </div>
              }
              text='Ecommerce website for basketball products built with Laravel.'
              view='https://antonsjostrand.com/binx'
              github='https://github.com/antonsjoestrand/binx'
              image='image binx--img'
            />

            <DevCard
              name='projects-page__cards__card rds'
              title='RDS'
              labels={
                <div className='labels'>
                  <button>JavaScript</button>
                  <button>HTML5</button>
                  <button>CSS3</button>
                </div>
              }
              text='Courier delivery website with a big focus on using GSAP animations.'
              view='https://antonsjostrand.com/rds'
              github='https://github.com/antonsjoestrand/rds'
              image='image rds--img'
            />

            <DevCard
              name='projects-page__cards__card alencia'
              title='Alencia'
              labels={
                <div className='labels'>
                  <button>PHP</button>
                  <button>HTML5</button>
                  <button>CSS3</button>
                  <button>MySQL</button>
                </div>
              }
              text='Construction website designed and built from scratch as a 72-hour challenge.'
              view='https://antonsjostrand.com/alencia'
              github='https://github.com/antonsjoestrand/alencia'
              image='image alencia--img'
            />

            <DevCard
              name='projects-page__cards__card elemetalarts'
              title='Ele-Metal Arts'
              labels={
                <div className='labels'>
                  <button>JavaScript</button>
                  <button>HTML5</button>
                  <button>CSS3</button>
                </div>
              }
              text='My first big web project about metal artwork built with core web technologies.'
              view='https://antonsjostrand.com/elemetalarts'
              github='https://github.com/antonsjoestrand/ele-metal-arts'
              image='image elemetalarts--img'
            />
          </div>
        </section>
      </div>
    </motion.div>
  );
}
