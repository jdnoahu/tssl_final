import React,{useEffect,useState} from 'react';

import Navigation from '../navigation';
import ContactForm from '../forms/contact_form';
import Footer from "../footer";

import ContactHeroImg from "../photos/contact_hero.jpg";


export default function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="blog_wrapper">
            <Navigation />
            <div className="hero_image">
                <img src={ContactHeroImg} />
            </div>
            <div className="page_title">Contact</div>

            <div><ContactForm /> </div>

            <div><Footer /></div>

        </div>

    )
}