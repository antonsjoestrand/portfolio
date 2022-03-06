import { motion } from "framer-motion";
import "../../../sass/app.scss";
import "../Projects.scss";
import "./Design.scss";
import CloseNav from "../../Navigation/CloseNav";
import SectionTitle from "../../Title/SectionTitle";
import Category from "../Category";
import Twd1 from "./images/twd/1.png";
import Twd2 from "./images/twd/2.png";
import Twd3 from "./images/twd/3.png";
import Twd4 from "./images/twd/4.png";
import Maya1 from "./images/maya/1.png";
import Maya2 from "./images/maya/2.png";
import Maya3 from "./images/maya/3.png";
import Maya4 from "./images/maya/4.png";
import UiExpo1 from "./images/uiexpo/1.png";
import UiExpo2 from "./images/uiexpo/2.png";
import UiExpo3 from "./images/uiexpo/3.png";
import UiExpo4 from "./images/uiexpo/4.png";
import Zenx1 from "./images/zenx/1.png";
import Zenx2 from "./images/zenx/2.png";
import Zenx3 from "./images/zenx/3.png";
import Zenx4 from "./images/zenx/4.png";
import Biogeek1 from "./images/biogeek/1.png";
import Biogeek2 from "./images/biogeek/2.png";
import Biogeek3 from "./images/biogeek/3.png";
import Biogeek4 from "./images/biogeek/4.png";
import Craigslist1 from "./images/craigslist/1.png";
import Craigslist2 from "./images/craigslist/2.png";
import Craigslist3 from "./images/craigslist/3.png";
import Craigslist4 from "./images/craigslist/4.png";
import Binx1 from "./images/binx/1.png";
import Binx2 from "./images/binx/2.png";
import Binx3 from "./images/binx/3.png";
import Binx4 from "./images/binx/4.png";
import Train1 from "./images/train/1.png";
import Train2 from "./images/train/2.png";
import Train3 from "./images/train/3.png";
import Train4 from "./images/train/4.png";
import Product from './Product';

export default function Design() {
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
            <SectionTitle title='Design' color='#9141d8' />
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
              to='/other'
              name='category other'
              title='Other'
              icon='fa-solid fa-lightbulb'
            />
          </nav>

          <div className='products'>
            <Product
              title='TWD'
              description='- Fan site & wiki'
              image1={Twd1}
              image2={Twd2}
              image3={Twd3}
              image4={Twd4}
            />

            <Product
              title='Maya Sorvala'
              description='- Portfolio'
              image1={Maya1}
              image2={Maya2}
              image3={Maya3}
              image4={Maya4}
            />

            <Product
              title='uiexpo'
              description='- Conference'
              image1={UiExpo1}
              image2={UiExpo2}
              image3={UiExpo3}
              image4={UiExpo4}
            />

            <Product
              title='ZenX'
              description='- Freelance app'
              image1={Zenx1}
              image2={Zenx2}
              image3={Zenx3}
              image4={Zenx4}
            />

            <Product
              title='BioGeek'
              description='- Biology courses'
              image1={Biogeek1}
              image2={Biogeek2}
              image3={Biogeek3}
              image4={Biogeek4}
            />

            <Product
              title='Craigslist'
              description='- Redesign'
              image1={Craigslist1}
              image2={Craigslist2}
              image3={Craigslist3}
              image4={Craigslist4}
            />

            <Product
              title='Binx'
              description='- Ecommerce'
              image1={Binx1}
              image2={Binx2}
              image3={Binx3}
              image4={Binx4}
            />

            <Product
              title='Train Alert'
              description='- Alarm app'
              image1={Train1}
              image2={Train2}
              image3={Train3}
              image4={Train4}
            />
          </div>
        </section>
      </div>
    </motion.div>
  );
}
