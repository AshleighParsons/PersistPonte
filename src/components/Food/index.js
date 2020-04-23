import React, { Component } from "react"
import styled from "styled-components"
import FAQModal from "./FoodModal"

import FoodImage from "../../assets/images/food.png";
import BurgerImage from "../../assets/images/burger.png";
import FriesImage from "../../assets/images/fries.png";
import HotdogImage from "../../assets/images/hotdog.png";
import JuiceImage from "../../assets/images/juice.png";
import PizzaImage from "../../assets/images/pizza.png";

const Container = styled.div`
  height: 100%;
  width: 90vw;
  padding: 2em 2em 0;
  color: black;
  h3 {
    text-align: center;
    width: 50vw;
    margin: 7em auto;
    font-weight: 300;
  }
  img {
    width: 2em;
    /* padding: 1em 0; */
    cursor: pointer;
  }
  .options {
    font-weight: 250;
    font-size: medium;
    display: inline-flex;
    .option {
      padding: 0 1em;
    }
    a {
      cursor: pointer;
      :hover {
        color: red;
      }
    }
    p {
      padding: 0.5em 0 0;
    }
  }
  @media (min-width: 768px) {
    padding: 4em 4em 0;
  }
`

const Food  = ({ setForm, formData, navigation, defaultData }) => {
  const { name, Work } = formData;
  const { next } = navigation;
  
  defaultData.day = defaultData.day + 2

  function buyFood(amount) {
    defaultData.money = defaultData.money - amount
  }

  return (
    <Container>
      <h3>
        Time to go grocery shopping!<br/><br/>
        Let's fill up your cupboards.<br/><br/><br/><br/>
        <div className="options">
          <div className="option" onClick={next}>
            <a onClick={() => {buyFood(350)}}>
              Buy from Berea Able Supermarket.<br/>
              More expensive, but lasts longer.<br/>
              R350
            </a>
          </div> 
          <div className="option" onClick={next}>
            <a onClick={() => {buyFood(200)}}>
              Buy food from street vendors.<br/>
              It's cheaper, but it goes off quicker.<br/>
              R200
            </a>
          </div> 
        </div>
        {/* <div class="options">
          <div class="option">
            <a onClick={buyFood(20)}>
              <img src={FoodImage} alt ="city" /> 
            </a>
          </div> 
          <p>R20</p>
          <div class="option">
            <a onClick={buyFood(30)}>
              <img src={BurgerImage} alt ="city" /> 
            </a>
          </div> 
          <p>R30</p>
          <div class="option">
            <a onClick={buyFood(15)}>
              <img src={FriesImage} alt ="city" /> 
            </a>
          </div> 
          <p>R15</p>
          <div class="option">
            <a onClick={buyFood(20)}>
              <img src={HotdogImage} alt ="city" /> 
            </a>
          </div> 
          <p>R20</p>
          <div class="option">
            <a onClick={buyFood(12)}>
              <img src={JuiceImage} alt ="city" /> 
            </a>
          </div> 
          <p>R12</p>
          <div class="option">
            <a onClick={buyFood(15)}>
              <img src={PizzaImage} alt ="city" /> 
            </a>
          </div> 
          <p>R15</p>
        </div>
        <br/><br/>
        <a onClick={next}>
          Buy Food
        </a> */}
        {/* <a onClick={next}>
          <img src={FoodImage} alt ="city" />
        </a> */}
      </h3>
    </Container>
  )
}

export default Food
