import React from "react";
import Intropic from "../assets/image/bg-intro-mobile.svg";
import styled from "styled-components";
import Phone1 from "../assets/image/image-mockups.png";
import Phone2 from "../assets/image/image-mockups.png";
import Introdesktop from "../assets/image/bg-intro-desktop.svg";

const Bannersection = () => {
  return (
    <Banner className="container_2">
      <div className="phone-banner">
        <img className="intropic" src={Intropic} alt="" />
        <img className="container_2 phone1" src={Phone1} alt="" />
      </div>
      <div className="desktop-flex">
        <div className="banner-flex">
          <h1>Next generation digital banking</h1>
          <p className="banner-words">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more
          </p>

          <button className="bttn">Request Invite</button>
        </div>

        <div className="desktop-banner">
          <img className="introdesktop" src={Introdesktop} alt="" />
          <img className="container_2 phone2" src={Phone2} alt="" />
        </div>
      </div>
    </Banner>
  );
};

export default Bannersection;

let Banner = styled.div`
  margin-bottom: 40px;
  text-align: center;
  // background-color: hsl(0, 0%, 98%);
  h1 {
    font-size: 44px;
    font-weight: 200;
    margin: 20px auto;
    width: 329px;
  }
  .banner-words {
    font-size: 17px;
    margin: 20px auto;
    max-width: 400px;
    color: hsl(233, 8%, 62%);
    line-height: 1.7;
  }
  .phone-banner {
    position: relative;
  }
  .intropic {
    position: relative;
  }
  .phone1 {
    position: absolute;
    right: 0;
    bottom: 100px;
  }
  .banner-flex {
    padding: 20px;
  }

  .bttn {
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
  }

  @media (min-width: 912px) {
    .phone-banner {
      display: none;
    }
    .phone2 {
      width: 500px;
      position: absolute;
      right: 0;
    }
    .banner-flex {
      text-align: left;
      padding: 0;

      .bttn {
        margin: 0;
      }
    }
    .desktop-flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  @media (max-width: 912px) {
    .desktop-banner {
      display: none;
    }
  }
`;
