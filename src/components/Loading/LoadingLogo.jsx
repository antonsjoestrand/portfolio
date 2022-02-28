import React, { Component } from "react";
import { gsap, Power2 } from "gsap";
import "../../sass/app.scss";

export default class LoadingLogo extends Component {
  componentDidMount() {
    const tl = gsap.timeline({ repeat: -1 });

    tl.to("#dot", 0.8, {
      ease: Power2.easeInOut,
      y: 86,
    })
      .to(
        "#comma",
        0.8,
        {
          ease: Power2.easeInOut,
          y: -48,
        },
        "-=1"
      )
      .to("#dot", 0.8, {
        ease: Power2.easeInOut,
        y: 0,
      })
      .to(
        "#comma",
        0.8,
        {
          ease: Power2.easeInOut,
          y: 0,
        },
        "-=1"
      )
      .to(
        "#a",
        0.8,
        {
          ease: Power2.easeInOut,
          x: -20,
        },
        "-=2"
      )
      .to(
        "#a",
        0.8,
        {
          ease: Power2.easeInOut,
          x: 0,
        },
        "-=1"
      )
      .to(
        "#dot",
        0.8,
        {
          ease: Power2.easeInOut,
          x: 20,
        },
        "-=2"
      )
      .to(
        "#dot",
        0.8,
        {
          ease: Power2.easeInOut,
          x: 0,
        },
        "-=1"
      )
      .to(
        "#comma",
        0.8,
        {
          ease: Power2.easeInOut,
          x: 20,
        },
        "-=2"
      )
      .to(
        "#comma",
        0.8,
        {
          ease: Power2.easeInOut,
          x: 0,
        },
        "-=1"
      )
      .to("#logo", 0.6, {
        ease: Power2.easeInOut,
        rotate: -360,
        transformOrigin: "50% 50%",
      });
  }

  render() {
    return (
      <svg
        id='logo'
        xmlns='http://www.w3.org/2000/svg'
        x={0}
        y={0}
        viewBox='0 0 313.9 206.4'
        style={{
          enableBackground: "new 0 0 313.9 206.4",
        }}
        xmlSpace='preserve'
      >
        <style>{".st0{fill:#7446ff}"}</style>
        <g id='dot'>
          <path
            id='dot-2'
            className='st0'
            d='M240.3 71.6c-2.9 3-7 4.8-11.2 4.7-4.2.1-8.2-1.6-11.1-4.7-3-3-4.6-7.1-4.5-11.3-.1-4.1 1.6-8.1 4.5-11 2.9-3 6.9-4.7 11.1-4.6 4.2-.1 8.3 1.6 11.2 4.6 3 2.9 4.7 6.9 4.6 11 0 4.2-1.6 8.3-4.6 11.3z'
          />
        </g>
        <g id='comma'>
          <path
            id='comma-2'
            className='st0'
            d='M241 100.5c3.3 3.7 4.9 8.5 4.9 14.3-.1 5.8-1.3 11.4-3.7 16.7-2.5 6-6 11.6-10.3 16.5-4.3 5-9.2 9.3-14.7 12.9l-6.6-13.8c3.8-3.2 13.7-14.8 9.6-22.4-1.1-2.2-2.6-2.4-4.8-6-1.4-2.2-2-4.8-2-7.4 0-2.7.8-5.3 2.1-7.6 1.3-2.5 3.3-4.7 5.7-6.3 2.3-1.7 5.1-2.5 8-2.5 4.6 0 8.9 2.1 11.8 5.6z'
          />
        </g>
        <g id='a'>
          <g id='a-2'>
            <path
              className='st0'
              d='M180.1 102.5c0 7.6-2.1 15.2-6.3 23-4.2 7.8-10.1 14.4-17.4 19.4-7.1 5.1-15.7 7.7-24.4 7.7-13.8 0-25.7-5.7-35.7-17s-15-25.9-15-43.7c.1-9.9 1.4-19.7 3.9-29.3H160c3.4 5.6 7.6 7 14.1 17.3 4.6 7.1 6 15 6 22.6z'
            />
            <path
              d='M189.8 46v114.5h-24.7V144c-8.7 12.1-22.2 19.4-40.1 19.4-31.1 0-57-26.3-57-60.2C68 69.1 93.9 43 125 43c17.9 0 31.4 7.3 40.1 19.2V46h24.7zm-24.7 57.2c0-21.3-15.6-36.6-36.2-36.6s-36.2 15.3-36.2 36.6 15.6 36.6 36.2 36.6 36.2-15.3 36.2-36.6z'
              style={{
                fill: "#fff",
              }}
            />
          </g>
        </g>
      </svg>
    );
  }
}
