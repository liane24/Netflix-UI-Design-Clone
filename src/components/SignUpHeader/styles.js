import styled from "styled-components";

export const Nav = styled.nav`
padding: 1.75rem 1.5rem;
border-bottom: 1px solid #E4E4E4;
display: flex;
justify-content: space-between;
align-items: center;
.loginBtn {
    text-decoration: none;
    font-weight: 600;
    font-size: 1.2rem;
    color: black;

    :hover {
        text-decoration: underline;
    }
    @media only screen and (min-width: 550px) and (max-width: 1025px) {
      font-size: 1.7rem;
    }
}
`;