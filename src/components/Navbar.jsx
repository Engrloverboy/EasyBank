import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/image/logo.svg";
import hamburger from "../assets/image/icon-hamburger.svg";

const Easynavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <Navbar>
      <div className="overflow">
        <nav className="container_2 container_mobile">
          <img src={logo} alt="" />
          <div className={`wrap-nav-btn ${menuOpen ? "active" : ""}`}>
            <ul className="nav-links">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
            <div>
              <button className="nav-bttn">Request Invite</button>
            </div>
          </div>

          <div className="hamburger" onClick={toggleMenu}>
            <img src={hamburger} alt="" />
          </div>
        </nav>
      </div>
    </Navbar>
  );
};

export default Easynavbar;

let Navbar = styled.div`
background-color: hsl(0, 0%, 98%);
position: fixed;
    z-index: 1000;
    width: 100%;
  nav {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    align-items: center;
    background-color: hsl(0, 0%, 98%);
    

    ul {
      display: flex;
      justify-content: space-between;
      width: 250px;
      font-size: 12px;
    }
    li {
      color: hsl(233, 8%, 62%);
      &:hover {
        color: hsl(233, 26%, 24%);
        text-decoration: underline;
      }
    }
  }
  .overflow {
    overflow: hidden;
  }
  nav img {
      width: 150px;
    }
    .hamburger img {
      width: 50px;
    }

    .nav-bttn {
      padding: 10px 20px;
      border-radius: 20px;
      font-size: 12px;
      border: 1px;
      background-color: hsl(136, 65%, 51%);
      color: white;

      &:hover {
        background-color: blue;
      }
      }
    }
    .wrap-nav-btn {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 60%;
  }

  @media (max-width: 911px) {
    .wrap-nav-btn {
      padding: 10px;
      display: block !important;
      position: absolute;
      background-color: hsl(233, 8%, 62%);
      width: 200px;
      top: 66px;
      right: 0;
      transform: translateX(350px);
      z-index: 1000;
    }
    .nav-links {
      display: block !important;
    }

    .active {
      transform: translateX(0px);
    }
    nav ul li {
      padding: 10px;
      font-size: 16px;
      color: black !important;
    }
    .container_mobile {
      max-width: 850px;
      margin: 0 auto;
      padding: 20px;
    }
  }

  @media (min-width: 912px) {
    .hamburger {
      display: none;
    }
  }
`;
