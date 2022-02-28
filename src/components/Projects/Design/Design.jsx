import { motion } from "framer-motion";
import "../../../sass/app.scss";
import "../Projects.scss";
import "./Design.scss";
import CloseNav from "../../Navigation/CloseNav";

export default function Design() {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", bounce: 0.2, duration: 0.8 }}
      className='container'
    >
      <div className='wrapper'>
        <CloseNav />
        <section className='design-page'>
          <div className="soon">Coming soon</div>
        </section>
      </div>
    </motion.div>
  );
}
