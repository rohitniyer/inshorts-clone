import { Button, Container } from "@material-ui/core";
import React from "react";
import appstore from "/Users/rahuliyer/Desktop/projects/newsapp/src/images/appstore.png";
import playstore from "/Users/rahuliyer/Desktop/projects/newsapp/src/images/playstore.png";
import "./NewsContent.css";
import NewsCard from "./NewsCard";

const NewsContent = ({ news, setLoadMore, totalResults, loadMore }) => {
  const styles = {
    backgroundColor: "white",
    color: "black",
  };
  return (
    <Container maxWidth="lg" className="holder">
      <div className="newsContentContainer">
        <div className="banner">
          <span>
            For the best experience use inshorts app on your smartphone
          </span>
          <img src={appstore} alt="appstore" />
          <img src={playstore} alt="playstore" />
        </div>
        <div className="newscontent">
          {news.map((item, index) => {
            return <NewsCard item={item} key={index} />;
          })}
        </div>
        {loadMore < totalResults ? (
          <>
            <br />

            <Button
              style={styles}
              variant="contained"
              onClick={() => setLoadMore(totalResults)}
            >
              Load More
            </Button>
          </>
        ) : (
          ""
        )}
      </div>
    </Container>
  );
};

export default NewsContent;
