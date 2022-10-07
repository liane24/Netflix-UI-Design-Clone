import styled from "styled-components";

export const Container = styled.div`
  padding-top: 1rem;
  padding-bottom: 2rem;
  color: #757575;
  background-color: #F3F3F3;
  @media Only screen and (max-width: 540px) {
  }
  @media (min-width: 550px) and (max-width: 1025px) and (orientation: portrait) {
  }
`;

export const Grid = styled.div`
  width: 55%;
  padding: 0 3rem;
  display: grid;
  grid-template-columns: auto auto auto auto;
  font-size: 0.9rem;
  .footerlink {
    padding: 0.5rem;
    width: fit-content;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  .title {
    padding: 1.2rem 0.5rem;
    grid-column: 1/5;
    font-size: 1rem;
    font-weight: 500;
    width: fit-content;
    span {
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }

  @media only screen and (max-width: 540px) {
    padding: 1rem;
    width: 100%;
    grid-template-columns: auto auto;
    .title {
      font-size: 1.6rem;
      grid-column: 1/3;
      span {
        font-size: 1.6rem;
      }
    }
    .footerlink {
      font-size: 1.3rem;
    }
  }

  @media only screen and (min-width: 550px) and (max-width: 1024px) {
    padding: 2rem;
    width: 100%;
    .title {
      font-size: 1.6rem;
      span {
        font-size: 1.6rem;
      }
    }
    .footerlink {
      font-size: 1.18rem;
    }
  }
`;