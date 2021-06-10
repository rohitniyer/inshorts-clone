import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import apikey from "./Data/config";
import "./App.css";
import NewsContent from "./components/NewsContent";

function App() {
  const [categories, setCategories] = useState("general");
  console.log(categories);
  const [news, setNews] = useState([]);
  const [loadMore, setLoadMore] = useState(20);
  console.log("news is", news);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    fetchNews();
  }, [categories, loadMore]);

  const fetchNews = async () => {
    const data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${categories}&pageSize=${loadMore}`
    );
    const response = await data.json();
    console.log(response);
    setNews(response.articles);
    setTotalResults(response.totalResults);
  };

  return (
    <div className="App">
      <Header setCategories={setCategories} />
      <NewsContent
        news={news}
        totalResults={totalResults}
        loadMore={loadMore}
        setLoadMore={setLoadMore}
      />
    </div>
  );
}

export default App;
