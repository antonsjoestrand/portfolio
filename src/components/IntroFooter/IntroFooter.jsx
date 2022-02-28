import "./IntroFooter.scss";
import { motion } from "framer-motion";

export default function IntroFooter() {
  return (
    <div className='intro__footer'>
      <div className='social'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='social__icons'
        >
          <motion.a
            whileHover={{ scale: 1.2, rotate: -10 }}
            href='https://www.linkedin.com/in/antonsj'
            target='_blank'
            rel='noreferrer'
            className='linkedin'
          >
            <i className='fa-brands fa-linkedin-in'></i>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: -10 }}
            href='https://dribbble.com/antonsjoestrand'
            target='_blank'
            rel='noreferrer'
            className='dribbble'
          >
            <i className='fa-brands fa-dribbble'></i>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: -10 }}
            href='https://github.com/antonsjoestrand'
            target='_blank'
            rel='noreferrer'
            className='github'
          >
            <i className='fa-brands fa-github'></i>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
