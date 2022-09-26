import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  flex-wrap: wrap;
  button {
    
   
    background-color: #e40914;
    color: white;
    font-size: 1.5rem;
    padding: 1rem 0.5rem;
    :hover {
      cursor: pointer;
    }
    :disabled {
      background-color: #95080f;
      cursor: default;
    }
  }
  @media only screen and (max-width: 540px) {
    button {
      margin-top: 2rem;
      flex-basis: 70%;
      height: 50px;
    }
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  flex-basis: 50%;
  input {
    width: 100%;
    outline: none;
    border: none;
    height: 60px;
    padding: 1rem;
    font-size: 1.3rem;
    &.show-err-border {
      border-bottom: 2px solid #ffa00a;
    }
  }
  .email-err {
    position: absolute;
    font-size: 1.2rem;
    color: #ffa00a;
  }
  @media only screen and (max-width: 540px) {
    flex-basis: 60%;
    input {
      
      height: 40px;
    }
  }
`;

export const FormContainer = styled.div`
   display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 50px;
  font-weight: 500;
  margin: auto;
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  color: white;
  font-size: 26px;
  font-weight: normal;
  margin: 16px auto;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const FormInput = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 70px;
  box-sizing: border-box;
`;

export const FormBreak = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const FormButton = styled.button`
  display: flex;
  align-items: center;
  height: 70px;
  background: #e50914;
  color: white;
  text-transform: uppercase;
  padding: 0 32px;
  font-size: 26px;
  border: 0;
  cursor: pointer;
  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;
    @media (max-width: 1000px) {
      width: 16px;
    }
  }
  &:hover {
    background: #f40612;
  }
  @media (max-width: 1000px) {
    height: 50px;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
  }
`;

export const FormText = styled.p`
  font-size: 19.2px;
  color: white;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  text-align: center;
  padding: 165px 45px;
`;