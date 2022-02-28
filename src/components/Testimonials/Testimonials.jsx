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
    name: "John Doe",
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
      name: "John Doe",
      testimonial:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, corrupti, nam temporibus illo sed exercitationem molestias omnis at fuga quos perspiciatis culpa similique reprehenderit, blanditiis sint non laboriosam. Sit nostrum deserunt corporis perspiciatis? Rerum error, nam reiciendis id, cumque vel sit libero adipisci repellat ipsa quidem. Sequi itaque et modi sed beatae qui perspiciatis voluptas sapiente? Quae adipisci aut tenetur minus inventore. Perspiciatis quisquam saepe officiis enim magni dicta illum harum sunt.",
    });
  };

  const selectTestimonial2 = () => {
    select(toggleCard2, setToggleCard2, setToggleCard1, setToggleCard3);
    setText({
      name: "John Doe",
      testimonial:
        "Ipsum dolor sit, amet consectetur adipisicing elit. Inventore, corrupti, nam temporibus illo sed exercitationem molestias omnis at fuga quos perspiciatis culpa similique reprehenderit, blanditiis sint non laboriosam. Sit nostrum deserunt corporis perspiciatis? Rerum error, nam reiciendis id, cumque vel sit libero adipisci repellat ipsa quidem. Sequi itaque et modi sed beatae qui perspiciatis voluptas sapiente? Quae adipisci aut tenetur minus inventore. Perspiciatis quisquam saepe officiis enim magni dicta illum harum sunt.",
    });
  };

  const selectTestimonial3 = () => {
    select(toggleCard3, setToggleCard3, setToggleCard1, setToggleCard2);
    setText({
      name: "John Doe",
      testimonial:
        "Dolor sit, amet consectetur adipisicing elit. Inventore, corrupti, nam temporibus illo sed exercitationem molestias omnis at fuga quos perspiciatis culpa similique reprehenderit, blanditiis sint non laboriosam. Sit nostrum deserunt corporis perspiciatis? Rerum error, nam reiciendis id, cumque vel sit libero adipisci repellat ipsa quidem. Sequi itaque et modi sed beatae qui perspiciatis voluptas sapiente? Quae adipisci aut tenetur minus inventore. Perspiciatis quisquam saepe officiis enim magni dicta illum harum sunt.",
    });
  };

  return (
    <div className='container container--testimonials'>
      <div className='wrapper'>
        <section className='testimonials'>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='section__title'
            id='testimonials'
          >
            <SectionTitle title='Testimonials' color='#7547ff' />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
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
                  <h4>John Doe</h4>
                  <p>Job title</p>
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
                  <h4>John Doe</h4>
                  <p>Job title</p>
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
                  <h4>John Doe</h4>
                  <p>Job title</p>
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
