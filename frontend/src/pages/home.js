import React from 'react'
import news from '../assets/news.jpg'

export const Home = () => {
    return (
        <div className="pages">
            <h1>NewsApp</h1>
            <img className="assetsImage" alt="Welcoming page" src={news}></img>
        </div>
    )
}