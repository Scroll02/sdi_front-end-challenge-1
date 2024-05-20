import React from "react";
import "../App.css";
import authorsData from "../data/authors.json";
import newsData from "../data/news.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";

function news({ day, month, authorId, newsId }) {
  const specificAuthor = authorsData.find((data) => data.id === authorId);
  const specificNews = newsData.find((data) => data.id === newsId);

  const imagePath = specificNews
    ? `/assets/images/${specificNews.image_url}`
    : null;

  return (
    <div className="news-container">
      <div className="heading">
        <div className="image">
          {imagePath ? (
            <img src={imagePath} alt="News" />
          ) : (
            <h2>Author not found</h2>
          )}
        </div>

        <div className="date">
          <h3>
            <span>{day}</span>
            {month}
          </h3>
          <div className="triangle"></div>
        </div>

        <div className="share">
          <FontAwesomeIcon icon={faShareFromSquare} className="shareIcon" />
          <a href="#">SHARE</a>
        </div>
      </div>
      <div className="divider"></div>

      <div className="description">
        {specificAuthor ? (
          <h2>{specificAuthor.name}</h2>
        ) : (
          <h2>Author not found</h2>
        )}

        {specificNews ? (
          <h1>{specificNews.title}</h1>
        ) : (
          <h1>Title not found</h1>
        )}

        {specificNews ? <p>{specificNews.body}</p> : <p>Text not found</p>}

        <a href="#">Read Article</a>
      </div>
    </div>
  );
}

export default news;
