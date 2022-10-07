import React from 'react'
import { sectionDatas } from "../data/sectionDatas"
import FaqContainer from '../components/Faqs/FaqContainer'
import FooterContainer from '../components/Footer/FooterContainer'
import styled from 'styled-components'
import AllSections from '../components/Sections/AllSection'
import background_img from "../assets/background-image.jpg"
import EmailInput from '../components/Input/EmailInput'
import Header from '../components/Header/Header'
import Sections from '../components/Sections/Sections'
import Home from '../components/Input/Home'
import { useNavigate } from 'react-router-dom'

export const GetStarted = () => {
  
  return (
     <>
       <Container>
       <Header />
        <Home />
         </Container>
       <Sections />
       <FaqContainer />
       <FooterContainer />
     </>
  )
}

const Container = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background_img});
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 75vh;
  border-bottom: 10px solid #222222;
  
  @media only screen and (max-width: 480px) {
    min-height: 58vh;
  }

  // tablet
  @media only screen and (min-width: 481px) and (max-width: 820px) {
    min-height: 72vh;
  }

  // tablet portrait mode
  @media only screen and (min-width: 550px) and (max-width: 1024px) {
    min-height: 55vh;
  }

`;
 
const TitleSection = styled.div`
  text-align: center;
  color: white;
  width: 80%;
  margin: 8rem auto 4rem auto;

  h1 {
    font-size: 3.5rem;
    max-width: 640px;
    margin: 0 auto;
  }
  p {
    font-size: 1.5rem;
  }
  .last-p {
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 540px) {
    width: 100%;
    margin: 4rem auto 4rem auto;
    
    h1 {
      font-size: 1.75rem;
    }
    p {
      font-size: 1.25rem;
    }
    .last-p {
      font-size: 1.25rem;
    }
  }
`;