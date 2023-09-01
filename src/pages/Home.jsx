import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Section from "../components/WhyEasyBank";
import LatestArticle from "../components/Article";
import AllArticle from "../components/AllArticle";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Section />
      <LatestArticle />
      <AllArticle/>
    </div>
  );
};

export default Home;
