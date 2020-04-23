import React, {useState, setState} from "react"
import { Link } from "gatsby"
import styled from "styled-components";
import { useForm, useStep } from "react-hooks-helper";

import media from "../assets/styles/media";

import Home from "../assets/images/home.png";
import Skyline from "../assets/images/skyline.png";
import ApartmentImage from "../assets/images/apartment.png";

// import MyClass from '../components/Map'

import GameHeader from '../components/Navbar/gameNav'
import GoogleMap from '../components/Map'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Apartment from "../components/Apartment"
import Work from "../components/Work"
import Shoes from "../components/Shoes"
import Payday from "../components/Payday"
import Found from "../components/Found"
import Taxi from "../components/Taxi"
import Fees from "../components/Fees"
import Cold from "../components/Cold"
import Cold2 from "../components/Cold2"
import Food from "../components/Food"
import ExtraDay from "../components/ExtraDay"
import Party from "../components/Party"
import Rent from "../components/Rent"
import Borrow from "../components/Borrow"
import Success from "../components/Success"
import Lost from "../components/Lost"
import Start from "../components/Start"
import Name from "../components/Name"

const LinkImg = styled.img `
  width: 30px;
  float: right;
`

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  h3 {
    text-align: center;
    margin: 7em auto;
  }
  ${media.laptop`
    padding: 1em 1em 0;
  `}
`

const steps = [
  { id: "start" },
  { id: "name" },
  { id: "apartment" },
  { id: "work" },
  { id: "shoes" },
  { id: "found" },
  { id: "taxi" },
  { id: "fees" },
  { id: "cold" },
  { id: "cold2" },
  { id: "food" },
  { id: "payday" },
  { id: "extraday" },
  { id: "party" },
  { id: "rent" },
  { id: "borrow" },
  { id: "success" }
];

const defaultData = {
  name: 'Doe',
  money: 1700,
  day: 1,
  rent: 0,
  salary: 0
};

const Game1 = () => {
  const [useState, setState] = useForm(defaultData.money);
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  if (defaultData.money <= 0) {
      return (
        <Layout>
          <Lost {...props} />
        </Layout>
      )
  }

  const props = { formData, setForm, navigation, defaultData };

  switch (id) {
    case "start":
      return (
        <Layout>
          <Container >
            <Link to="/">
              <LinkImg src={Home} alt ="home" />
          </Link>
          </Container>
          <Start {...props} />
        </Layout>
      )
    case "name":
      return (
        <Layout>
          <Container >
            <h2>R {defaultData.money}</h2>
            <h2>Day {defaultData.day}</h2>
            <Link to="/">
              <LinkImg src={Home} alt ="home" />
          </Link>
          </Container>
          <Name {...props} />
        </Layout>
      )
    case "apartment":
      return (
        <Layout>
          <Container >
            <h2>R {defaultData.money}</h2>
            <h2>Day {defaultData.day}</h2>
            <Link to="/">
              <LinkImg src={Home} alt ="home" />
          </Link>
          </Container>
          <Apartment {...props} />
        </Layout>
      )
    case "work":
      return (
        <Layout>
          <Container >
            <h2>R {defaultData.money}</h2>
            <h2>Day {defaultData.day}</h2>
            <Link to="/">
              <LinkImg src={Home} alt ="home" />
          </Link>
          </Container>
          <Work {...props} />
        </Layout>
      )
    case "shoes":
      return (
        <Layout>
          <Container >
            <h2>R {defaultData.money}</h2>
            <h2>Day {defaultData.day}</h2>
            <Link to="/">
              <LinkImg src={Home} alt ="home" />
          </Link>
          </Container>
          <Shoes {...props} />
        </Layout>
      )
    case "found":
      return (
        <Layout>
          <Container >
            <h2>R {defaultData.money}</h2>
            <h2>Day {defaultData.day}</h2>
            <Link to="/">
              <LinkImg src={Home} alt ="home" />
          </Link>
          </Container>
          <Found {...props} />
        </Layout>
      )
    case "taxi":
      return (
        <Layout>
          <Container >
            <h2>R {defaultData.money}</h2>
            <h2>Day {defaultData.day}</h2>
            <Link to="/">
              <LinkImg src={Home} alt ="home" />
          </Link>
          </Container>
          <Taxi {...props} />
        </Layout>
      )
    case "fees":
      return (
        <Layout>
          <Container >
            <h2>R {defaultData.money}</h2>
            <h2>Day {defaultData.day}</h2>
            <Link to="/">
              <LinkImg src={Home} alt ="home" />
          </Link>
          </Container>
          <Fees {...props} />
        </Layout>
      )
    case "cold":
      return (
        <Layout>
          <Container >
            <h2>R {defaultData.money}</h2>
            <h2>Day {defaultData.day}</h2>
            <Link to="/">
              <LinkImg src={Home} alt ="home" />
          </Link>
          </Container>
          <Cold {...props} />
        </Layout>
      )
    case "cold2":
      return (
        <Layout>
          <Container >
            <h2>R {defaultData.money}</h2>
            <h2>Day {defaultData.day}</h2>
            <Link to="/">
              <LinkImg src={Home} alt ="home" />
          </Link>
          </Container>
          <Cold2 {...props} />
        </Layout>
      )
    case "food":
      return (
        <Layout>
          <Container >
            <h2>R {defaultData.money}</h2>
            <h2>Day {defaultData.day}</h2>
            <Link to="/">
              <LinkImg src={Home} alt ="home" />
          </Link>
          </Container>
          <Food {...props} />
        </Layout>
      )
    case "payday":
      return (
        <Layout>
          <Container >
            <h2>R {defaultData.money}</h2>
            <h2>Day {defaultData.day}</h2>
            <Link to="/">
              <LinkImg src={Home} alt ="home" />
          </Link>
          </Container>
          <Payday {...props} />
        </Layout>
      )
    case "extraday":
      return (
        <Layout>
          <Container >
            <h2>R {defaultData.money}</h2>
            <h2>Day {defaultData.day}</h2>
            <Link to="/">
              <LinkImg src={Home} alt ="home" />
          </Link>
          </Container>
          <ExtraDay {...props} />
        </Layout>
      )
    case "party":
      return (
        <Layout>
          <Container >
            <h2>R {defaultData.money}</h2>
            <h2>Day {defaultData.day}</h2>
            <Link to="/">
              <LinkImg src={Home} alt ="home" />
          </Link>
          </Container>
          <Party {...props} />
        </Layout>
      )
    case "rent":
      return (
        <Layout>
          <Container >
            <h2>R {defaultData.money}</h2>
            <h2>Day {defaultData.day}</h2>
            <Link to="/">
              <LinkImg src={Home} alt ="home" />
          </Link>
          </Container>
          <Rent {...props} />
        </Layout>
      )
    case "borrow":
      return (
        <Layout>
          <Container >
            <h2>R {defaultData.money}</h2>
            <h2>Day {defaultData.day}</h2>
            <Link to="/">
              <LinkImg src={Home} alt ="home" />
          </Link>
          </Container>
          <Borrow {...props} />
        </Layout>
      )
    case "success":
      return (
        <Layout>
          <Success {...props} />
        </Layout>
      )
    default:
      return null;
  }
}

export default Game1
