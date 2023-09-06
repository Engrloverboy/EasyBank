import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Section from "../components/WhyEasyBank";
import Article from "../components/Article";
import Footer from "../components/FooterBank";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Section />
      <Article />
      <Footer />
    </div>
  );
};

export default Home;
