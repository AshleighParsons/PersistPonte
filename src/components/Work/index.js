import React, { Component, useState } from "react"
import styled from "styled-components"
import FAQModal from "./WorkModal"

import WorkImage from "../../assets/images/work.png";

const Container = styled.div`
  color: black;
  h3 {
    text-align: center;
    width: 50vw;
    margin: 5em auto;
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
    /* padding: 4em 4em 0; */
  }
`

const Work = ({ setForm, formData, navigation, defaultData }) => {
  const { name, Work } = formData;
  const { next } = navigation;
  
  defaultData.day = defaultData.day + 2

  function updateSalary(amount) {
    defaultData.salary = amount

    console.log(defaultData);
  }
  
  return (
    <Container>
      <h3>
        Great! You've found a place to stay.<br/><br/>
        But, you'll need to earn some cash to afford to live there.<br/><br/>
        We'll let you know when payday is.<br/><br/>
        Have a look for a job:<br/><br/><br/><br/>
        
        <div className="options">
          <div className="option" onClick={next}>
            <a onClick={() => {updateSalary(5000)}}>
              Pickers And Packers<br/><br/>
              Pickers and Packers required. Register today start work tomorrow! 
              This company is accessible by a major local bus route.
              Hours of work are 07:30-16:00, Monday-Friday. 
              The main duties involve picking and packing light orders, 
              working with scanners and general warehouse work.<br/><br/>
              R1250.00 p/w
            </a>
          </div> 
          <div className="option" onClick={next}>
            <a onClick={() => {updateSalary(4500)}}>
              Cashier<br/><br/>
              We are looking for a cashier for a four month contract. 
              Requirements: SA Citizen, Grade 12 qualification or similar, Customer service skills, 
              Good attention to detail, Good communication skills, Grasp of basic math.<br/><br/>
              R4500.00 p/m
            </a>
          </div> 
          <div className="option" onClick={next}>
            <a onClick={() => {updateSalary(5250)}}>
              Bartender and Waitstaff<br/><br/>
              A talented Waiter or Waitress is required for this stunning manor 
              Hotel. As a Waiter or Waitress you will: Be professional, highly organized and have a friendly persona, 
              Serve guests within the restaurant and offer them the best possible dining experience.<br/><br/>
              R5250.00 p/m
            </a>
          </div> 
        </div>
      </h3>
    </Container>
  )
}

export default Work;
