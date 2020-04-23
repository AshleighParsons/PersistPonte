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

const Cold2  = ({ setForm, formData, navigation, defaultData }) => {
  const { name, Work } = formData;
  const { next } = navigation;
  
  defaultData.day = defaultData.day + 2

  function coldFix2(amount) {
    defaultData.money = defaultData.money - amount
  }

  return (
    <Container>
      <h3>
        You've gotten some medicine for your sister, and she's feeling better.<br/><br/>
        However, you missed a day of work because of it.<br/><br/>
        A day of missed work means a day of salary.<br/><br/><br/><br/>
        <div className="options">
          <div className="option" onClick={next}>
            <a onClick={() => {coldFix2(100)}}>
              Missed day<br/>
              - R100
            </a>
          </div> 
        </div>
      </h3>
    </Container>
  )
}

export default Cold2
