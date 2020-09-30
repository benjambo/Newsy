import React, { useEffect, useState } from 'react'
import news from '../assets/news.jpg'

const api = {
  key: '1147083ab9a3466d9332ac26b5a5c2d0',
  base: 'https://api.openweathermap.org/data/2.5/',
}

export const News = () => {
    const [news, setNews] = useState([])
    const [newFilter, setNewFilter] = useState('')

     useEffect(() => {
       fetch('https://api.citybik.es/v2/networks/citybikes-helsinki')
         .then((res) => res.json())
         .then((res) => setNews(res.network.stations))
     }, [])

    const NewsAPI = require('newsapi');
    const newsapi = new NewsAPI('1147083ab9a3466d9332ac26b5a5c2d0');
    // To query /v2/top-headlines
    // All options passed to topHeadlines are optional, but you need to include at least one of them
    newsapi.v2.topHeadlines({
        sources: 'bbc-news,the-verge',
        q: 'bitcoin',
        category: 'business',
        language: 'en',
        country: 'us'
    }).then(response => {
        console.log(response);
        /*
          {
            status: "ok",
            articles: [...]
          }
        */
    });
    // To query /v2/everything
    // You must include at least one q, source, or domain
    newsapi.v2.everything({
        q: 'bitcoin',
        sources: 'bbc-news,the-verge',
        domains: 'bbc.co.uk, techcrunch.com',
        from: '2017-12-01',
        to: '2017-12-12',
        language: 'en',
        sortBy: 'relevancy',
        page: 2
    }).then(response => {
        console.log(response);
        /*
          {
            status: "ok",
            articles: [...]
          }
        */
    });
    // To query sources
    // All options are optional
    newsapi.v2.sources({
        category: 'technology',
        language: 'en',
        country: 'us'
    }).then(response => {
        console.log(response);
        /*
          {
            status: "ok",
            sources: [...]
          }
        */
    });
    return (
        <div className="pages">
            <h1>NewsApp</h1>
            <img className="assetsImage" alt="Welcoming page" src={news}></img>
        </div>
    )
}
