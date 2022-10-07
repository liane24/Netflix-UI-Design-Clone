import React, {useState, useRef} from 'react'
import { StyledNavLogo } from '../components/Header/styles'
import SignupFooter from '../components/SignupFooter/SignupFooter'
import logo from '../assets/logo.png';
import styled from 'styled-components';
import SignupHeader from '../components/SignUpHeader/SignupHeader';
import userStore from "../store/userStore";

export default function Signup() {
  const { email, signup, setCurrentEmail } = userStore((state) => ({
    user: state.user,
    emailAddress: state.emailAddress,
    signup: state.signup,
    setCurrentEmailAddress: state.setCurrentEmailAddress,
  }));

  const [signupEmail, setSignupEmail] = useState(email);
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passErr, setPasswordErr] = useState("");
  const [signupErr, setSignupErr] = useState(false);

  // handlers
  const inputHandler = (event) => {
    event.target.id === "email"
      ? setSignupEmail(event.target.value)
      : setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // setSignupEmail(signupEmail.trim());
    // setPassword(password.trim());
    let emptyFlag = false;
    if (signupEmail.length === 0) {
      setEmailErr("Email is required.");
      emptyFlag = true;
    }

    if (password.length === 0) {
      setPasswordErr("Password is required.");
      emptyFlag = true;
    }

    if (emptyFlag) return;

    let validateFlag = false;
    if (!validateEmail(signupEmail)) {
      setEmailErr("Please enter a valid email address.");
      validateFlag = true;
    }

    if (!validatePassword(password)) {
      setPasswordErr("Password should be between 6 and 60 characters long.");
      validateFlag = true;
    }

    if (validateFlag) {
      return;
    } else {
      setEmailErr("");
      setPasswordErr("");
      signup(signupEmail, password).catch((err) => {
        setSignupErr(true);
      });
    }
  };

  const changeGlobalEmailHandler = () => {
    setCurrentEmail(signupEmail);
  };

  // helpers
  const validateEmail = (email) => {
    //Validates the email address
    const emailRegex =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6 && password.length <= 60 ? true : false;
  };


  return (
    <Container>
        <NavWrapper>
            <SignupHeader />
        <Form onSubmit={submitHandler}>
          {signupErr ? (
            <p className="signup-err">
              <strong>Looks like that account already exists.</strong>{" "}
              <a href="/login" onClick={changeGlobalEmailHandler}>
                Sign into that account
              </a>{" "}
              or try using a different email.
            </p>
          ) : null}
            <h6>STEP <span className='steps'>1</span> OF <span className='steps'>3</span></h6>
            <h1>Create a password to start your membership</h1>
            <p>Just a few more steps and you're finished!</p>
            <p>We hate paperwork, too.</p>
        <input 
          type="text"
            placeholder="Email"
            value={signupEmail}
            onChange={inputHandler}
            id="email"
            className={`${emailErr ? "err" : ""}`}
        />
        <input
          type="password"
            placeholder="Add a password"
            value={password}
            onChange={inputHandler}
            id="password"
            className={`password" ${passErr ? "err" : ""}`}
        />
        <span className="password-err">{passErr}</span>
        <button>Next</button>
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
    &.err {
      border-color: #b92d2b;
    }
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
    .signup-err,
    .signup-err > * {
      font-size: 1.6rem;
    }
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
    span {
      font-size: 1.35rem;
    }
  }
`;
