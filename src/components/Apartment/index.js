import React, { Component, useState } from "react"
import styled from "styled-components"
import FAQModal from "./apartmentModal"

import ApartmentImage from "../../assets/images/apartment.png";

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

const Apartment = ({ setForm, formData, navigation, defaultData }) => {
  const { name, apartment } = formData;
  const { next } = navigation;
  
  function updateRent(amount) {
    defaultData.rent = amount
  }
  
  return (
    <Container>
      <h3>
        Welcome to Jo'burg, {name}<br/><br/>
        You and your little sister have just hopped off of a taxi in Hillbrow, with only R{defaultData.money} to your name.<br/><br/>
        Great news - you're right in front of the legendary 'Gumtree' where you've been told you can find super cheap
        place to stay, hopefully a jobs and where the latest parties are happening!<br/><br/>
        First things first, let's find you somewhere to live so you can get a good nights sleep.<br/><br/>
        We'll let you know when rent is due.<br/><br/><br/><br/>
        
        <div className="options">
          <div className="option" onClick={next}>
            <a onClick={() => {updateRent(5000)}}>
              Ponte City Apartment<br/><br/>
              2 Bedroom 1 Bathroom Apartment in Ponte City. 
              Open Plan kitchen with Modern Finishes, prepaid Electricity Meter.
              The building offers 24/7 on site security and bio-metric Access control.<br/><br/>
              R5000.00 p/m
            </a>
          </div> 
          <div className="option" onClick={next}>
            <a onClick={() => {updateRent(3000)}}>
              Berea Apartment<br/><br/>
              Spacious ,renovated unit with fitted kitchen and fitted wardrobes.
              24h security, biometric access and clean safe basement with cctv cameras.
              Building is near school and 300 m walk to Hillbrow Shoprite.<br/><br/>
              R3000.00 p/m
            </a>
          </div> 
          <div className="option" onClick={next}>
            <a onClick={() => {updateRent(2400)}}>
              Hillbrow Apartment<br/><br/>
              Newly renovated bachelor flats on Claim street next to Shoprite.
              On busy taxi route 2 minutes away from High point spar, wifi available, 24 /7 security services, biometrics.
              DSTV port connection, cctv cameras connected.<br/><br/>
              R2400.00 p/m
            </a>
          </div> 
        </div>
      </h3>
    </Container>
  )
}

export default Apartment;
