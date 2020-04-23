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
  }
  a {
      img {
        margin: 0 2em;
        width: 2em;
        cursor: pointer;
      }
    }
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

const Lost  = () => {
  
  return (
    <Container>
      <h3>
        Oh no.<br/><br/>
        You didn't manage to make it through the month!<br/><br/>
        I hope that your experience has allowed you to understand some of the challenges of a young person living in Jo'burg.<br/><br/>
        Please be empathetic towards those who have less than yourself.<br/><br/><br/><br/>
        <a href="/startgame">
          <img src={Restart} alt ="restart" />
        </a>
        <a href="/">
          <img src={Home} alt ="home" />
        </a>
      </h3>
    </Container>
  )
}

export default  Lost
