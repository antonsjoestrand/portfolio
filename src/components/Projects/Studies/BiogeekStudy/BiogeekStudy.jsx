import React, { useEffect } from "react";
import { gsap, Power2 } from "gsap";
import "../Study.scss";
import ProjectNav from "../../ProjectNav";
import Category from "../../Category";
import Wireframe from "./images/wireframe.png";
import Colors from "./images/colors.png";
import Biogeek from "./images/biogeek2.png";
import BiogeekWide1 from "./images/biogeek-wide-1.png";
import BiogeekWide2 from "./images/biogeek-wide-2.png";
import Home from "./images/home.png";
import Guide from "./images/guide.png";
import Bookmark from "./images/bookmark.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLocomotiveScroll } from "react-locomotive-scroll";

export default function BiogeekStudy() {
  const { scroll } = useLocomotiveScroll();

  const scrollTop = () => {
    scroll.scrollTo(0, { duration: 0, disableLerp: true });
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
              <h2>BioGeek</h2>
              <h3>Online educational solution for biology courses</h3>
            </div>
            <div className='text'>
              <h4>Challenge</h4>
              <p>
                BioGeek is an edtech startup that makes educational video
                content for learning biology. They stand out because of their
                excellent instructors. Their target audience is a mature
                audience willing to learn about biology. They want to convey a
                sense of wonder, while at the same time being professional.
              </p>
            </div>
          </div>

          <div className='section role'>
            <div className='text'>
              <h4>My Role</h4>
              <p>
                I was the sole researcher and designer. My task was to come up
                with a design solution targeted towards an older audience. That
                meant easy usability, good readability, and a clean design.
              </p>
            </div>
            <div className='list'>
              <h4>What I Did</h4>
              <ul>
                <li>Competitive research</li>
                <li>User research</li>
                <li>Ideation & concept</li>
                <li>Interaction design</li>
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
                I started off by looking at popular educational websites like
                Skillshare and Udemy in order to write down what could be done
                to make it better for a mature audience. I made some initial
                assumptions of how the website should work and looked at
                multiple examples to gather inspiration.
              </p>
              <p className='bold'>User patterns</p>
              <p>
                Not everyone enjoys watching videos, especially videos with
                educational content. A study found that there are 3 common
                behavioral patterns with this:
              </p>
              <ul>
                <li>Reads the text content only, avoiding the video</li>
                <li>Skims the text content, then watches the video</li>
                <li>
                  Immediately watches the video, before or instead of reading
                  the text
                </li>
              </ul>
              <p>
                One participant in the study explained that they like to read
                first and watch the video to get a better idea of what they've
                learned. These behaviors don't only depend on the habits and
                preferences of the person, but also on the complexity or (un)
                familiarity of the content. The participants were more likely to
                turn to a video at some point if the content describes a long
                process or if the topic was unfamiliar or complicated. People
                who tend to avoid videos usually turns to the video as a last
                resort when the text was confusing, or the topic wasn't fully
                understood.
              </p>
              <p>
                I know that I tend to avoid text if it's too long and would
                rather watch a video. A great example, and my personal favorite
                of an educational website that solves these varied behaviors
                well is Interaction Design Foundation. They mix text content
                with videos and even mention this specific problem.
              </p>
              <p>
                I also looked at previous studies regarding UX guidelines for
                videos that still apply today. After that I was able to
                determine my main focus points for the design:
              </p>
              <ul>
                <li>User-friendly for a mature audience</li>
                <li>Clean interface with good readability</li>
                <li>Having a mix of videos & text content</li>
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
            <div className='step'>STEP 2</div>
            <div className='text'>
              <h4>Persona</h4>
              <h4>Identifying Users</h4>
              <p>
                I needed to set myself aside almost completely for this project,
                since I do not fit the target audience. I created a journey map
                and identified who should represent the general user for my
                design.
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
                <h4>Charlotte Walker</h4>
                <p>
                  I am a professor teaching English and History at The
                  University of British Columbia. On my free time, I can be
                  found reading a book about anything I find interesting. I
                  often struggle to find enough time in the day to read, so I
                  try to go outside of my comfort zone with technology to learn
                  and read in a more efficient manner. A problem I often
                  encounter on the web is small print that requires me to
                  constantly zoom in.
                </p>
              </div>
              <div className='quote'>
                <p>
                  “I want to learn something valuable every day that I can pass
                  on to other people”
                </p>
              </div>
            </div>
            <div className='row'>
              <div className='list'>
                <h4>
                  <i className='fa-solid fa-flag'></i>Goals
                </h4>
                <ul>
                  <li>
                    Become more comfortable with technology and user interfaces
                  </li>
                  <li>
                    Finding a platform that makes it easy and efficient to learn
                    about biology
                  </li>
                  <li>Teach introductory courses on biology</li>
                </ul>
              </div>
              <div className='list'>
                <h4>
                  <i className='fa-solid fa-thumbs-down'></i>Frustrations
                </h4>
                <ul>
                  <li>Technology and advanced user interfaces</li>
                  <li>Finding enough time in the day</li>
                  <li>Websites & applications with small print</li>
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
            <div className='step'>STEP 3</div>
            <div className='text'>
              <h4>Wireframing</h4>
              <h4>Achieving Usability</h4>
              <p>
                With a mature audience there are a few things we need to keep in
                mind when it comes to designing good usability. Studies have
                found that people's ability to use a website declines by about
                0.8% per year between the ages of 25 and 60 years old. Sites and
                apps designed by and for young people are often inaccessible by
                older users, and readability has remained one of the biggest
                issues for older people over the years.
              </p>
              <p>
                My focus with the layout was to make it clean, determine where
                to put text content, and account for the best possible
                readability.
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

          <div className='section-space'></div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className='section branding'
          >
            <div className='step'>STEP 4</div>
            <div className='text'>
              <h4>Branding</h4>
              <h4>Color Palette & Logo</h4>
              <p>
                When it comes to colors and biology, we often think about green.
                I wanted to combine that with a generally light theme in order
                to account for good readability, but to also have dark colors
                that go well with light green.
              </p>
              <img src={Colors} alt='Colors' />
              <p>
                My design philosophy for the logo was to make it modern, simple,
                and represent biology in some way. I used the popular typeface{" "}
                <span className='bold'>Poppins</span> and modified it to account
                for the leaf design.
              </p>
              <img src={Biogeek} alt='Logo' />
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
            <div className='step'>STEP 5</div>
            <div className='text'>
              <h4>Mockup</h4>
              <h4>Designing the Solution</h4>
              <p>
                The most vital part of the design was definitely going to be the
                text. So, I spent a lot of time getting that part just right.
                The text needed to be easily readable and bigger than normal,
                which is why I went with the typefaces,{" "}
                <span className='bold'>Poppins</span> and{" "}
                <span className='bold'>Lato</span>. The overall design is all
                about making it clean, using few colors, and not having any
                distracting elements, while still giving it some personality.
              </p>
              <p>
                I intentionally removed the navigation options on the welcome
                page. That way the user won't be confused on where to go. The
                user has a clear call to action to register and they can sign in
                at the top if they already have an account.
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
            <img src={BiogeekWide1} alt='Mockup' />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className='wide-image-s'
          >
            <img src={BiogeekWide2} alt='Mockup' />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className='small-image'
          >
            <div className='image'>
              <img src={Guide} alt='Guide' />
              <p>
                After the research I did I figured that it would be a good idea
                to add a guide page. I didn't have time to design this page, but
                the idea is to have a well-structured guide on how to use the
                website and course tools.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className='small-image'
          >
            <div className='image'>
              <img src={Home} alt='Home' />
              <p>
                I removed most of the illustration on the homepage in order to
                give space for the highlighted courses. The first time the user
                logs in they will get a few popups telling them what each
                interaction does. I demonstrated this by adding a popup to the
                “add to library” action.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className='small-image'
          >
            <div className='image'>
              <img src={Bookmark} alt='Bookmark' />
              <p>
                The bookmark feature is an idea that came to me when I was
                designing the course view. I asked a few people that fit the
                target audience and they liked the idea of it. The user will be
                able to move the bookmark icon to where they last left off. It
                would also follow the user as they scroll so you don't have to
                move it all the way from the top.
              </p>
            </div>
          </motion.div>

          <div className='section-space'></div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className='section conclusion'
          >
            <div className='step'>STEP 6</div>
            <div className='text'>
              <h4>Conclusion</h4>
              <h4>Wrapping Things Up</h4>
              <p>
                I definitely learned that designers need to be more sympathetic
                towards older audiences. Because they often correctly feel that
                websites and apps are not designed with consideration for their
                needs and interests. They can feel “left out” of the online
                world because it was created with someone very different than
                them in mind. The research shows that this is still a problem
                today. Content written for and by older people is difficult to
                find. When this content is available, it often treats seniors as
                a niche interest group rather than a diverse, and growing
                demographic.
              </p>
              <p>
                This is something I will keep in mind with all my future design
                work. And who knows? Maybe there will be adaptive solutions for
                this in the future. I would love to see websites and
                applications be able to adapt their usability for each unique
                user.
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
                  <Link
                    to='/case-studies'
                    onClick={scrollTop}
                    className='cta projects--cta'
                  >
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
