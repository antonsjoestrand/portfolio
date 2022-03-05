import React, { useEffect } from "react";
import { gsap, Power2 } from "gsap";
import "../Study.scss";
import ProjectNav from "../../ProjectNav";
import Category from "../../Category";
import ZenxWide from "./images/zenx-wide.png";
import Wireframe from "./images/wireframe.png";
import Buttons from "./images/buttons.png";
import Timers1 from "./images/timers-1.png";
import Timers2 from "./images/timers-2.png";
import Invoice from "./images/invoices.png";
import Mobile from "./images/mobile.png";
import { IconContext } from "react-icons";
import { GoDeviceDesktop, GoArrowDown, GoArrowUp } from "react-icons/go";
import { FaMobile, FaUserCheck } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ZenxStudy() {
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
      transition={{ type: "spring", bounce: 0.2, duration: 0.8 }}
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
              <h2>
                ZEN<span>X</span>
              </h2>
              <h3>Freelance solution for projects and payments</h3>
            </div>
            <div className='text'>
              <h4>Challenge</h4>
              <p>
                Managing multiple clients and projects is a part of running a
                business as a freelancer. However, sometimes clients don't pay
                on time. How do we help freelancers and business owners keep
                track of payments from their clients, and make sure that they
                receive payment from clients accurately and promptly for every
                project?
              </p>
              <p>
                Is using built-in apps like reminders and timers enough? Or do
                we need something more? Why are so many freelancers struggling
                with this? Let's ease the load off these users and come up with
                a better solution.
              </p>
            </div>
          </div>

          <div className='section role'>
            <div className='text'>
              <h4>My Role</h4>
              <p>
                I worked solely on this project to come up with a solution for
                the problem. My task was to thoroughly research the issue,
                solutions that are already out there, and come up with an idea
                for an application or system that could solve it in an efficient
                and satisfactory manner.
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
              <h4>Finding the Best Solution</h4>
              <p>
                Before I started doing research on the existing solutions and
                common pain points among freelancers, I started off by making
                some initial assumptions of what kind of product that would be
                best suited for the job. I figured that most developers would
                likely prefer an application that was easily transferrable
                between their computer and phone. This was later what I found to
                be the most common solution out there. A web application with a
                complimentary mobile app.
              </p>
              <p>
                I quickly realized that the main problem is that freelancers
                face many problems. Which is why competing apps often had a lot
                of features and just felt too complex. It's great to have
                features, but it tends to come at the cost of steep learning
                curves. As someone who values and believes in simplicity, I
                wanted my application to be very easy to use while still
                maintaining all the important features.
              </p>
              <p className='bold'>Focus points</p>
              <ul>
                <li>Make it fast and easy to use</li>
                <li>Make it desktop & mobile friendly</li>
                <li>Maintain important features</li>
                <li>Design a configurable layout</li>
              </ul>
            </div>
            <div className='icon'>
              <IconContext.Provider
                value={{
                  size: "8em",
                  color: "#6c6e7e",
                }}
              >
                <GoDeviceDesktop />
              </IconContext.Provider>
              <IconContext.Provider
                value={{
                  size: "4em",
                  color: "#7547ff",
                }}
              >
                <GoArrowDown />
              </IconContext.Provider>
              <IconContext.Provider
                value={{
                  size: "8em",
                  color: "#6c6e7e",
                }}
              >
                <FaMobile />
              </IconContext.Provider>
            </div>
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
              <h4>Creating a Story</h4>
              <p>
                In order for the design to work, I needed to define what kind of
                user would be the foundation of my solution. I combined all the
                information I had gathered, including common issues,
                frustrations, and goals, which was then incorporated into a
                persona that represented my main user, Jason. The freelance
                designer from Vancouver.
              </p>
            </div>
            <div className='icon'>
              <IconContext.Provider
                value={{
                  size: "8em",
                  color: "#6c6e7e",
                }}
              >
                <FaUserCheck />
              </IconContext.Provider>
            </div>
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
                <h4>Jason Miller</h4>
                <p>
                  I quit my design job about a year ago and have now started my
                  own freelance business. I am still getting used to the big
                  change and I am struggling to manage complex projects from
                  clients that require a lot of work. This results in not
                  getting paid fairly for all the work I have done on the
                  projects.
                </p>
              </div>
              <div className='quote'>
                <p>
                  “I need a way to track my time and invoices to clients
                  efficiently”
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
                    Spend less time managing my projects and more time designing
                  </li>
                  <li>
                    Having a clean and easy solution to manage my project and
                    invoices
                  </li>
                  <li>Grow my freelance business</li>
                </ul>
              </div>
              <div className='list'>
                <h4>
                  <i className='fa-solid fa-thumbs-down'></i>Frustrations
                </h4>
                <ul>
                  <li>
                    Not getting paid fairly for all the work done on projects
                  </li>
                  <li>
                    Managing complex and time consuming projects with no help
                  </li>
                  <li>Forgetting about important project related tasks</li>
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
              <h4>Achieving Configurability</h4>
              <p>
                After asking some questions to a few freelancers and looking at
                reviews of competing apps, I found that there are varied
                preferences for things they value. Some want an all-in-one style
                application that had reminders and invoice handling. Others want
                a more simplified version for just tracking their time on
                projects and invoices.
              </p>
              <p>
                The best way to go about the layout was to have a box style that
                was easily manageable and could transfer to a mobile view
                without sacrificing too much functionality and use. The user
                would be able to decide which information should be displayed on
                the dashboard and in what order. That way you account for
                everyone's personal preferences.
              </p>
            </div>
            <div className='icon'>
              <div className='bar1'></div>
              <div className='arrows'>
                <IconContext.Provider
                  value={{
                    size: "4em",
                    color: "#7547ff",
                  }}
                >
                  <GoArrowUp />
                </IconContext.Provider>
                <IconContext.Provider
                  value={{
                    size: "4em",
                    color: "#6c6e7e",
                  }}
                >
                  <GoArrowDown />
                </IconContext.Provider>
              </div>
              <div className='bar2'></div>
            </div>
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
            className='section solution'
          >
            <div className='step'>STEP 4</div>
            <div className='text'>
              <h4>Mockup</h4>
              <h4>Designing the Solution</h4>
              <p>
                I wanted the app to have a personality and to be easy on the
                eyes, so I settled with dark colors and a blue accent color as
                the default theme. I find that most developers and designers
                prefer that. But you would still be able to switch to a light
                theme in the settings if so desired.
              </p>
              <p>
                The app name "ZenX" is all about representing a sense of calm
                while tracking the work you do. The design needed to be very
                clean and not have any distracting elements. So I designed a
                dashboard that clearly indicates which page you are on and also
                gives you quick access to the time tracking feature on every
                page.
              </p>
            </div>
            <div className='icon'>
              <IconContext.Provider
                value={{
                  size: "8em",
                  color: "#6c6e7e",
                }}
              >
                <MdDesignServices />
              </IconContext.Provider>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className='wide-image'
          >
            <img src={ZenxWide} alt='Cover' />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className='small-image'
          >
            <div className='image'>
              <img src={Buttons} alt='Buttons' />
              <p>
                There are times when the user will want a way to quickly start a
                timer. That's why I designed two different actions for this. The
                big button acts as the quick action, while the slider will show
                the time panel before starting the counter, in case you want to
                time a specific task. Pausing will trigger the time panel
                regardless.
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
              <img src={Timers1} alt='Timers' />
              <p>
                If you have a recent project that you've worked on, they will
                show up under "Recently logged" so that you can quickly continue
                timing that specific task.
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
              <img src={Timers2} alt='Timers' />
              <p>
                The timer will turn green once you select which project the time
                should be logged to. This indicates that a new timer is ready to
                be started by clicking on "New timer".
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
              <img src={Invoice} alt='Invoice' />
              <p>
                Easy access to your invoices is on the right side. They will
                show statuses depending on the due date and you can manage your
                invoices by using the quick action above.
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
              <img src={Mobile} alt='Mobile' />
              <p>
                The design is made so that switching between devices will be a
                breeze and has little to no effect on the learning curve. You
                have quick access to the time tracker in the corner just like on
                the desktop view. As you scroll up, the next module on your
                dashboard will show up. The problem I encountered on the mobile
                view was where I could put the timer when the tracker is active.
                I solved it by replacing the page icon.
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
            <div className='step'>STEP 5</div>
            <div className='text'>
              <h4>Conclusion</h4>
              <h4>Leveraging What I Learned</h4>
              <p>
                In order to make a solution like this go from good to great, we
                need to make sure that it's not too complex. What do we need to
                have? What is nice to have? And do we have clear indicators? As
                designers we sometimes find ourselves going for what looks
                great, but we then sacrifice the experience of the app. That was
                ultimately my biggest lesson while working on this solution.
              </p>
              <p>
                While I received mostly positive feedback on the initial testing
                run. The thing that I needed to change was the color indicators.
                I realized afterwards that the first draft was simply too
                subtle, so I got back to the drawing board and worked on the
                colors. The final result now gives clear insight on what the
                user should prioritize.
              </p>
              <p>
                If I could spend even more time on this app, I would love to
                design all of the interactions and pages to make it feel more
                complete. But I am very happy with the result, and I believe it
                would ease freelancers frustration of managing their projects
                and payments in a satisfactory manner.
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
                  <Link to='/case-studies' className='cta projects--cta'>
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

          <div className='section-space'></div>
        </section>
      </div>
    </motion.div>
  );
}
