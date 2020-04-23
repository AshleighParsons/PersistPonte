import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import { Swiper } from "swiper/js/swiper.esm.js"
import 'swiper/css/swiper.min.css'
import SEE_PONTE_DATA from "./data"
import media from "../../assets/styles/media"

const Container = styled.div`
  height: 80vh;
  .swiper-container {
    height: 400px;
  }
  .swiper-slide {
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .flex-nav {
    display: flex;
    margin: 0;
    align-items: center;
  }
  ${media.tablet`
    padding: var(--gutter-l) 0 var(--gutter-l) var(--gutter-l);
    .swiper-slide {
      height: 500px;
      width: 43%;
      img {}
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

const Year = styled.h1`
  margin-top: -1em;
  font-weight: 600;
  text-align: center;
  font-size: 3rem;
  ${media.tablet`
    position: relative;
    text-align: left;
    transform: translateY(65%);
    font-size: 5.5rem;
    z-index: 2;
  `}
`

const Arrows = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  margin-right: 2rem;
  div {
    opacity: 0.25;
    transition: all 250ms ease-out;
    padding: 1rem;
    &.active {
      opacity: 1;
      padding: 1rem;
    }
    &:first-child {
      margin-right: 10px;
    }
  }
  ${media.tablet`
    width: calc(31% + 10rem);
    justify-content: flex-end;
  `}
`

const ActiveSlide = styled.div`
  margin-left: 2rem;
  ${media.tablet`
    margin: 0;
  `}
`

const CaptionSelection = styled.div`
  display: grid;
  grid-template: auto / 1fr;
  justify-items: flex-end;
  position: relative;
  padding: 1rem 0;
  z-index: 2;
  .flex {
    display: flex;
    p,
    button {
      margin-left: 5px;
      font-size: 0.9em;
    }
    button {
      border: none;
      background-color: transparent;
      display: inline-block;
      position: relative;
      transition: all 250ms ease-out;
      &:focus {
        outline: none;
      }
      &:hover {
        color: red;
      }
    }
  }
  ${media.tablet`
    padding: 0;
    padding-right: 8rem;
    margin: 0.5rem;
    p {
      padding-top: 1.5em;
    }
  `}
`

const SeePonte = () => {
  const [caption, setCaption] = useState("Hillbrow")

  const renderSeePonteData = () => {
    return SEE_PONTE_DATA.filter(seePonte => {
      if (caption) {
        return seePonte.caption === caption
      }
    }).map((seePonte, index) => {
      return (
        <div key={index} className="swiper-slide" caption={caption}>
          <img src={seePonte.img} alt="hillbrow"/>
        </div>
      )
    })
  }

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
      <CaptionSelection>
        <div className="flex">
          <button onClick={e => setCaption(e.target.value)} value="Hillbrow">
            Hillbrow
          </button>
          <p>/</p>
          <button onClick={e => setCaption(e.target.value)} value="Ponte City">
            Ponte City
          </button>
          <p>/</p>
          <button onClick={e => setCaption(e.target.value)} value="Dlala Nje">
            Dlala Nje
          </button>
        </div>
      </CaptionSelection>
      <Year>{caption}</Year>
      <div ref={swiperElement} className="swiper-container">
        <div className="swiper-wrapper">{renderSeePonteData()}</div>
      </div>
      <div className="flex-nav">
        <Arrows>
          <div
            className={activeSlide > 0 ? `active mouse-link` : `mouse-link`}
            onClick={slidePrev}
          >
            &#8592;
          </div>
          <div
            className={
              activeSlide < SEE_PONTE_DATA.length - 1
                ? `active mouse-link`
                : `mouse-link`
            }
            onClick={slideNext}
          >
            &#8594;
          </div>
        </Arrows>
      </div>
    </Container>
  )
}

export default SeePonte
