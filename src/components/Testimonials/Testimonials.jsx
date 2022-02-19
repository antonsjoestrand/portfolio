import "../../sass/app.scss";
import "./Testimonials.scss";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import SectionTitle from "../Title/SectionTitle";

export default function Testimonials() {
  const [toggleCard1, setToggleCard1] = useState(true);
  const [toggleCard2, setToggleCard2] = useState(false);
  const [toggleCard3, setToggleCard3] = useState(false);

  const [text, setText] = useState({
    name: "Aysha Samrin",
    testimonial:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, corrupti, nam temporibus illo sed exercitationem molestias omnis at fuga quos perspiciatis culpa similique reprehenderit, blanditiis sint non laboriosam. Sit nostrum deserunt corporis perspiciatis? Rerum error, nam reiciendis id, cumque vel sit libero adipisci repellat ipsa quidem. Sequi itaque et modi sed beatae qui perspiciatis voluptas sapiente? Quae adipisci aut tenetur minus inventore. Perspiciatis quisquam saepe officiis enim magni dicta illum harum sunt.",
  });

  const [textChange, setTextChange] = useState(true);

  const select = (card, set, second, third) => {
    if (
      (!card && toggleCard1 === true && toggleCard2 === false) ||
      (!card && toggleCard2 === true && toggleCard1 === false) ||
      (!card && toggleCard3 === true && toggleCard2 === false)
    ) {
      set(true);
      second(false);
      third(false);
      setTextChange(false);

      setTimeout(() => {
        setTextChange(true);
      }, 500);
    }
  };

  const selectTestimonial1 = () => {
    select(toggleCard1, setToggleCard1, setToggleCard2, setToggleCard3);
    setText({
      name: "Aysha Samrin",
      testimonial:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, corrupti, nam temporibus illo sed exercitationem molestias omnis at fuga quos perspiciatis culpa similique reprehenderit, blanditiis sint non laboriosam. Sit nostrum deserunt corporis perspiciatis? Rerum error, nam reiciendis id, cumque vel sit libero adipisci repellat ipsa quidem. Sequi itaque et modi sed beatae qui perspiciatis voluptas sapiente? Quae adipisci aut tenetur minus inventore. Perspiciatis quisquam saepe officiis enim magni dicta illum harum sunt.",
    });
  };

  const selectTestimonial2 = () => {
    select(toggleCard2, setToggleCard2, setToggleCard1, setToggleCard3);
    setText({
      name: "Thomas Girard",
      testimonial:
        "Ipsum dolor sit, amet consectetur adipisicing elit. Inventore, corrupti, nam temporibus illo sed exercitationem molestias omnis at fuga quos perspiciatis culpa similique reprehenderit, blanditiis sint non laboriosam. Sit nostrum deserunt corporis perspiciatis? Rerum error, nam reiciendis id, cumque vel sit libero adipisci repellat ipsa quidem. Sequi itaque et modi sed beatae qui perspiciatis voluptas sapiente? Quae adipisci aut tenetur minus inventore. Perspiciatis quisquam saepe officiis enim magni dicta illum harum sunt.",
    });
  };

  const selectTestimonial3 = () => {
    select(toggleCard3, setToggleCard3, setToggleCard1, setToggleCard2);
    setText({
      name: "Patrick Sauriol",
      testimonial:
        "Dolor sit, amet consectetur adipisicing elit. Inventore, corrupti, nam temporibus illo sed exercitationem molestias omnis at fuga quos perspiciatis culpa similique reprehenderit, blanditiis sint non laboriosam. Sit nostrum deserunt corporis perspiciatis? Rerum error, nam reiciendis id, cumque vel sit libero adipisci repellat ipsa quidem. Sequi itaque et modi sed beatae qui perspiciatis voluptas sapiente? Quae adipisci aut tenetur minus inventore. Perspiciatis quisquam saepe officiis enim magni dicta illum harum sunt.",
    });
  };

  return (
    <div className='container container--testimonials'>
      <div className='wrapper'>
        <section className='testimonials'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.2, duration: 1.5 }}
            className='section__title'
            id="testimonials"
          >
            <SectionTitle title='Testimonials' />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.2, duration: 1.5 }}
            className='testimonials__content'
          >
            <div className='testimonials__content__name'>
              <motion.div
                id='card1'
                whileHover={{ scale: 1.05 }}
                onClick={selectTestimonial1}
                className={`card ${toggleCard1 ? "card--selected" : ""}`}
              >
                <div className='card__icon'>
                  <i className='fa-solid fa-pen-to-square'></i>
                </div>
                <div className='card__user'>
                  <h4>Aysha Samrin</h4>
                  <p>Product Designer</p>
                </div>
              </motion.div>
              <motion.div
                id='card2'
                whileHover={{ scale: 1.05 }}
                onClick={selectTestimonial2}
                className={`card ${toggleCard2 ? "card--selected" : ""}`}
              >
                <div className='card__icon'>
                  <i className='fa-solid fa-pen-to-square'></i>
                </div>
                <div className='card__user'>
                  <h4>Thomas Girard</h4>
                  <p>Design Scholar</p>
                </div>
              </motion.div>
              <motion.div
                id='card3'
                whileHover={{ scale: 1.05 }}
                onClick={selectTestimonial3}
                className={`card ${toggleCard3 ? "card--selected" : ""}`}
              >
                <div className='card__icon'>
                  <i className='fa-solid fa-pen-to-square'></i>
                </div>
                <div className='card__user'>
                  <h4>Patrick Sauriol</h4>
                  <p>Marketing Expert</p>
                </div>
              </motion.div>
            </div>
            <AnimatePresence>
              {textChange && (
                <motion.div
                  initial={{ opacity: 0, y: -40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  className='testimonials__content__text'
                >
                  <h4>{text.name}</h4>
                  <p>{text.testimonial}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
