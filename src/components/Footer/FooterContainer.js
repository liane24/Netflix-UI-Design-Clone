import React from "react";
import { Break, Column, Container, FooterLink, Row, Text, Title } from "./styles";

export default function FooterContainer() {
    return (
        <Container>
            <Title>Questions? Call 0808 196 5391</Title>
            <Break />
            <Row>
             <Column>
                <FooterLink href="#">FAQ</FooterLink>
                <FooterLink href="#">Investor Relations</FooterLink>
                <FooterLink href="#">Ways to Watch</FooterLink>
                <FooterLink href="#">Corporate Information</FooterLink>
                <FooterLink href="#">Netflix Originals</FooterLink>
             </Column>

             <Column>
                <FooterLink href="#">Help Centre</FooterLink>
                <FooterLink href="#">Jobs</FooterLink>
                <FooterLink href="#">Terms of Use</FooterLink>
                <FooterLink href="#">Contact Us</FooterLink>
             </Column>

             <Column>
                <FooterLink href="#">Account</FooterLink>
                <FooterLink href="#">Redeem gift cards</FooterLink>
                <FooterLink href="#">Privacy</FooterLink>
                <FooterLink href="#">Speed Test</FooterLink>
             </Column>

             <Column>
                <FooterLink href="#">Media Centre</FooterLink>
                <FooterLink href="#">Buy gift cards</FooterLink>
                <FooterLink href="#">Ways to Watch</FooterLink>
                <FooterLink href="#">Cookie Preferences</FooterLink>
                <FooterLink href="#">Legal Notices</FooterLink>
             </Column>
            </Row>
            <Break />
            <Text>Netflix United Kingdom</Text>
        </Container>
    )
}

