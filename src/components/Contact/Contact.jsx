import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import "../../sass/app.scss";
import "./Contact.scss";
import CloseNav from "../Navigation/CloseNav";

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

  const [msgSuccess, setMsgSuccess] = useState(false);
  const [msgError, setMsgError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mryfo99",
        "template_282hnrh",
        e.target,
        "user_I38gaMwaYFWjSz5rGgvEw"
      )
      .then(
        () => {
          window.scrollTo(0, 0);
          setMsgSuccess(true);
        },
        (error) => {
          console.log(error);
          window.scrollTo(0, 0);
          setMsgError(true);
        }
      );
    e.target.reset();
  };

  return (
    <motion.div
      initial={{ x: -50, opacity: 0.5 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", bounce: 0.2, duration: 0.8 }}
      className='container container--contact'
    >
      <div className='wrapper'>
        <CloseNav />
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
            {msgSuccess && (
              <div className='message-success'>
                <p>Thank you! I'll get back to you as soon as I can.</p>
              </div>
            )}
            {msgError && (
              <div className='message-error'>
                <p>Sorry, something went wrong! Please try again.</p>
              </div>
            )}
            <form onSubmit={sendEmail} autocomplete='off' className='form'>
              <div className='form__group'>
                <input
                  id='name'
                  name='name'
                  type='text'
                  placeholder="What's Your Name?"
                  required
                  autocomplete='off'
                />
                <label id='name_label'>Your Name</label>
              </div>
              <div className='form__group'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  placeholder="What's Your Email?"
                  required
                  autocomplete='off'
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
                <button>Send Message</button>
              </motion.div>
            </form>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
