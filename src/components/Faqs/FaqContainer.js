import React from "react"
import styled from "styled-components"
import faqs from "../../data/faqsData"
import Questions from "./Questions"

export default function FaqContainer() {
    return (
    <Question>
        <Tyghk>
         <h1>Frequently Asked Questions</h1>
                 <div>
                     {faqs.map((faq) => {
                         return <Questions faq={faq} key={faq.id}/>
                     })}
                     
                 </div>
         </Tyghk>   
    </Question>
    )
}

const Question = styled.div`
  background: #000000;
  color: #ffffff;
  border-bottom: 10px solid #222222;
  padding-bottom: 4rem;

  
`;

const Tyghk = styled.div`
 width: 55%;
  margin: 0 auto;
  text-align: center;
  h1 {
    padding: 5rem 0rem 2.5rem 0rem;
    font-size: 3rem;
    color: white;
  }

  @media only screen and (max-width: 540px) {
    width: 100%;
    h1 {
      font-size: 2rem;
    }
  }
  @media only screen and (min-width: 550px) and (max-width: 1024px) {
    width: 85%;
    h1 {
      font-size: 3.5rem;
    }
  }
`