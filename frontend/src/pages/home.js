import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
//import { Spring } from 'react-spring/renderprops'
//import News from '../components/News'
import NewsIdle from '../components/NewsIdle'
//import beach from '../assets/cover.jpg'
import video from '../assets/beach.mp4'

export const Home = () => {
  return (
    <div className="home">
      <section className="showcase">
        <div className="video-container">
          <video autoPlay="autoplay" muted loop="loop" className="myVideo">
            <source className="myVideo" src={video} type="video/mp4" />
          </video>
        </div>
        <div className="video-content">
          <h1>Welcome to Newsy</h1>
          <p>
            This is a website created for you to stay updated on what's
            happening around the world.
            <br />
            Our goal is to let everyone access news from anywhere, anytime for
            free.
          </p>
          <AnchorLink
            className="btn"
            style={{
              textDecoration: 'none',
              color: 'black',
              fontSize: 'smaller',
            }}
            offset={() => 110}
            href="#news"
          >
            Start Here
          </AnchorLink>
        </div>
      </section>
      <section id="news">
        <NewsIdle />
        <br />
      </section>
    </div>
  )
}
