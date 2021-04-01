import React, { Component } from 'react';

import Navigation from '../navigation';
import HeroLinks from "../home_hero_links";
import HomeBody from "../home_body";
import Footer from "../footer";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import home_hero from "../photos/home_hero.jpg";
import ScrollToTop from '../backtotop'
import "./home.css";

export default class App extends Component {
  constructor(props) {
    super(props)
    window.scrollTo(0, 0)
  }
  render() {
    
    return (
      <div className="home_container">
        
        <Navigation />
        <div className="hero_image" id="hometop">
          <img src={home_hero} />
        </div>
        <div className="home_hero_links">
          <HeroLinks />
          
        </div>
        <div className="home_body">
          
          <HomeBody />
        </div>
        <Footer />
      </div>

    );
  };
}
