import React, { useState, useRef } from "react";
import { FormContainer, FeatureContainer, Title, SubTitle, FormInput, FormButton, FormBreak, FormText } from "./styles"
import { useNavigate, Link } from 'react-router-dom'
import userStore from "../../store/userStore";
import { fetchSignInMethodsForEmail } from "firebase/auth";
import { auth } from "../../firebase/FirebaseConfig"


export default function Home() {

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
        <>
          
            <FeatureContainer>
                <Title>Unlimited films, TV programmes and more.</Title>
                <SubTitle>Watch anywhere. Cancel at any time.</SubTitle>
                <FormText>Ready to watch? Enter your email to create or restart your membership.</FormText>
                <FormContainer>
                    <FormInput
                    type="text"
          placeholder="Email address"
          value={email}
          onChange={inputHandler}
          className={`${userError ? "show-err-border" : ""}`}
                     />
                     <div className="email-err">{userError}</div>
                    <FormButton onClick={submitHandler}
        ref={submitRef}
        disabled={loading ? true : false}>Get Started</FormButton>
                    <FormBreak />
                </FormContainer>
            </FeatureContainer>
         
        </>
    )
}