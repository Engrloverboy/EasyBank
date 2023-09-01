import React from "react";
import styled from "styled-components";
import Online from "../assets/image/icon-online.svg";
import Simple from "../assets/image/icon-budgeting.svg";
import Fast from "../assets/image/icon-onboarding.svg";
import API from "../assets/image/icon-api.svg";

const WhyEasyBank = () => {
  return (
    <Section>
      <div className="why container_2">
        <h2 className="choose">Why choose Easybank?</h2>
        <p className="control">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div className="flex-article container_2">
        <div className="article">
          <img className="image" src={Online} alt="" />
          <h2 className="online">Online Banking</h2>
          <p className="words">
            Our modern web and mobile applications allow you to keep track of
            your finances whereever you are in the world.
          </p>
        </div>

        <div className="article">
          <img className="image" src={Simple} alt="" />
          <h2 className="online">Simple Budgeting</h2>
          <p className="words">
            See exactly where your money goes each month. Receive motifications
            when you're close to your hitting limits.
          </p>
        </div>

        <div className="article">
          <img className="image" src={Fast} alt="" />
          <h2 className="online">Fast Onboarding</h2>
          <p className="words">
            We don't do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </div>

        <div className="article">
          <img className="image" src={API} alt="" />
          <h2 className="online">Open API</h2>
          <p className="words">
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default WhyEasyBank;

let Section = styled.div`
  background-color: hsl(0, 0%, 98%);
  padding: 50px 30px;
  text-align: center;

  .choose {
    font-size: 30px;
    font-weight: 200;
    max-width: 200px;
    margin: 20px auto;
  }
  .control,
  .words {
    max-width: 400px;
    line-height: 1.7;
    margin: 20px auto 30px;
    color: hsl(233, 8%, 62%);
    font-size: 17px;
  }
  .image {
    width: 110px;
    margin: 30px 0;
  }
  .online {
    font-size: 30px;
    font-weight: 200;
    margin: 20px 0;
  }

  @media (min-width: 900px) {
    .choose {
      margin: 20px 0;
      text-align: left;
    }
    .control {
      margin: 20px 0;
      text-align: left;
      font-size: 11px;
    }
    .flex-article {
      display: flex;
      justify-content: space-between;
    }
    .article {
      max-width: 20%;
      text-align: left;
    }
    .image {
      width: 50px;
      margin: 20px 0;
    }
    .online {
      font-size: 15px;
    }
    .words {
      font-size: 12px;
    }
  }
`;
