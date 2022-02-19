import React, { Component } from "react";
import { gsap, Power2 } from "gsap";
import "../../sass/app.scss";

export default class Elements extends Component {
  componentDidMount() {
    const tlq = gsap.timeline({ repeat: -1 });
    const tlr1 = gsap.timeline({ repeat: -1 });
    const tlr2 = gsap.timeline({ repeat: -1 });
    const tlr3 = gsap.timeline({ repeat: -1 });
    const tlt = gsap.timeline({ repeat: -1, yoyo: true });
    const tldots = gsap.timeline({ repeat: -1, yoyo: true });

    tlq
      .to("#quote", 0, {
        ease: Power2.easeInOut,
        yoyo: true,
        repeat: 1,
      })
      .to("#quote", 2, {
        ease: Power2.easeInOut,
        yoyo: true,
        repeat: 1,
        y: -20,
      });

    tlr1
      .to("#rectangle1", 0, {
        ease: Power2.easeInOut,
        yoyo: true,
        repeat: 1,
        y: -33,
        x: 1,
        scale: 0.95,
      })
      .to("#rectangle1", 5, {
        ease: Power2.easeInOut,
        yoyo: true,
        repeat: 1,
        y: 108,
      });

    tlr2
      .to("#rectangle2", 0, {
        ease: Power2.easeInOut,
        yoyo: true,
        repeat: 1,
        x: 1,
        scale: 0.95,
      })
      .to("#rectangle2", 3, {
        ease: Power2.easeInOut,
        yoyo: true,
        repeat: 1,
        y: 60,
      });

    tlr3
      .to("#rectangle3", 0, {
        ease: Power2.easeInOut,
        yoyo: true,
        repeat: 1,
        x: 1,
        scale: 0.95,
      })
      .to("#rectangle3", 4, {
        ease: Power2.easeInOut,
        yoyo: true,
        repeat: 1,
        scaleY: 3.38,
      });

    tldots
      .to("#dot1", 1, {
        ease: Power2.easeInOut,
        opacity: 0,
      })
      .to(
        "#dot2",
        1,
        {
          ease: Power2.easeInOut,
          opacity: 0,
          y: -44
        },
        "-0.2"
      )
      .to(
        "#dot3",
        1,
        {
          ease: Power2.easeInOut,
          opacity: 0,
          y: -44
        },
        "-0.2"
      )
      .to(
        "#dot4",
        1,
        {
          ease: Power2.easeInOut,
          opacity: 0,
          y: -44
        },
        "-0.2"
      )
      .to(
        "#dot5",
        1,
        {
          ease: Power2.easeInOut,
          opacity: 0,
          y: -44
        },
        "-0.2"
      )
      .to(
        "#dot6",
        1,
        {
          ease: Power2.easeInOut,
          opacity: 0,
          y: -44
        },
        "-0.2"
      )
      .to(
        "#dot7",
        1,
        {
          ease: Power2.easeInOut,
          opacity: 0,
          y: -44
        },
        "-0.2"
      )
      .to(
        "#dot8",
        1,
        {
          ease: Power2.easeInOut,
          opacity: 0,
          y: -44
        },
        "-0.2"
      )
      .to(
        "#dot9",
        1,
        {
          ease: Power2.easeInOut,
          opacity: 0,
          y: -44
        },
        "-0.2"
      )
      .to(
        "#dot10",
        1,
        {
          ease: Power2.easeInOut,
          opacity: 0,
          y: -44
        },
        "-0.2"
      );

      tlt
        .to("#ftriangle", 2, {
          ease: Power2.easeInOut,
          opacity: 1,
        })
        .to("#triangle", 2, {
          ease: Power2.easeInOut,
          opacity: 1,
        }, "-0.8");
  }

