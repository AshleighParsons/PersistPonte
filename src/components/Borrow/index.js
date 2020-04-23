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

const Borrow  = ({ setForm, formData, navigation, defaultData }) => {
  const { name, Work } = formData;
  const { next } = navigation;
  
  defaultData.day = defaultData.day + 2

  function borrowMoney(amount) {
    defaultData.money = defaultData.money - amount
  }

  return (
    <Container>
      <h3>
        A friend from work has asked to borrow R50.<br/><br/>
        It is for his daughter's birthday tomorrow, and he'd like to get her a gift.<br/><br/>
        What would you like to do?<br/><br/><br/><br/>
        <div class="options">
          <div className="option" onClick={next}>
            <a onClick={() => {borrowMoney(0)}}>
              Say that you can't afford it<br/>
              R0
            </a>
          </div> 
          <div className="option" onClick={next}>
            <a onClick={() => {borrowMoney(50)}}>
              Borrow him the money<br/>
              R50
            </a>
          </div> 
        </div>
      </h3>
    </Container>
  )
}

export default Borrow
