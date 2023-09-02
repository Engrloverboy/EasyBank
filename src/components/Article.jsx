import React from "react";
import styled from "styled-components";
// import Money from "../assets/image/image-currency.jpg";
// import Restaurant from "../assets/image/icon-restaurant.jpg";
// import Plane from "../assets/image/icon-plane.jpg";
// import Confetti from "../assets/image/icon-confetti.jpg";

const LatestArticle = (props) => {
  return (
    <Article className="lastarticle">
      <img src={props.img} alt="" />
      <small>{props.name}</small>
      <h3>{props.header}</h3>
      <p>{props.word}</p>
    </Article>
  );
};

export default LatestArticle;

let Article = styled.div``;
