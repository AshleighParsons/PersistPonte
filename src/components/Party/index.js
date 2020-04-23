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

const Party  = ({ setForm, formData, navigation, defaultData }) => {
  const { name, Work } = formData;
  const { next } = navigation;
  
  defaultData.day = defaultData.day + 2

  function watchSister(amount) {
    defaultData.money = defaultData.money - amount
  }

  return (
    <Container>
      <h3>
        You've been invited to a party.<br/><br/>
        You'd really like to get to know more people in Jo'burg!<br/><br/>
        But, you'd need someone to watch your sister.<br/><br/><br/><br/>
        <div class="options">
          <div className="option" onClick={next}>
            <a onClick={() => {watchSister(0)}}>
              Stay home instead.<br/>
              Every cent counts!<br/>
              R0
            </a>
          </div> 
          <div className="option" onClick={next}>
            <a onClick={() => {watchSister(30)}}>
              Ask a neighbour to watch your sister.<br/>
              Offer her some cash. <br/>
              R30
            </a>
          </div> 
          <div className="option" onClick={next}>
            <a onClick={() => {watchSister(60)}}>
              Hire a babysitter.<br/>
              You need a night off!<br/>
              R60
            </a>
          </div> 
        </div>
      </h3>
    </Container>
  )
}

export default Party