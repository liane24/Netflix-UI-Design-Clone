import React from 'react'
import { Nav } from './styles'
import { StyledNavLogo } from '../Header/styles'
import logo from '../../assets/logo.png'

const SignupHeader = () => {
  return (
    <Nav>
            <StyledNavLogo>
                <a href="/">
                    <img src={logo} alt="" />
                </a>
            </StyledNavLogo>
            <a className="loginBtn" href="/login">
              Sign in
            </a>
        </Nav>
  )
}

export default SignupHeader