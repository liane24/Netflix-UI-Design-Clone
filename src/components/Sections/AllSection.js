import React from "react";
import styled from "styled-components";
import "./style.css";


const AllSections = ({ img, text, headline, imagePosition }) => {


  const Left = (
    <>
      <div>
        <img
          className={`info__image ${
            imagePosition === "right" ? "info__image--right" : "info__image--left"
          }`}
          src={img}
          alt=""
        />
      </div>
      <div
        className={`info__text ${
          imagePosition === "right" ? "info__text--left" : "info__text--right"
        }`}
      >
        <h1>{headline}</h1>
        <h3 className="info__text--small">{text}</h3>
      </div>
    </>
  );



  const Right = (
    <>
      <div
        className={`info_text ${
          imagePosition === "right" ? "info__text--left" : "info__text--right"
        }`}
      >
        <h1 className="info_text__headline">{headline}</h1>
        <h3 className="info__text--small">{text}</h3>
      </div>
      <div>
        <img
          className={`info__image ${
            imagePosition === "right" ? "info__image--right" : "info__image--left"
          }`}
          src={img}
          alt=""
        />
      </div>
    </>
  );



  return (
    <div className="info">
      <div className="info__mainarea">
        {imagePosition === "right" ? [Left] : [Right]}
      </div>
    </div>
  );
};

export default AllSections;