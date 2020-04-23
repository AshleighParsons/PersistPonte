import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import * as Scroll from "react-scroll";
import Logo from "../../assets/images/logo.png";

import styled from 'styled-components'

const HeaderCon = styled.div`
  background-color: yellow;
  font-family: sans-serif;
  /* font-family: "ChampagneLimousines"; */
  padding: 2em;
  display: flex;
  justify-content: space-between;
  font-size: xx-small;
  color: black;
  a {
    cursor: pointer;
    color: black;
  }
  img {
    height: 3em;
    margin-bottom: 0;
  }
  .logo {
    margin-top: -1em;
  }
  @media (min-width: 768px) {
    justify-content: flex-end;
    font-size: small;
    a {
      margin-left: 2em;
    }
  }
`

const GameHeader = () => {
  const ScrollLink = Scroll.Link

  return (
    <HeaderCon>
      <ScrollLink to="game" offset={50} duration={500}>Let's Play</ScrollLink>
      <ScrollLink to="/3d" offset={50} duration={500}>Explore</ScrollLink>
      <ScrollLink to="about" offset={50} duration={500}>About Hillbrow</ScrollLink>
      <ScrollLink to="footer" offset={50} duration={500}>More</ScrollLink>
      <ScrollLink to="landing" offset={50} duration={500} className="logo"><img src={Logo} alt="logo"/></ScrollLink>
    </HeaderCon>
  )
}

export default GameHeader
