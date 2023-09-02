import React from "react";
import articleData from "../assets/json/ArticleData";
import Article from "./Article";
import styled from "styled-components";

const AllArticle = () => {
  return (
    <All>
      <h1>Latest Article</h1>
      {articleData.map((lastarticle) => (
        <Article
          img={lastarticle.img}
          name={lastarticle.name}
          header={lastarticle.header}
          word={lastarticle.word}
        />
      ))}
    </All>
  );
};

export default AllArticle;

let All = styled.div``;
