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

const Rent  = ({ setForm, formData, navigation, defaultData }) => {
  const { name, Work } = formData;
  const { next } = navigation;
  
  defaultData.day = defaultData.day + 2

  function payRent(amount) {
    defaultData.money = defaultData.money - amount
  }

  return (
    <Container>
      <h3>
        Rent is due today!<br/><br/><br/><br/>
        <div class="options">
          <div class="option">
            <a onClick={payRent(defaultData.rent)} onClick={next}>
              Pay Rent<br/>
              R{defaultData.rent}
            </a>
          </div> 
        </div>
      </h3>
    </Container>
  )
}

export default Rent