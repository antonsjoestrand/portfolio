import React, { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import "../../sass/app.scss";
import { Link } from "react-router-dom";

export default function Card({ to, name, icon, title }) {
  useEffect(() => {
    const card = document.querySelectorAll(".projects__cards__card");

    VanillaTilt.init(card, {
      max: 4,
      scale: 1.02,
      speed: 400,
      glare: true,
      "max-glare": 0.4,
    });
  });

  const { scroll } = useLocomotiveScroll();

  const scrollTop = () => {
    scroll.scrollTo(0, { duration: 0, disableLerp: true });
  };

  return (
    <Link data-tilt to={to} onClick={scrollTop} className={name}>
      <i className={icon}></i>
      <h4>{title}</h4>
      <p>
        <span>Discover</span>
        <i className='fa-regular fa-arrow-right-long'></i>
      </p>
    </Link>
  );
}
