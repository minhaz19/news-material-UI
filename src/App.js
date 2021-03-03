import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import './App.css';
import News from './Components/News/News';

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() =>{
    const url ='http://newsapi.org/v2/everything?q=tesla&from=2021-02-03&sortBy=publishedAt&apiKey=3d265edcb19e46c998fe32046d01e8bd';
    fetch(url)
    .then(res => res.json())
    .then(data => setArticles(data.articles))
  },[])
  return (
    <div className="App">
      <Button color="primary">Hello World</Button>
      <h1>Total News: {articles.length}</h1>
      {
        articles.map(article => <News article={article}></News>)
      }
    </div>
  );
}

export default App;
