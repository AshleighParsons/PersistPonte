import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import * as Scroll from "react-scroll";
import Logo from "../../assets/images/logo.png";

import styled from 'styled-components'

const HeaderCon = styled.div`
  background-color: white;
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
      text-decoration: none;
    }
  }
`

const Header = () => {
  const ScrollLink = Scroll.Link

  return (
    <HeaderCon>
      <Link to="/startgame" offset={50} duration={500}>Let's Play</Link>
      <Link to="/GoogleMap" offset={50} duration={500}>Explore</Link>
      <Link to="/" offset={50} duration={500} className="logo"><img src={Logo} alt="logo"/></Link>
    </HeaderCon>
  )
}

export default Header
