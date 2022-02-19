import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "../../sass/app.scss";
import "./Contact.scss";
import ContactNavigation from "../Navigation/ContactNavigation";

export default function Contact() {
  useEffect(() => {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const nameLabel = document.getElementById("name_label");
    const emailLabel = document.getElementById("email_label");
    const messageLabel = document.getElementById("message_label");

    const revealLabel = (input, label) => {
      input.addEventListener("keyup", () => {
        input.value.length > 0
          ? (label.style.opacity = 1)
          : (label.style.opacity = 0);
      });
    };

    revealLabel(name, nameLabel);
    revealLabel(email, emailLabel);
    revealLabel(message, messageLabel);
  }, []);

  return (
    <motion.div
      initial={{ x: -50, opacity: 0.5 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", bounce: 0.2, duration: 1 }}
      className='container container--contact'
    >
      <div className='wrapper'>
        <ContactNavigation />
        <section className='talk'>
          <div className='talk__info'>
            <div className='talk__info__title'>
              <p>Here's some ways you can reach me!</p>
            </div>
            <div className='talk__info__contact'>
              <ul>
                <li>
                  <i className='fa-solid fa-phone'></i>+1 778 222 1708
                </li>
                <li>
                  <i className='fa-solid fa-envelope'></i>
                  anton.r.sjostrand@gmail.com
                </li>
              </ul>
            </div>
          </div>
          <div className='talk__form'>
            <form className='form'>
              <div className='form__group'>
                <input
                  id='name'
                  name='name'
                  type='text'
                  placeholder="What's Your Name?"
                  required
                />
                <label id='name_label'>Your Name</label>
              </div>
              <div className='form__group'>
                <input
                  id='email'
                  name='email'
                  type='text'
                  placeholder="What's Your Email?"
                  required
                />
                <label id='email_label'>Your Email</label>
              </div>
              <div className='form__group'>
                <textarea
                  id='message'
                  name='message'
                  placeholder='Message'
                  rows='10'
                  cols='50'
                  required
                ></textarea>
                <label id='message_label'>Message</label>
              </div>
              <motion.div whileHover={{ scale: 0.96 }} className='form__submit'>
                <button>
                  Send Message
                </button>
              </motion.div>
            </form>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
