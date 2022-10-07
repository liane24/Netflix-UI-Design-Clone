import React from 'react'
import { Container, Grid } from "./styles";

const SignupFooter = () => {
    return (
        <Container>
         <Grid>
            <p className="title">Questions? Call <span>000 800 040 1843</span>{" "}</p>
            <div className="footerlink">FAQ</div>
            <div className="footerlink">Help Centre</div>
            <div className="footerlink">Terms of Use</div>
            <div className="footerlink">Privacy</div>
            <div className="footerlink">Cookie Preferences</div>
            <div className="footerlink">Corporate Information</div>
         </Grid>
        </Container>
    )
}

export default SignupFooter;