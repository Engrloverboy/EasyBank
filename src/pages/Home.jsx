import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Section from "../components/WhyEasyBank";
import AllArticle from "../components/Article";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Section />
      <AllArticle />
    </div>
  );
};

export default Home;
