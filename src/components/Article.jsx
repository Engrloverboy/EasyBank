import React from "react";
import styled from "styled-components";
import Money from "../assets/image/image-currency.jpg";
import Food from "../assets/image/image-restaurant.jpg";
import Plane from "../assets/image/image-plane.jpg";
import Confetti from "../assets/image/image-confetti.jpg";

const LastArticle = () => {
  return (
    <Article className="container container_2">
      <h1>Latest Articles</h1>
      <div className="flex-article">
        <div className="all-article">
          <div className="image-div">
            <img className="image" src={Money} alt="" />
          </div>
          <div className="down-part">
            <small className="name">By Claire Robinson</small>
            <h4 className="header">
              Receive money in any currency with no fees
            </h4>
            <p className="word">
              The world is getting smaller and we're becoming more mobile. So
              why should you forced to only receive money in a single....
            </p>
          </div>
        </div>

        <div className="all-article">
          <div className="image-div">
            <img className="image" src={Food} alt="" />
          </div>
          <div className="down-part">
            <small className="name">By Wilson Hutton</small>
            <h4 className="header">
              Treat yourself without worrying about money
            </h4>
            <p className="word">
              Our simple budgeting feature allows you to separate out your
              spending and set realistic limits each month. That means you....
            </p>
          </div>
        </div>

        <div className="all-article">
          <div className="image-div">
            <img className="image" src={Plane} alt="" />
          </div>
          <div className="down-part">
            <small className="name">By Wilson Hutton</small>
            <h4 className="header">Take your Easybank card whereever you go</h4>
            <p className="word">
              We want you to enjoy your travels. This is why we don't charge any
              fees on purchases while you're abroad. We'll even show you....
            </p>
          </div>
        </div>

        <div className="all-article">
          <div className="image-div">
            <img className="image" src={Confetti} alt="" />
          </div>

          <div className="down-part">
            <small className="name">By Claire Robinson</small>
            <h4 className="header">
              Our invite-only Beta accounts are now live!
            </h4>
            <p className="word">
              After a lot of hard work by the whole team, we're excited to
              launch our closed beta, It's easy to request an invite through the
              site....
            </p>
          </div>
        </div>
      </div>
    </Article>
  );
};

export default LastArticle;

let Article = styled.div`
  background-color: hsl(220, 16%, 96%);

  h1 {
    text-align: center;
    margin: 40px 0 60px 0;
    font-weight: 200;
  }
  .all-article {
    margin: 40px 0;
    // width: fit-content !important;
  }
  .image {
    border-radius: 10px 10px 0 0;
  }
  .down-part {
    padding: 25px 25px 30px 25px;
    background-color: white;
    border-radius: 0 0 10px 10px;
    height: 200px;

    .name {
      color: hsl(233, 8%, 62%);
      margin: 10px 0;
    }
    .header {
      margin: 10px 0;
      font-size: 24px;
      font-weight: 200;
      max-width: 400px;

      &:hover {
        color: hsl(136, 65%, 51%);
      }
    }
    .word {
      color: hsl(233, 8%, 62%);
      max-width: 450px;
      font-size: 19px;
      font-weight: 200;
      line-height: 1.5;
    }
  }

  @media (min-width: 700px) {
    .flex-article {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    .all-article {
      max-width: 40%;
    }
    .image-div {
      max-width: 277px;
      height: 200px;
    }
    .down-part {
      height: 150px;
    }
    .header {
      font-size: 12px !important;
    }
    .word {
      font-size: 12px !important;
    }
  }
`;
