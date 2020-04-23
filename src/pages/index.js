import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from '../components/Navbar'
import Landing from '../components/Landing'
import SeePonte from '../components/SeePonte'
import Play from '../components/Play'
import About from '../components/About'
import More from '../components/More'
// import ThreeD from '../components/ThreeD'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Layout>
        <SEO title="Home" />
        <Landing />
        <SeePonte />
        <Play />
        <About />
      </Layout>
      <More />
    </>
  )
}

export default IndexPage
