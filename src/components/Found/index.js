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

const Found  = ({ setForm, formData, navigation, defaultData }) => {
  const { name, Work } = formData;
  const { next } = navigation;
  
  defaultData.day = defaultData.day + 2

  function foundMoney(amount) {
    defaultData.money = defaultData.money + amount
  }

  return (
    <Container>
      <h3>
        You find R50 laying on the ground on your walk to work.<br/><br/>
        You know that somewone will miss that - but what are the chances of them coming back?<br/><br/>
        What are you going to do?<br/><br/><br/><br/>
        <div className="options">
          <div className="option" onClick={next}>
            <a onClick={() => {foundMoney(50)}}>
              Keep the money.<br/>
              You could really use it!
            </a>
          </div> 
          <div className="option" onClick={next}>
            <a onClick={() => {foundMoney(0)}}>
              Keep walking.<br/>
              What if they come back for it?
            </a>
          </div> 
        </div>
      </h3>
    </Container>
  )
}

export default  Found
