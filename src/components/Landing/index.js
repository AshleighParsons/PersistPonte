import React from "react";
import styled from "styled-components";

import media from "../../assets/styles/media";

import Ponte from "../../assets/images/ponte.png";
import Down from "../../assets/images/city.png";

const Container = styled.section`
  height: 75vh;
  text-align: center;
  font-family: sans-serif;
  h1 {
    font-size: 1.5em;
    letter-spacing: 10px;
    text-transform: uppercase;
    line-height: 1.2;
    color: black;
  }
  p {
    font-size: small;
    color: black;
    line-height: 1.5;
    padding-right: 15px;
  }
  .heading {
    color: #333652;
    font-size: 2em !important;
  }
  a {
    img {
      height: 1em;
      padding-right: 1em;
      padding-top: 1em;
    }
  }
  img {
    height: 8em;
    padding-top: 1em;
  }
  .text {
    grid-column: 1;
    grid-row: 1;
    padding-top: 2em;
  } 
  .icon {
    text-align: center;
    grid-column: 2;
    border-radius: 50%;
  }
  ${media.laptop`
    display: grid;
    text-align: right;
    grid-template-columns: 1.2fr 1fr;
    grid-template-rows: 1fr;
    padding: 4em 2em;
      .text {
        grid-column: 1;
      } 
    img {
      height: 20em;
      padding-top: 1.5em;
    }
    a {
      img {
        height: 1.5em;
      }
    }
    h1 {
      font-size: 4em;
      letter-spacing: 10px;
    }
    p {
      font-size: larger;
    }
  `}
`

const Landing = () => {
  return (
    <Container>
      <div className="icon">
        <img src={Ponte} alt ="astro" />
      </div>
        <div className="text">
          <p className="heading">Persist Ponte.</p>
          <p>There is no city in South Africa that has had changing faces like Hillbrow. The changing faces represent 
            a city of geo-political significance. Once an exclusively white metropolitan neighborhood then, an emerging 
            black middle class hotspot and now a dilapidated haven for a daylight underworld. </p>
          <p> - Rita T.M. Kufandarerwa (2017) </p>
      </div>
    </Container>
  );
};

export default Landing;
