import React from "react";
import styled from "styled-components";

import media from "../../assets/styles/media";

import Skyline from "../../assets/images/skyline.png";

const Container = styled.section`
  height: auto;
  padding: 2em 2em 0;
  display: flex;
  color: black;
  .image {
    img {
      height: 10em;
      padding-top: 6.2em;
    }
  }
  .text{
    justify-content: space-between;
    h1 {
      font-size: 2em;
      letter-spacing: 2px;
      text-transform: uppercase;
      line-height: 1.2;
      padding-left: 1em;
      padding-top: 0.5em;
      opacity: 0.3;
    }
    img {
      width: 100%;
    }
    a {
      color: #333652;
      text-decoration: none;
    }
  }
  .icons {
    justify-content: space-between;
  }
  ${media.laptop`
    padding: 4em 4em 0;
    .text{
      width: 100%;
      margin-left: 0;
      h1 {
        text-align: left; 
        font-size: 4em;
        letter-spacing: 5px; 
      }
      p {
        font-size: larger;
        font-family: sans-serif;
      }
      .info {
        margin-bottom: -5em;
        text-align: right;
        padding: 0 5em 0 50%;
        line-height: 1.5;
      }
    }
  `}
`

const More = () => {
  return (
    <Container>
      <div className="text">
        <div className="info">
          <p>This project was inspired by a walking tour of Hillbrow that we took as part of our Honours course at Open Window (2020).
            We took this tour through <a href="https://www.dlalanje.org/" target="none">Dlala Nje</a>.
          </p>
          <p>The data for this project was collected through <a href="https://gcro.ac.za/research/project/detail/quality-of-life-survey-v-201718/" target="none">Gauteng City Region Observatory's "Quality of Life" Survey</a>,{" "}
          <a href="https://www.numbeo.com/cost-of-living/in/Johannesburg" target="none">Numbeo</a>, and by searching online marketplaces such as Gumtree, Junkmail and Facebook.
          </p>
        </div>
        <img src={Skyline} alt="skyline" />
      </div>
    </Container>
  );
};

export default More;
