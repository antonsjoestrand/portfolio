import "../sass/app.scss";
import { motion } from "framer-motion";
import ErrorNav from "./Navigation/ErrorNav";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", bounce: 0.2, duration: 0.8 }}
      className='container'
    >
      <div className='wrapper'>
        <ErrorNav />
        <section className='not-found'>
          <div className='error'>404</div>
          <p>Page not found</p>
          <motion.div className='home' whileHover={{ scale: 1.2 }}>
            <Link to='/'>Go Home</Link>
          </motion.div>
        </section>
      </div>
    </motion.div>
  );
}
