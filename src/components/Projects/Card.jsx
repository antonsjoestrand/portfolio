import React, { Component } from "react";
import VanillaTilt from "vanilla-tilt";
import "../../sass/app.scss";
import { Link } from "react-router-dom";

export default class Card extends Component {
  componentDidMount() {
    const card = document.querySelectorAll(".projects__cards__card");

    VanillaTilt.init(card, {
      max: 4,
      scale: 1.02,
      speed: 400,
      glare: true,
      "max-glare": 0.4,
    });
  }

  render() {
    return (
      <Link data-tilt to='/' className={this.props.name}>
        <i className={this.props.icon}></i>
        <h4>{this.props.title}</h4>
        <p>
          <span>Discover</span>
          <i className='fa-regular fa-arrow-right-long'></i>
        </p>
      </Link>
    );
  }
}
