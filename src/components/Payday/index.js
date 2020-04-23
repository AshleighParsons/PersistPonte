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
    text-align: center;
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

const Shoes  = ({ setForm, formData, navigation, defaultData }) => {
  const { name, Work } = formData;
  const { next } = navigation;
  
  defaultData.day = defaultData.day + 2
   
  function blackTax(amount) {
    // next()
    defaultData.money = (defaultData.money + amount - ((amount/100) * 10)) - defaultData.rent
  }

  return (
    <Container>
      <h3>
        Finally. Payday has arrived!<br/><br/>
        You get paid: R{defaultData.salary}<br/>
        Your rent is: R{defaultData.rent}<br/>
        On top of bills, you'll need to send some money home to you parents.<br/><br/>
        This is called "Black Tax" &amp; will cost you about R{(defaultData.salary/100) * 10}.<br/><br/><br/><br/>
        <div className="options">
            <a onClick={blackTax(defaultData.salary)} onClick={next}>
              Receive Salary and Make Payments
            </a>
          </div> 
      </h3>
    </Container>
  )
}

export default Shoes
