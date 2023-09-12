import React from "react";
import styled from "styled-components";
import Blog from "./Blog";

const LastArticle = () => {
  return (
    <Article>
      <section className="container container_2">
        <h1>Latest Articles</h1>
        <Blog />
      </section>
    </Article>
  );
};

export default LastArticle;

let Article = styled.div`
  background-color: hsl(220, 16%, 96%);

  h1 {
    text-align: center;
    padding: 40px 0 60px 0;
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
    padding: 20px;
    background-color: white;
    border-radius: 0 0 10px 10px;

    margin-top: -5px;

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
      width: 48%;
    }
    img {
      height: 200px;
    }

    .header {
      font-size: 12px !important;
    }
    .word {
      font-size: 12px !important;
    }
  }

  @media (min-width: 900px) {
    .all-article {
      width: 24%;
    }
  }
`;
