import React,{useEffect,useState} from 'react';

import Navigation from '../navigation';
import { LoremIpsum } from 'react-lorem-ipsum';
import Footer from "../footer";

import ShopHeroImg from "../photos/shop_hero.jpg";
import ShopPreviewImage from "../photos/shop_preview.jpg"

export default function About() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="shop_wrapper">
            <Navigation />
            <div className="hero_image">
                <img src={ShopHeroImg} />
            </div>
            <div className="page_title">Shop</div>
            <div className="shop_preview_wrapper">
                <div className="shop_preview_container">
                    <div className="shop_preview_image"><img src={ShopPreviewImage} /></div>
                    <div className="shop_preview_title">Shop Title</div>
                    <div className="shop_preview_description"><LoremIpsum w={1} /></div>
                </div>
                <div className="shop_preview_container">
                    <div className="shop_preview_image"><img src={ShopPreviewImage} /></div>
                    <div className="shop_preview_title">Shop Title</div>
                    <div className="shop_preview_description"><LoremIpsum w={1} /></div>
                </div>
                <div className="shop_preview_container">
                    <div className="shop_preview_image"><img src={ShopPreviewImage} /></div>
                    <div className="shop_preview_title">Shop Title</div>
                    <div className="shop_preview_description"><LoremIpsum w={1} /></div>
                </div>
                <div className="shop_preview_container">
                    <div className="shop_preview_image"><img src={ShopPreviewImage} /></div>
                    <div className="shop_preview_title">Shop Title</div>
                    <div className="shop_preview_description"><LoremIpsum w={1} /></div>
                </div>
            </div>
            <div><Footer /></div>
        </div>
    )
}