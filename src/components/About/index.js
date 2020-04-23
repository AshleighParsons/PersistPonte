import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components";

import media from "../../assets/styles/media";
import { Swiper } from "swiper/js/swiper.esm.js"
import 'swiper/css/swiper.min.css'

import LineChart from './line'
import BarChart from './bar'

const Container = styled.div`
  height: 75vh;
  font-size: larger;
  font-family: sans-serif;
  .swiper-container {
    height: 400px;
  }
  .swiper-slide {
    margin-right: 50px;
    width: auto;
  }
  .flex-nav {
    display: flex;
    margin: 0;
    align-items: center;
  }
  ${media.tablet`
    padding: var(--gutter-l) 0 var(--gutter-l) var(--gutter-l);
    .swiper-slide {
      margin-right: 50px;
      width: auto;
    }
    .swiper-slide:nth-child(2n) {}
    .swiper-slide:nth-child(3n) {}
    .swiper-slide {
      &:last-child {
        margin-right: 68%;
      }
    }
    .flex-nav {
      width: calc(45% + 150px); 
    }
  `}
  ${media.laptop`
  .flex-nav {
    width: calc(45% + 200px); 
    }
  `}
`

const About = () => {

  const swiperElement = useRef(null)
  const swiper = useRef(null)

  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    swiper.current = new Swiper(swiperElement.current, {
      speed: 1000,
      freeMode: true,
      freeModeSticky: true,
      breakpointsInverse: true,
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      breakpoints: {
        768: {
          slidesPerView: "auto",
          centeredSlides: false,
        },
      },
      on: {
        transitionEnd: () => {
          if (swiper.current) {
            setActiveSlide(swiper.current.activeIndex)
          }
        },
      },
    })
  }, [])

  const slideNext = () => {
    if (swiper.current) {
      swiper.current.slideNext()
    }
  }
  const slidePrev = () => {
    if (swiper.current) {
      swiper.current.slidePrev()
    }
  }

  return (
    <Container>
      <div ref={swiperElement} className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide" >
            <LineChart />
          </div>
          <div className="swiper-slide" >
            <BarChart />
          </div>
        </div>
      </div>
      {/* <LineChart />
      <BarChart /> */}
    </Container>
  );
};

export default About;
