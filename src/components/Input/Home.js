import React from "react";
import { FormContainer, FeatureContainer, Title, SubTitle, FormInput, FormButton, FormBreak, FormText } from "./styles"

export default function Home() {

  
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
                    />
                    <FormButton>Get Started</FormButton>
                    <FormBreak />
                </FormContainer>
            </FeatureContainer>
         
        </>
    )
}