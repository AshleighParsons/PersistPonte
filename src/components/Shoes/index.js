import React, { Component } from "react"
import styled from "styled-components"

import WorkImage from "../../assets/images/work.png";

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
    width: 4em;
    padding: 1em 0;
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
  }
  @media (min-width: 768px) {
    padding: 4em 4em 0;
  }
`

const Shoes  = ({ setForm, formData, navigation, defaultData }) => {
  const { name, Work } = formData;
  const { next } = navigation;
  
  defaultData.day = defaultData.day + 2

  function buyShoes(amount) {
    defaultData.money = defaultData.money - amount
  }

  console.log(defaultData);
  
  return (
    <Container>
      <h3>
        Your sister's school shoes have broken.<br/><br/>
        You know that she needs new shoes, but, rent is due soon!<br/><br/>
        What are you going to do?<br/><br/><br/><br/>
        <div className="options">
          <div className="option" onClick={next}>
            <a onClick={() => {buyShoes(200)}}>
              Buy new Toughees<br/>
              They're more expensive but they'll last.<br/><br/>
              R200
            </a>
          </div> 
          <div className="option" onClick={next}>
            <a onClick={() => {buyShoes(90)}}>
              Buy from PEP<br/>
              They might not last, but it's better than broken shoes.<br/><br/>
              R90
            </a>
          </div> 
          <div className="option" onClick={next}>
            <a onClick={() => {buyShoes(0)}}>
              Send her in broken shoes.<br/>
              You can't afford new school shoes right now.<br/><br/>
              R0
            </a>
          </div> 
        </div>
      </h3>
    </Container>
  )
}

export default Shoes
