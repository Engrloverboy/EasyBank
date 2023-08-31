import React from "react";
import Intropic from "../assets/image/bg-intro-mobile.svg";
import styled from "styled-components";
import Phone from "../assets/image/image-mockups.png";

const Bannersection = () => {
  return (
    <Banner>
      <div className="phone-banner">
        <img className="intropic" src={Intropic} alt="" />
        <img className=".container_2 phone" src={Phone} alt="" />
      </div>

      <div className="banner-flex">
        <h1>Next generation digital banking</h1>
        <p className="banner-words">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more
        </p>

        <button className="bttn">Request Invite</button>
      </div>
    </Banner>
  );
};

export default Bannersection;

let Banner = styled.div`
margin-bottom: 40px;
text-align: center;
background-color: hsl(0, 0%, 98%);
h1{
  font-size: 44px;
    font-weight: 200;
        margin: 20px 0;
}
.banner-words{
      font-size: 17px;
    margin: 20px 0;
    color: hsl(233, 8%, 62%);
    line-height: 1.7;
}
  .phone-banner {
    position: relative;
  }
  .intropic {
    position: relative;
  }
  .phone {
    position: absolute;
    right: 0;
    top: 0;
  }
  .banner-flex{
    padding: 20px;
  }

  .bttn{
    padding: 15px 37px;
      border-radius: 20px;
      font-size: 15px;
      border: 1px;
      background-color: hsl(136, 65%, 51%);
      color: white;
      margin: 20px;

      &:hover {
        background-color: blue;
  }
`;
