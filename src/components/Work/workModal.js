import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Swiper from 'react-id-swiper';

import { PonteApartment } from "../../assets/images/ponte1.jpg"
import { HillbrowApartment } from "../../assets/images/hillbrow1.jpg"
import { BereaApartment } from "../../assets/images/berea1.jpg"

const ModalContainer = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.75);
  z-index: -99;
  opacity: 0;
  transition: opacity 0.25s ease;
  &.visible {
    opacity: 1;
    z-index: 10;
  }
  color: black;
`

const ModalBox = styled.div`
  overflow-y: scroll;
  background-color: #f0f0f0;
  width: 80%;
  height: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  .relative-container {
    position: relative;
    p {
      font-weight: 600;
      padding-bottom: 3em;
      line-height: 1.5em;
    }
    .divider {
      display: inline-block;
      padding: 0;
      background-color: #00646c;
      width: 100px;
      height: 3px;
    }
    .question-1 {
      padding: 30px 0px 0px 0px;
    }
  }
  .swiper-container {
    text-align: center;
    .swiper-wrapper {
      img {
        width: auto !important;
        height: 15em;
      }
    }
    /* .swiper-button-next {
      color: #f6eec7;
    }
    .swiper-button-prev {
      color: #f6eec7;
    } */
  }
  h1 {
    text-align: center;
    margin: 0;
    font-size: 1.5rem;
    color: #00646c;
    font-family: "gotham-bold";
  }
  h3 {
    font-weight: 700;
    color: #00646c;
    padding-bottom: 1em;
  }

  @media (min-width: 768px) {
    padding: 50px;
  }
  a {
    padding-bottom: 0.2rem;
    color: black;
    border-bottom: 0.5px solid black;
    text-decoration: none;
    :hover {
      padding-bottom: 0.1rem;
      transition: 0.2s ease;
    }
  }
`

const CloseButton = styled.div`
  position: absolute;
  top: -10px;
  right: -20px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  div {
    position: relative;
    width: 100%;
    height: 3px;
    background-color: black;
    &.x-one {
      transform: rotate(45deg);
      top: 3px;
      left: 0px;
    }
    &.x-two {
      transform: rotate(-45deg);
    }
  }
  &:hover {
    opacity: 0.6;
  }
  @media (min-width: 768px) {
    top: 0px;
    right: 0px;
  }
`

class ApartmentModal extends Component {
  render() {
    const { onHide, show } = this.props
    const params = {
      slidesPerView: "auto",
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: true
      // },
      loop: true,
      spaceBetween: 30
    }
    return (
      <ModalContainer className={show ? "visible" : ""}>
        <ModalBox>
          <div className="relative-container">
            <CloseButton
              onClick={() => {
                onHide()
              }}
            >
              <div className="x-one" />
              <div className="x-two" />
            </CloseButton>
          </div>
          <Swiper {...params}>
            <div>
              <p>Pickers And Packers</p>
              <img src={PonteApartment} />
              <p>Pickers and Packers required. Register today start work tomorrow! This company is accessible by a major local bus route. No experience necessary as fully paid training is provided. Hours of work are 07:30-16:00, Monday-Friday. The main duties involve picking and packing light orders, working with scanners and general warehouse work.</p>
              <p>R1250.00 p/week</p>
              <button>Apply</button>
            </div>
            <div>
              <p>Cashier</p>
              <img src={PonteApartment} />
              <p>We are looking for a cashier for a four month contract. Requirements: SA Citizen, Grade 12 qualification or similar, Customer service skills, Good attention to detail, Good communication skills, Grasp of basic math.</p>
              <p>R4500.00 p/m</p>
              <button>Apply</button>
            </div>
            <div>
              <p>Bartender and Waiter/Waitress</p>
              <img src={HillbrowApartment} />
              <p>A talented Waiter or Waitress is required for this stunning manor Hotel which is set within its own beautifully manicured lawns and gardens. As a Waiter or Waitress you will: Be professional, highly organized and have a friendly persona, Serve guests within the restaurant and offer them the best possible dining experience.</p>
              <p>R5250.00 p/m</p>
              <button>Apply</button>
            </div>
          </Swiper>
        </ModalBox>
      </ModalContainer>
    )
  }
}

ApartmentModal.propTypes = {
  onHide: PropTypes.func,
  show: PropTypes.bool,
}

export default ApartmentModal
