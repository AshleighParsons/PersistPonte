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

const ExtraDay  = ({ setForm, formData, navigation, defaultData }) => {
  const { name, Work } = formData;
  const { next } = navigation;
  
  defaultData.day = defaultData.day + 2

  function extraDay(amount) {
    defaultData.money = defaultData.money + amount
  }

  return (
    <Container>
      <h3>
        Your coworker is off sick today, and you've been asked to fill in for her.<br/><br/>
        You could use the extra cash, but you'd have to skip your younger sister's school play.<br/><br/>
        What are you going to do?<br/><br/><br/><br/>
        <div class="options">
          <div className="option" onClick={next}>
            <a onClick={() => {extraDay(100)}}>
              Pick up the shift.<br/>
              Money's tight right now.<br/>
              R100
            </a>
          </div> 
          <div className="option" onClick={next}>
            <a onClick={() => {extraDay(0)}}>
              Go to your sister's play.<br/>
              You don't want to let her down.<br/>
              R0
            </a>
          </div> 
        </div>
      </h3>
    </Container>
  )
}

export default ExtraDay
