import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "../../../sass/app.scss";
import "../Projects.scss";
import "./Design.scss";

const ProductImage = ({ id, onExpand }) => {
  return (
    <motion.img
      src={id}
      alt='Product'
      onClick={() => onExpand(id)}
      whileHover={{ scale: 0.9 }}
      className='related-product-image'
      layoutId={`product-${id}`}
    />
  );
};

export default function Product({ title, description, image1, image2, image3, image4 }) {
  const [images, setImages] = useState([image2, image3, image4]);
  const [primaryImage, setPrimaryImage] = useState(image1);

  const setAsPrimary = (id) => {
    const currentImageId = primaryImage;
    const newImage = [...images.filter((x) => x !== id), currentImageId];

    setPrimaryImage(id);
    setImages(newImage);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", bounce: 0.4, duration: 1.5 }}
      className='products__section'
    >
      <div className='product-title'>
        <h4>
          <span>{title}</span> <span>{description}</span>
        </h4>
      </div>
      <div className='product-images'>
        <AnimateSharedLayout type='crossfade'>
          <div className='primary-product-container'>
            <AnimatePresence>
              <motion.img
                key={primaryImage}
                className='primary-product-image'
                src={primaryImage}
                alt='Product'
                layoutId={`product-${primaryImage}`}
              />
            </AnimatePresence>
          </div>
          <div className='product-gallery'>
            <AnimatePresence>
              {images.map((id) => (
                <ProductImage id={id} key={id} onExpand={setAsPrimary} />
              ))}
            </AnimatePresence>
          </div>
        </AnimateSharedLayout>
      </div>
    </motion.div>
  );
}
