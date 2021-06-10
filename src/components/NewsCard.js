import React from "react";
import "./NewsCard.css";
const NewsCard = ({ item }) => {
  return (
    <div className="newsCard">
      <div>
        <img
          className="photo"
          src={
            item.urlToImage
              ? item.urlToImage
              : "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png"
          }
          alt={item.title}
        />
      </div>
      <div className="text">
        <div>
          <span className="title">{item.title}</span>
          <br />
          <span className="short">
            <a href={item.url} target="__blank">
              <b>Short</b>
            </a>
            <span>by {item.author ? item.author : "unknown"}</span>
          </span>
        </div>
        <div className="description">
          <div className="news-content">{item.description}</div>

          <span className="readmore">
            Read more at
            <a className="link" href={item.url} target="__blank">
              <b>{item.source.name}</b>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
