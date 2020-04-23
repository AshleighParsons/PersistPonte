import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import "./layout.css"

const Container = styled.div `
  padding: 0 6em;
  font-family: sans-serif;
  /* font-family: "ChampagneLimousines"; */
`

const Layout = ({ children }) => {

  return (
    <>
      <Container>
        <main>{children}</main>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
