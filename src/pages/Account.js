import React from 'react'
import { StyledNavLogo } from '../components/Header/styles'
import SignupFooter from '../components/SignupFooter/SignupFooter'
import logo from '../assets/logo.png';
import screen from '../assets/3screens.PNG'
import styled from 'styled-components';
import SignupHeader from '../components/SignUpHeader/SignupHeader';
import { useNavigate, Link } from 'react-router-dom';

function Account() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/signup");
    }
  return (
    <Container>
        <NavWrapper>
            <SignupHeader />
        <Form>
            <div className="picture">
                <img src={screen} alt="" />
            </div>
            <h6>STEP <span>1</span> OF <span>3</span></h6>
            <h1>Finish setting up your account</h1>
            <p>Netflix is personalised for you. Create a password to watch on any device at any time.</p>
            <button onClick={handleClick()}>Next</button>
        </Form>
        </NavWrapper>
    <SignupFooter />
    </Container>
  )

}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
`;

const NavWrapper = styled.div``;

const Form = styled.form`
  max-width: 475px;
  margin: 4rem auto;
  padding: 1rem;
  .picture {
    text-align: center;

  }
  .signup-err {
    background-color: #ffa00a;
    color: white;
    padding: 1rem 1.5rem;
    margin-bottom: 1rem;
    font-size: 1rem;
    a {
      text-decoration: underline;
      color: white;
    }
  }
  h1 {
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
   
  }
   span {
    font-weight: 500;
    color: black;
  }
  h6 {
    font-size: 15px;
    text-align: center;
    font-weight: lighter;
  }
  p {
    margin-top: 1rem;
    font-size: 1.2rem;
    text-align: center;
  }

  input {
    width: 100%;
    padding: 1rem;
    margin-top: 1rem;
    font-size: 1.2rem;
    outline: none;
    border: 1px solid #8c8c8c;
    border-radius: 2px;
    &.err {
      border-color: #b92d2b;
    }
    :focus {
      outline: none;
    }
  }
  button {
    text-align: center;
    width: 100%;
    font-size: 1.65rem;
    color: white;
    padding: 1rem;
    margin-top: 2rem;
    background-color: #f6121d;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  @media only screen and (max-width: 540px) {
    padding: 1.5rem 1.5rem;
    .signup-err,
    .signup-err > * {
      font-size: 1.6rem;
    }
    h3 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.5rem;
      margin-bottom: 1.3rem;
    }
    input {
      padding: 1.5rem;
      font-size: 1.7rem;
    }
    button {
      font-size: 2.15rem;
      padding: 1.5rem;
    }
    span {
      font-size: 1.35rem;
    }
  }
  @media only screen and (min-width: 550px) and (max-width: 1025px) {
    padding: 5rem 1.5rem;
    .signup-err,
    .signup-err > * {
      font-size: 1.5rem;
    }
    h3 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.5rem;
      margin-bottom: 1.3rem;
    }
    input {
      padding: 1.5rem;
      font-size: 1.7rem;
    }
    button {
      font-size: 2.15rem;
      padding: 1.5rem;
    }
    
  }
`;

export default Account;