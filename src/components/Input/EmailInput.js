import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { ButtonWrapper, InputWrapper } from "./styles"
import userStore from "../../store/userStore";
import { fetchSignInMethodsForEmail } from "firebase/auth";
import { auth } from "../../firebase/FirebaseConfig"


export default function FormInput() {
  const { user, signup, setCurrentEmailAddress } = userStore((state) => ({
    user: state.user,
    signup: state.signup,
    setCurrentEmailAddress: state.setCurrentEmailAddress

  }));
  
  const [email, setEmail] = useState("");
  const [userError, setUserError] = useState("");
  const [loading, setLoading] = useState(false);
  const submitRef = useRef(null);

  const navigate = useNavigate();

  const inputHandler = (event) => {
    setEmail(event.target.value);
  };

  const validateEmail = (email) => {
    //Validates the email address
    var emailRegex =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return emailRegex.test(email);
  };

  const submitHandler = () => {
    if (!validateEmail(email)) {
      setUserError("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    fetchSignInMethodsForEmail(auth, email)
      .then((data) => {
        // console.log(data);
        setCurrentEmailAddress(email);
        if (data.length === 1) {
          navigate("/login");
        } else {
          navigate("/signup");
        }
      })
      .catch((err) => console.log(err.code));
    setUserError("");
    setLoading(false);
  };
  
  return (
   <ButtonWrapper className="input-button-wrapper">
      <InputWrapper className="input-err-wrapper">
        <input
          type="text"
          placeholder="Email address"
          value={email}
          onChange={inputHandler}
          className={`${userError ? "show-err-border" : ""}`}
        />
        <div className="email-err">{userError}</div>
      </InputWrapper>
      <button
        onClick={submitHandler}
        ref={submitRef}
        disabled={loading ? true : false}
      >
        Get Started {">"}
      </button>
    </ButtonWrapper>
  )
}

    

