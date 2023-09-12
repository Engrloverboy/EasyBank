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
              <span className="hello_pint">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                  <path
                    fill="#fff"
                    d="M10 0C4.478 0 0 4.477 0 10c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.522 0 10-4.477 10-10S15.522 0 10 0z"
                  />
                </svg>
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
  .hello_pint {
    svg {
      path {
        fill: green;
      }
      &:hover {
        path {
          fill: yellow;
        }
      }
    }
  }
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
