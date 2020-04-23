import React, { Component } from "react"
import styled from "styled-components"

import Home from "../../assets/images/next.png";
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
      img {
        margin: 0 2em;
        width: 2em;
      }
      input {
      width: 50%;
      /* border-radius: 15px; */
      border: none;
      border-bottom: solid 1px black;
      margin-bottom: 1.5em;
      height: 2em;
      padding: 0 0.5em;
      :focus {
        outline: none;
      }
    }
  @media (min-width: 768px) {
    padding: 4em 4em 0;
  }
`

const Name  = ({ setForm, formData, navigation, defaultData }) => {
  const { name, Work } = formData;
  const { next } = navigation;
  
  defaultData.day = 1
  
  return (
    <Container>
      <h3>
        Welcome to Hillbrow!<br/><br/>
        What's your name?<br/><br/>
        <input name="name" onChange={setForm}/><br/><br/>
        <a onClick={next}>
          <img src={Home} alt ="next" placeholder="Your Name"/>
        </a>
      </h3>
    </Container>
  )
}

export default  Name