  render() {
    return (
      <div>
        <svg
          id='elements'
          xmlns='http://www.w3.org/2000/svg'
          x={0}
          y={0}
          viewBox='0 0 425.6 513.6'
          style={{
            enableBackground: "new 0 0 425.6 513.6",
          }}
          xmlSpace='preserve'
        >
          <style>
            {
              ".st0{fill:#903fd7}.st2{fill:#7446ff}.st4,.st5{fill:none}.st5{stroke:#7446ff;stroke-width:2}.st8{fill:#30b983}.st10{opacity:.2;fill:#00adff;enable-background:new}"
            }
          </style>
          <path
            id='Subtraction_4'
            className='st0'
            d='M119.8 466.7c-8 0-16-.8-23.8-2.4-7.6-1.6-15-3.9-22.2-6.9-7-3-13.8-6.6-20.1-10.9-6.3-4.2-12.2-9.1-17.5-14.4-5.4-5.4-10.2-11.2-14.5-17.5s-8-13-11-20.1-5.4-14.6-7-22.2c-1.6-7.8-2.5-15.8-2.5-23.8h44.2c-.1 1.6-.1 3.2-.1 4.8 0 21 7.2 39 21.3 53.8 13.8 14.7 31.5 22.2 52.5 22.2 21.1 0 38.5-7.3 53.1-22.2 14.4-14.7 21.6-32.3 21.9-53.8 0-1.6 0-3.2-.1-4.8h44.2c0 8-.9 16-2.5 23.8-1.6 7.6-3.9 15-7 22.2-3 7-6.7 13.7-10.9 20.1-4.3 6.3-9.1 12.1-14.5 17.5-5.4 5.3-11.2 10.2-17.5 14.4-6.3 4.3-13.1 7.9-20.1 10.9-7.2 3-14.6 5.3-22.2 6.9-7.7 1.6-15.7 2.4-23.7 2.4z'
          />
          <g id='quote'>
            <path
              id='Path_105'
              d='M164.6 399.4c-12.4 12.7-27.5 18.9-45.3 18.9s-32.9-6.2-44.8-18.9c-12.2-12.7-18.1-28-18.1-45.9 0-17.4 6-32.1 18.1-44.6s26.9-18.7 44.8-18.7 32.9 6.2 45.3 18.7c12.4 12.4 18.7 27.2 18.7 44.6-.3 18.1-6.2 33.2-18.7 45.9z'
              style={{
                fill: "#00adff",
              }}
            />
            <path
              id='Path_106'
              className='st2'
              d='M96 380.7c-7.3-8.3-10.9-18.9-10.9-32.1 0-11.7 2.9-24.1 8.3-37.3 5.4-13.2 13.2-25.4 23.1-37.1a156.7 156.7 0 0 1 32.6-28.8l14.8 30.8c-8.5 7.3-30.6 33.2-21.5 50 2.6 4.9 5.7 5.4 10.9 13.5 3.4 5.2 4.4 11.1 4.4 16.6-.1 5.9-1.7 11.7-4.7 16.8-3.1 5.7-7.4 10.5-12.7 14.2s-11.5 5.6-17.9 5.7c-10.4.1-19.2-4-26.4-12.3z'
            />
          </g>
          <g
            id='Group_47'
            transform='translate(715 214.43)'
            style={{
              opacity: 0.8,
            }}
          >
            <g id='Rectangle_16'>
              <path className='st4' d='M-450.7-53.1h40v304.7h-40z' />
              <path className='st5' d='M-449.7-52.1h38v302.7h-38z' />
            </g>
            <g id='rectangle1'>
              <path
                className='st2'
                d='M-450.7-53.1h40v153.3h-40z'
                transform='translate(0 34)'
              />
              <path
                className='st5'
                d='M-449.7-52.1h38V99.2h-38z'
                transform='translate(0 34)'
              />
            </g>
          </g>
          <g
            id='Group_45'
            transform='translate(-545 -185.337)'
            style={{
              opacity: 0.6,
            }}
          >
            <g id='Rectangle_18'>
              <path
                className='st4'
                d='M-450.7-53.1h40v305.3h-40z'
                transform='translate(1320 399.767)'
              />
              <path
                className='st5'
                d='M-449.7-52.1h38v303.3h-38z'
                transform='translate(1320 399.767)'
              />
            </g>
            <g id='rectangle2'>
              <path
                className='st2'
                d='M-450.7-53.1h40v123h-40z'
                transform='translate(1320 490.93)'
              />
              <path
                className='st5'
                d='M-449.7-52.1h38v121h-38z'
                transform='translate(1320 490.93)'
              />
            </g>
          </g>
          <g
            id='Group_46'
            transform='translate(835 214.43)'
            style={{
              opacity: 0.2,
            }}
          >
            <g id='Rectangle_20'>
              <path className='st4' d='M-450.7-53.1h40v305.3h-40z' />
              <path className='st5' d='M-449.7-52.1h38v303.3h-38z' />
            </g>
            <g id='rectangle3'>
              <path
                className='st2'
                d='M-450.7-53.1h40v90h-40z'
                transform='translate(0 1.032)'
              />
              <path
                className='st5'
                d='M-449.7-52.1h38v88h-38z'
                transform='translate(0 1.032)'
              />
            </g>
          </g>
          <path
            id='circlesmall'
            className='st0'
            d='M394.6 435.4c-4.4 4.6-10.5 7.2-16.9 7-6.3.2-12.4-2.4-16.7-7-4.4-4.6-6.9-10.7-6.7-17.1-.1-6.2 2.3-12.2 6.7-16.6 4.3-4.6 10.4-7.1 16.7-6.9 6.3-.1 12.4 2.4 16.9 6.9 4.5 4.3 7 10.3 6.9 16.6.1 6.5-2.4 12.6-6.9 17.1z'
          />
          <path
            id='dot10'
            className='st8'
            d='M407.3 137.7c1.9 2 4.4 3 7.1 3 2.7.1 5.2-1 7.1-3 1.9-1.9 2.9-4.5 2.9-7.2 0-2.6-1-5.2-2.9-7-1.8-1.9-4.4-3-7.1-2.9-2.7-.1-5.3 1-7.1 2.9-1.9 1.8-3 4.4-2.9 7-.1 2.7.9 5.3 2.9 7.2z'
          />
          <path
            id='dot8'
            className='st8'
            d='M360.2 97.7c1.9 2 4.4 3 7.1 3 2.7.1 5.2-1 7.1-3 1.9-1.9 2.9-4.5 2.9-7.2 0-2.6-1-5.2-2.9-7-1.8-1.9-4.4-3-7.1-2.9-2.7-.1-5.3 1-7.1 2.9-1.9 1.8-3 4.4-2.9 7 0 2.7 1 5.3 2.9 7.2z'
          />
          <path
            id='dot5'
            className='st8'
            d='M314.3 57.7c1.9 2 4.4 3 7.1 3 2.7.1 5.2-1 7.1-3 1.9-1.9 2.9-4.5 2.9-7.2 0-2.6-1-5.2-2.9-7-1.8-1.9-4.4-3-7.1-2.9-2.7-.1-5.3 1-7.1 2.9-1.9 1.8-3 4.4-2.9 7-.1 2.7.9 5.3 2.9 7.2z'
          />
          <path
            id='dot1'
            className='st8'
            d='M267.2 17.7c1.9 2 4.4 3 7.1 3 2.7.1 5.2-1 7.1-3 1.9-1.9 2.9-4.5 2.9-7.2 0-2.6-1-5.2-2.9-7-1.8-1.9-4.4-3-7.1-2.9-2.7-.1-5.3 1-7.1 2.9-1.9 1.8-3 4.4-2.9 7 0 2.7 1 5.3 2.9 7.2z'
          />
          <path
            id='dot9'
            className='st8'
            d='M360.3 137.7c1.9 2 4.4 3 7.1 3 2.7.1 5.2-1 7.1-3 1.9-1.9 2.9-4.5 2.9-7.2 0-2.6-1-5.2-2.9-7-1.8-1.9-4.4-3-7.1-2.9-2.7-.1-5.3 1-7.1 2.9-1.9 1.8-3 4.4-2.9 7-.1 2.7.9 5.3 2.9 7.2z'
          />
          <path
            id='dot6'
            className='st8'
            d='M313.2 97.7c1.9 2 4.4 3 7.1 3 2.7.1 5.2-1 7.1-3 1.9-1.9 2.9-4.5 2.9-7.2 0-2.6-1-5.2-2.9-7-1.8-1.9-4.4-3-7.1-2.9-2.7-.1-5.3 1-7.1 2.9-1.9 1.8-3 4.4-2.9 7 0 2.7 1 5.3 2.9 7.2z'
          />
          <path
            id='dot2'
            className='st8'
            d='M267.3 57.7c1.9 2 4.4 3 7.1 3 2.7.1 5.2-1 7.1-3 1.9-1.9 2.9-4.5 2.9-7.2 0-2.6-1-5.2-2.9-7-1.8-1.9-4.4-3-7.1-2.9-2.7-.1-5.3 1-7.1 2.9-1.9 1.8-3 4.4-2.9 7-.1 2.7.9 5.3 2.9 7.2z'
          />
          <path
            id='dot7'
            className='st8'
            d='M314.3 137.7c1.9 2 4.4 3 7.1 3 2.7.1 5.2-1 7.1-3 1.9-1.9 2.9-4.5 2.9-7.2 0-2.6-1-5.2-2.9-7-1.8-1.9-4.4-3-7.1-2.9-2.7-.1-5.3 1-7.1 2.9-1.9 1.8-3 4.4-2.9 7-.1 2.7.9 5.3 2.9 7.2z'
          />
          <path
            id='dot3'
            className='st8'
            d='M267.2 97.7c1.9 2 4.4 3 7.1 3 2.7.1 5.2-1 7.1-3 1.9-1.9 2.9-4.5 2.9-7.2 0-2.6-1-5.2-2.9-7-1.8-1.9-4.4-3-7.1-2.9-2.7-.1-5.3 1-7.1 2.9-1.9 1.8-3 4.4-2.9 7 0 2.7 1 5.3 2.9 7.2z'
          />
          <path
            id='dot4'
            className='st8'
            d='M267.3 137.7c1.9 2 4.4 3 7.1 3 2.7.1 5.2-1 7.1-3 1.9-1.9 2.9-4.5 2.9-7.2 0-2.6-1-5.2-2.9-7-1.8-1.9-4.4-3-7.1-2.9-2.7-.1-5.3 1-7.1 2.9-1.9 1.8-3 4.4-2.9 7-.1 2.7.9 5.3 2.9 7.2z'
          />
          <path
            id='circlebig'
            d='M322.5 496c-7 7.4-16.9 11.5-27.1 11.3-10.7 0-19.6-3.7-26.8-11.3-7.1-7.3-11-17.2-10.8-27.4-.2-10 3.7-19.6 10.8-26.6 7-7.3 16.7-11.4 26.8-11.1 10.2-.2 20 3.8 27.1 11.1 7.2 6.9 11.3 16.6 11.1 26.6-.1 10.8-3.6 19.8-11.1 27.4z'
            style={{
              fill: "#162538",
              stroke: "#30b983",
              strokeWidth: 12,
            }}
          />
          <path
            id='triangle'
            className='st10'
            d='m33.8 177.7 32.5 56h-65l32.5-56z'
          />
          <path
            id='ftriangle'
            className='st10'
            d='m106.2 138.7 32.5 56h-65l32.5-56z'
          />
          <path
            className='st8'
            d='M206.5 110.7V88.1c0-9.8-4.7-11.3-12.8-10.9V61.8c8.1.4 12.8-1 12.8-10.9V28.3c0-18.4 9.7-27.6 29.4-26.2v15.3c-8.8-1-13.5 1-13.5 10.9v22.6c0 9.8-3.2 15.6-9.6 18.5 6.3 3.1 9.6 8.8 9.6 18.7v22.6c0 9.8 4.7 11.9 13.5 11V137c-19.7 1.5-29.4-7.7-29.4-26.3z'
            id='bracket'
            style={{
              enableBackground: "new",
            }}
          />
        </svg>
      </div>
    );
  }
}
