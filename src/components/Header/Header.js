import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { StyledNav, StyledNavLogo, StyledLanguageSignin } from "./styles";
import logo from "../../assets/logo.png";

const Header = () => {
    return (
    <StyledNav>
      <StyledNavLogo className="nav-logo">
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </StyledNavLogo>
      <StyledLanguageSignin className="language-signin flex-item">
       
        <Link to="/signin">
          <button>Sign In</button>
        </Link>
      </StyledLanguageSignin>
    </StyledNav>
  );
}

export default Header;