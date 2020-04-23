import React from "react";
import styled from "styled-components";
import { Link } from "gatsby"

import media from "../../assets/styles/media";

import Taxi from "../../assets/images/taxi.png";
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
    grid-column: 2;
    grid-row: 1;
    padding-top: 2em;
  } 
  .icon {
    margin-top: -1em;
    text-align: center;
    grid-column: 1;
    border-radius: 50%;
  p {
    font-size: small;
    color: black;
    line-height: 1.5;
    padding-right: 15px;
  }
  }
  ${media.laptop`
    display: grid;
    text-align: left;
    grid-template-columns: 1fr 1.5fr;
    grid-template-rows: 1fr;
    padding: 10em 2em;
      .text {
        grid-column: 2;
      } 
    a {
      cursor: pointer;
      img {
      height: 20em;
      padding-top: 1.5em;
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

const Start = ({ setForm, formData, navigation, defaultData }) => {
  const { name, apartment } = formData;
  const { next } = navigation;
  defaultData.day = 1

  return (
    <Container>
        <div className="text">
          <p className="heading">Are you up for the challenge?</p>
          <p>Johannesburg is a city with many different social, political and economical difficulties for residents to overcome.</p>
          <p>According to the Johannesburg development agency official website, 50% of the population is under the age of 24.</p>
          <p>Johannesburg has changed so much over the past few decades that it cannot simply be mapped by looking at street names and landmarks, but should be navigated by sights, sounds, smells or even feelings.</p>


        <a onClick={next}>
        START
        </a>
      </div>
      <div className="icon">
      <a>
          <img src={Taxi} alt ="astro" />
          </a>
      </div>
    </Container>
  );
};

export default Start;
