import React from "react";
import SignupFooter from "../components/SignupFooter/SignupFooter";
import styled from "styled-components";
import SignupHeader from "../components/SignUpHeader/SignupHeader";

export default function Signup() {
  return (
    <Container>
      <NavWrapper>
        <SignupHeader />
        <Form>
          <p className="signup-err">
            <strong>Looks like that account already exists.</strong>{" "}
            <a href="/login">Sign into that account</a> or try using a different
            email.
          </p>
          <h6>
            STEP <span className="steps">1</span> OF{" "}
            <span className="steps">3</span>
          </h6>
          <h1>Create a password to start your membership</h1>
          <p>Just a few more steps and you're finished!</p>
          <p>We hate paperwork, too.</p>
          <input type="text" placeholder="Email" id="email" />
          <input type="password" placeholder="Add a password" id="password" />

          <button>Next</button>
        </Form>
      </NavWrapper>
      <SignupFooter />
    </Container>
  );
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

  h6 {
    font-size: 15px;

    font-weight: lighter;
  }

  .steps {
    font-weight: 500;
    color: black;
  }

  h1 {
    font-size: 2rem;
    font-weight: bold;
  }
  p {
    margin-top: 1rem;
    font-size: 1.2rem;
  }

  input {
    width: 100%;
    padding: 1rem;
    margin-top: 1rem;
    font-size: 1.2rem;
    outline: none;
    border: 1px solid #8c8c8c;
    border-radius: 2px;

    :focus {
      outline: none;
    }
  }
  button {
    text-align: center;
    width: 107%;
    font-size: 1.65rem;
    color: white;
    padding: 1rem;
    margin-top: 2rem;
    background-color: #f6121d;
    border: none;
    border-radius: 5px;
  }
  span {
    font-size: 0.85rem;
    color: #b92d2b;
  }
  @media only screen and (max-width: 540px) {
    padding: 1.5rem 1.5rem;
    h6 {
      font-size: 2.5rem;
    }
    h1 {
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
`;
