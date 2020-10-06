import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
//import { Spring } from 'react-spring/renderprops'
import News from '../components/News'
//import NewsIdle from '../components/NewsIdle'
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
        <News />
        <br />
      </section>
    </div>
  )
}

/*  <div className="pages">
            <h1>NewsApp</h1>
            <img className="assetsImage" alt="Welcoming page" src={news}></img>
        </div> */

/*<section id="about">
          <h1 id="about">About</h1>
          <p>
            This is a website created for you to stay updated on what's
            happening around the world. Our goal is to let everyone access news
            from anywhere anytime for free. Hope you enjoy your experience.
          </p>
          <h2>Follow Me On Social Media</h2>

          <div className="social">
            <a
              href="https://github.com/benjambo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github fa-3x"></i>
            </a>
            <a
              href="https://linkedin.com/in/benschelling"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin fa-3x"></i>
            </a>
            <a
              target="_blank"
              href="https://instagram.com/benjaminjoshin"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram fa-3x" aria-hidden="true" />
            </a>
            <a
              target="_blank"
              href="https://facebook.com/beni.schelling"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-square fa-3x" aria-hidden="true" />
            </a>
          </div>
        </section>*/
