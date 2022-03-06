import React, { useEffect } from "react";
import { gsap, Power2 } from "gsap";
import "../Study.scss";
import ProjectNav from "../../ProjectNav";
import Category from "../../Category";
import Wireframe from "./images/wireframe.png";
import Sitemap from "./images/sitemap.png";
import Colors from "./images/colors.png";
import Twd from "./images/twd.png";
import TwdWide1 from "./images/twd-wide-1.png";
import TwdWide2 from "./images/twd-wide-2.png";
import Forecast from "./images/forecast.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ZenxStudy() {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    let tla = gsap.timeline({ repeat: -1 });

    tla
      .to(".arrow", 0, {
        yoyo: true,
        repeat: 1,
        ease: Power2.easeOut,
      })
      .to(".arrow", 1, {
        x: 12,
        ease: Power2.easeOut,
        yoyo: true,
        repeat: 1,
      });
  });

  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className='container container--study'
    >
      <div className='wrapper'>
        <ProjectNav
          nav={
            <Category
              to='/case-studies'
              name='category case-studies'
              title='Case Studies'
              icon='fa-solid fa-file-lines'
            />
          }
        />
        <section className='study'>
          <div className='section intro'>
            <div className='title'>
              <h2>TWD</h2>
              <h3>The Walking Dead fan site & wiki</h3>
            </div>
            <div className='text'>
              <h4>Overview & Context</h4>
              <p>
                As a big fan of The Walking Dead's universe, I have always felt
                that the available fan sites and wiki's were either outdated,
                overwhelmed with too much content, or both. I started wondering
                if there was a better way to approach a website like this and to
                make it more interactive, interesting, as well as modernize it
                with current design practices.
              </p>
            </div>
          </div>

          <div className='section role'>
            <div className='text'>
              <h4>My Role</h4>
              <p>
                I was the sole researcher and designer. My task was to approach
                the project as a business idea. That meant that along with the
                ideation and design, I had to research what kind of revenue I
                could expect if I were to make it a reality.
              </p>
            </div>
            <div className='list'>
              <h4>What I Did</h4>
              <ul>
                <li>Competitive research</li>
                <li>Ideation & concept</li>
                <li>Interaction design</li>
                <li>Revenue forecast</li>
              </ul>
            </div>
          </div>

          <div className='section-space'></div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className='section goals'
          >
            <div className='step'>STEP 1</div>
            <div className='text'>
              <h4>Kickoff</h4>
              <h4>Research & Inspiration</h4>
              <p>
                My primary goal from the start was to find ways to make a
                website like this more interesting and interactive. I spent a
                lot of time on fan wiki's to see how they are usually approached
                and quickly realized that there are plenty of ways to improve
                them, so I had to scope in on the most important points. That
                included modernizing the general layout, making it more
                user-friendly, condense the content provided, and making it
                interactive.
              </p>
              <p>
                After I determined the points I needed to focus on, I gathered
                visual inspiration and started to ideate what I wanted the
                website to look like.
              </p>
            </div>
            <div className='icon'></div>
          </motion.div>

          <div className='section-space'></div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className='section swot'
          >
            <div className='step'>STEP 2</div>
            <div className='text'>
              <h4>SWOT</h4>
              <h4>Analysis & Strategic Planning</h4>
              <p>
                An important step for planning a business idea is identifying
                potential strengths, weaknesses, opportunities, and threats in
                order to create the best strategy.
              </p>

              <p className='bold'>Strengths</p>
              <ul>
                <li>Passion projects provides a lot of ideas</li>
                <li>I am very knowledgeable about the topic</li>
                <li>Huge fan base</li>
                <li>Cheap server requirements</li>
                <li>
                  I have the technical skills to both design and build the
                  website
                </li>
              </ul>

              <p className='bold'>Opportunities</p>
              <ul>
                <li>Easy to advertise Walking Dead related things</li>
                <li>Can gain a lot of users in the long run</li>
                <li>Potentially good ad revenue</li>
                <li>Cheap server requirements</li>
                <li>I can help artists showcase their fan art.</li>
              </ul>

              <p className='bold'>Weaknesses</p>
              <ul>
                <li>Ads can ruin the user experience</li>
                <li>Not the most lucrative business idea</li>
                <li>Time consuming to create & manage</li>
              </ul>

              <p className='bold'>Threats</p>
              <ul>
                <li>Big competitors with better resources</li>
                <li>Late to the game</li>
              </ul>
            </div>
            <div className='icon'></div>
          </motion.div>

          <div className='section-space'></div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className='section user'
          >
            <div className='step'>STEP 3</div>
            <div className='text'>
              <h4>Persona</h4>
              <h4>Identifying Users</h4>
              <p>
                Since this is a very personal project, I was able to use myself
                as a potential user, but I still had to identify other users in
                order to remain objective with my design choices.
              </p>
            </div>
            <div className='icon'></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className='persona'
          >
            <div className='row'>
              <div className='text'>
                <h4>Anna Ward</h4>
                <p>
                  As an artist I am always looking at other people's work. My
                  main interest is fan art with apocalyptic themes like The
                  Walking Dead. I use DeviantArt frequently but would like a
                  more specific website for exploring fan art from people with
                  the same interest, as well as other information about the
                  fiction.
                </p>
              </div>
              <div className='quote'>
                <p>
                  “I love exploring fan art of my favorite TV-Shows and
                  fictions”
                </p>
              </div>
            </div>
            <div className='row'>
              <div className='list'>
                <h4>
                  <i className='fa-solid fa-flag'></i>Goals
                </h4>
                <ul>
                  <li>Easy usability</li>
                  <li>Exploring fan art</li>
                  <li>Finding other artists</li>
                </ul>
              </div>
              <div className='list'>
                <h4>
                  <i className='fa-solid fa-thumbs-down'></i>Frustrations
                </h4>
                <ul>
                  <li>Unfriendly interfaces</li>
                  <li>Overwhelming amount of content</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <div className='section-space'></div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className='section wireframe'
          >
            <div className='step'>STEP 4</div>
            <div className='text'>
              <h4>Wireframing</h4>
              <h4>Layout & Sitemap</h4>
              <p>
                In this step I needed to determine the content that would be
                displayed on the homepage and how to divide the different pages.
                I wanted the website to be clean and easy to use, but to still
                have that unique look that makes it interesting. After the
                layout felt right, I created the sitemap and user flow.
              </p>
            </div>
            <div className='icon'></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className='wide-image'
          >
            <img src={Wireframe} alt='Wireframe' />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className='wide-image-s'
          >
            <img src={Sitemap} alt='Sitemap' />
          </motion.div>

          <div className='section-space'></div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className='section branding'
          >
            <div className='step'>STEP 5</div>
            <div className='text'>
              <h4>Branding</h4>
              <h4>Color Palette & Logo</h4>
              <p>
                I started off by exploring the idea of maintaining a Walking
                Dead brand for the entire website, which would mean a lot of
                light brown colors to get a comic look. But I decided to go for
                a cleaner look that was mainly white with different vibrant
                colors for each page.
              </p>
              <img src={Colors} alt='Colors' />
              <p>
                In order to still achieve a comic look, the logo was designed
                with the font <span className='bold'>Shojumaru</span> that has
                those comic book characteristics to the letters. I combined that
                with a design of the iconic sheriff's hat used in The Walking
                Dead.
              </p>
              <img src={Twd} alt='Logo' />
            </div>
            <div className='icon'></div>
          </motion.div>

          <div className='section-space'></div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className='section solution'
          >
            <div className='step'>STEP 6</div>
            <div className='text'>
              <h4>Mockup</h4>
              <h4>Designing the Concept</h4>
              <p>
                My main focus was to condense the information that is generally
                provided on a wiki website and make it user friendly, while
                still giving it a modern and interesting look. I thought a lot
                about how I would guide the user through the website, so instead
                of having a traditional call to action, I used a scroll
                indicator to guide the user.
              </p>
            </div>
            <div className='icon'></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className='wide-image'
          >
            <img src={TwdWide1} alt='Mockup' />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className='wide-image-s'
          >
            <img src={TwdWide2} alt='Mockup' />
          </motion.div>

          <div className='section-space'></div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className='section strategy'
          >
            <div className='step'>STEP 7</div>
            <div className='text'>
              <h4>Business Strategy</h4>
              <h4>Monetization & Revenue</h4>
              <p>
                The good news is that I would likely be able to manage and
                maintain the website by myself for a long time before needing to
                hire anyone. This means that the startup cost would mainly be
                website hosting. Another possible cost could be advertising, but
                for the most part I will be able to handle the marketing myself.
                Which would include posting on social media, Walking Dead
                forums, and other platforms/websites that are related to the
                apocalyptic theme.
              </p>
              <p>
                When it comes to monetizing my business, I would start off by
                being very careful with this, because as I previously mentioned,
                ads can ruin the experience. This is why I believe that the best
                strategy would be to avoid monetization for the first few months
                to attract a decent user base. After gathering a user base, I
                would start implementing ads in a smart way that won't affect
                the user experience too much. Ideally would be to have ads that
                are related to The Walking Dead.
              </p>
              <p className='bold'>12-Month revenue forecast</p>
              <img src={Forecast} alt='Forecast' />
              <p>
                The current most popular Walking Dead wiki currently receives
                between 20K - 80K visitors per month, which is about
                C$250-C$1000 a month in ad revenue. After 6-8 weeks I can see
                myself having around 500+ visitors per month, and a steady
                growth after that. As the revenue forecast shows above. In case
                my projected forecast falls short, I plan on consulting a
                marketing and SEO expert in order to gain more traffic on my
                website.
              </p>
              <p>
                My main monetization will primarily always be ads. But a
                possible future option would be to have a subscription-based
                service for exclusive news articles and other things related The
                Walking Dead.
              </p>
            </div>
            <div className='icon'></div>
          </motion.div>

          <div className='section-space'></div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className='section conclusion'
          >
            <div className='step'>STEP 8</div>
            <div className='text'>
              <h4>Conclusion</h4>
              <h4>Wrapping Things Up</h4>
              <p>
                I knew from the start that my business idea is not the most
                lucrative you can have, but the benefit is that it could easily
                be a good side business. I did, however, learn that it still has
                the potential to grow into something much bigger. If you, for
                example, look at the biggest competitor:{" "}
                <span className='bold'>fandom.com</span> which has multiple fan
                pages in one big website. My idea could grow into something
                similar, but rather than having different fan communities, you
                would have fans for the apocalyptic theme specifically. Meaning
                that I could cover all future movies and TV-shows that fall
                under this topic.
              </p>
              <p>
                If I were to pursue this project further, I would spend more
                time on coming up with unique and interesting interactions that
                make it stand out from the crowd. And possibly even start
                designing the base website for expanding beyond The Walking
                Dead's universe.
              </p>
              <p className='thanks'>Thank you!</p>
              <motion.div whileHover={{ scale: 0.94, y: 6, x: 6 }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.84, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.5,
                    type: "spring",
                    bounce: 0.6,
                    duration: 1.5,
                  }}
                >
                  <Link to='/case-studies' onClick={scrollTop} className='cta projects--cta'>
                    See More Studies
                    <span className='arrow'>
                      <i className='fa-solid fa-angle-right'></i>
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
            <div className='icon'></div>
          </motion.div>
        </section>
      </div>
    </motion.div>
  );
}
