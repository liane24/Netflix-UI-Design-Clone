import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { ButtonWrapper, InputWrapper } from "./styles"


export default function EmailInput() {
  return (
   <ButtonWrapper className="input-button-wrapper">
      <InputWrapper className="input-err-wrapper">
        <input
          type="text"
          placeholder="Email address"
          
        />
        <div className="email-err"></div>
      </InputWrapper>
      <button
        
      >
        Get Started {">"}
      </button>
    </ButtonWrapper>
  )
}

    

