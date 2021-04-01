import React,{useEffect,useState} from 'react';

import Navigation from '../navigation';
import { LoremIpsum } from 'react-lorem-ipsum';
import Footer from "../footer";

import AboutHeroImg from "../photos/about_hero.jpg";
import About1 from "../photos/about_page1.jpg";
import About2 from "../photos/about_page2.jpg";

export default function About() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="about_wrapper">
            <Navigation />
            <div className="hero_image">
                <img src={AboutHeroImg} />
            </div>
            <div className="page_title">About</div>
            <div className="about_body">
                <div className="about_section_one">
                    <div className="about_image_one"><img src={About1}></img></div>
                    <div className="about_text_one"><LoremIpsum p={2} /></div>
                </div>
                <div className="about_text_two"><LoremIpsum p={5} /></div>
                <div className="about_image_two"><img src={About2}></img></div>
                <div className="about_text_three"><LoremIpsum p={2} /></div>
            </div>
            <div><Footer /></div>
          
        </div>
    )
}