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
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
          <button className="nav-bttn">Request Invite</button>

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
  nav {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    align-items: center;
    background-color: hsl(0, 0%, 98%);
    position: fixed;
    z-index: 1000;
    width: 100%;

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

  @media (max-width: 911px) {
    nav {
      position: relative;
    }
    nav ul {
      padding: 10px;
      display: block !important;
      position: absolute;
      background-color: hsl(233, 8%, 62%);
      color: black;
      width: 200px;
      top: 20px;
      right: 44px;
      transform: translateX(350px);
      z-index: 1000;
    }
    .nav-bttn{
      display: none;
    }

    .active {
      transform: translateX(0px);
    }
    nav ul li {
      padding: 10px;
      font-size: 16px;
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
