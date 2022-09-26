import React from "react";
import image1 from "../../assets/enjoyTV.PNG"
import image2 from "../../assets/stanger-things.PNG"
import image3 from "../../assets/flow_image3.png"
import image4 from "../../assets/image2.PNG"

import styled from "styled-components";

export default function Sections() {
    return(
        <Container>
        <Item>
          <Inner>
            <Pane>
              <Title>
                <h1>Enjoy on your TV.</h1>
              </Title>
              <Subtitle>
                Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, 
                Blu-ray players and more.
              </Subtitle>
            </Pane>
            <Pane>
              <img src={image1} alt="tv"/>
            </Pane>
          </Inner>
        </Item>
        <Item>
          <Inner1>
            <Pane>
              <Title>
                <h1>Download your programmes to watch offline.</h1>
              </Title>
              <Subtitle>
                Save your favourites easily and always have something to watch.
              </Subtitle>
            </Pane>
            <Pane>
              <img src={image2} alt="strangerthings"/>
            </Pane>
          </Inner1>
        </Item>
        <Item>
          <Inner>
            <Pane>
              <Title>
                <h1>Watch everywhere.</h1>
              </Title>
              <Subtitle>
                Stream unlimited films and TV programmes on your phone, tablet, 
                laptop and TV without paying more.
              </Subtitle>
            </Pane>
            <Pane>
              <Image src={image3} alt="strangerthings"/>
            </Pane>
          </Inner>
        </Item>
        <Item>
          <Inner1>
            <Pane>
              <Title>
              <h1>Create profiles for children.</h1>
              </Title>
              <Subtitle>
                Send children on adventures with their favourite characters 
                in a space made just for them – free with your membership.
              </Subtitle>
            </Pane>
            <Pane>
              <img src={image4} alt="adventures"/>
            </Pane>
          </Inner1>
        </Item>
      </Container>
    )
}

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  width: 100%;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Image = styled.img``;

const Inner1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;
  max-width: 1100px;
  margin: auto;
  width: 100%;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Pane = styled.div`
  width: 50%;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
  img {
  max-width: 100%;
  height: auto;
  }
`;

const Title = styled.h1`
  font-size: 30px;
  line-height: 1.1;
  margin-bottom: 8px;
  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

const Subtitle = styled.h2`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const Item = styled.div`
  display: flex;
  border-bottom: 10px solid #222222;
  padding: 50px 5%;
  color: white;
  overflow: hidden;
`;

const Container = styled.div`
  @media (max-width: 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;


