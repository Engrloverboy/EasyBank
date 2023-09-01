import React from 'react'
import articleData from '../assets/json/ArticleData';
// import Article from "./Article";
import styled from "styled-components"

const AllArticle = () => {
  return (
    <All>
      <h1>Latest Article</h1>
      {articleData.map((article) => (
        <Article
        img={article.img}
        name={article.name}
        header={article.header}
        word={article.word}
        />
      ))}
    </All>
  );
};

export default AllArticle;

let All = styled.div`

`;

