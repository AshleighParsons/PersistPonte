import React, { Component } from "react"
import styled from "styled-components"

import Home from "../../assets/images/home.png";
import Restart from "../../assets/images/restart.png";

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

  a {
      img {
        margin: 0 2em;
        width: 2em;
      }
    }
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
      img {
        height: 2em;
        margin: 0 2em;
      }
    }
  }
  a {
      cursor: pointer;
      :hover {
        color: red;
      }
      img {
        margin: 0 2em;
      }
    }
  @media (min-width: 768px) {
    padding: 4em 4em 0;
  }
`

const Success  = ({ setForm, formData, navigation, defaultData }) => {
  const { name, Work } = formData;
  const { next } = navigation;
  
  defaultData.day = defaultData.day + 2
  
  return (
    <Container>
      <h3>
        Congrats.<br/><br/>
        You've proven that you are able to face Hillbrow, and survive a month with its challenges.<br/><br/>
        You had R{defaultData.money} left... But rent is due soon!<br/><br/>
        Unfortunately, not everyone can say the same.<br/><br/>
        Please be empathetic towards those who have less than yourself.<br/><br/><br/><br/>
        <a onClick={next}>
          <img src={Restart} alt ="restart" />
        </a>
        <a href="/">
          <img src={Home} alt ="home" />
        </a>
      </h3>
    </Container>
  )
}

export default  Success
