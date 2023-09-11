import React from "react";
import styled from "styled-components";
import Logo from "../assets/image/logo.svg";
import Facebook from "../assets/image/icon-facebook.svg";
import Youtube from "../assets/image/icon-youtube.svg";
import Twitter from "../assets/image/icon-twitter.svg";
import Pinterest from "../assets/image/icon-pinterest.svg";
import Instagram from "../assets/image/icon-instagram.svg";

const FooterBank = () => {
  return (
    <Footer>
      <div className="footer container_2">
        <div className="footer-list">
          <div className="footerImgSocial">
            <div className="footer-img">
              <img src={Logo} alt="" />
            </div>
            <div className="footer-social">
              <span>
                <img src={Facebook} alt="" />
              </span>
              <span>
                <img src={Youtube} alt="" />
              </span>
              <span>
                <img src={Twitter} alt="" />
              </span>
              <span>
                <img src={Pinterest} alt="" />
              </span>
              <span>
                <img src={Instagram} alt="" />
              </span>
            </div>
          </div>

          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Blog</li>
          </ul>
          <ul>
            <li>Careers</li>
            <li>Support</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="btnCopyright">
          <button>Request Invite</button>
          <p className="copyright">ⓒ Easybank. All Rights Reserved</p>
        </div>
      </div>
    </Footer>
  );
};

export default FooterBank;

let Footer = styled.div`
  // background-color: hsl(233, 26%, 24%);
  background-color: Black;
  color: hsl(0, 0%, 100%);
  text-align: center;
  padding: 40px 0;

  .footer-img {
    img {
      width: 200px;
    }
  }

  .footer-social {
    margin: 30px 0;
    span {
      img {
        width: 30px;
        margin: 0 12px;
      }
    }
  }
  ul {
    li {
      margin: 20px 0;

      &:hover {
        color: hsl(136, 65%, 51%);
      }
    }
  }

  .btnCopyright {
    button {
      padding: 15px 30px;
      border-radius: 26px;
      font-size: 16px;
      border: 1px;
      background-color: hsl(136, 65%, 51%);
      color: white;
      margin: 25px 0;

      &:hover {
        background-color: blue;
      }
    }
    .copyright {
      color: hsl(0, 0%, 98%) !important;

      &:hover {
        color: hsl(136, 65%, 51%) !important;
      }
    }
  }

  @media (min-width: 912px) {
    .footer {
      display: flex;
      justify-content: space-between;
    }

    .copyright {
      font-size: 12px;
    }
    .btnCopyright {
      width: 20%;
      text-align: end;
      button {
        padding: 10px 20px;
        border-radius: 26px;
        font-size: 10px;
      }
    }
    .footer-list {
      display: flex;
      justify-content: space-between;
      width: 50%;
      align-items: center;
    }
    li {
      font-size: 10px;
    }
    .footer-img img {
      width: 120px;
    }
    .footer-social span img {
      width: 20px;
    }
    .footer-social {
      margin-bottom: 0;
    }
  }
`;
