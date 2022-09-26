import styled from "styled-components";

export const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 3.5rem;
  margin-right: 3.5rem;
  padding-top: 1.8rem;

  @media only screen and (max-width: 482px) {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    padding-top: 1.5rem;
  }
`;

export const StyledNavLogo = styled.div`
  height: 80px;
  a {
    width: max-content;
    img {
      height: 100%;
      width: 200px;
    }
  }
  @media only screen and (max-width: 540px) {
    height: 35px;
    a {
      img {
        width: 100px;
      }
    }
  }
`;

export const StyledLanguageSignin = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 1.5rem;
  
  button {
    height: fit-content;
    border: none;
    padding: 7.5px 18px;
    margin-right: 1rem;
    font-size: 1rem;
    background: #ee0e19;
    border-radius: 5px;
    color: white;
    position: relative;
    top: 20px;
    &:hover {
      cursor: pointer;
    }
    @media only screen and (max-width: 540px) {
        top: 5px;
        padding: 4.5px;
    }
  }
`;