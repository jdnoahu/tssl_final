import React,{useEffect,useState} from 'react';

import Navigation from '../navigation';
import { LoremIpsum } from 'react-lorem-ipsum';
import Footer from "../footer";

import BlogHeroImg from "../photos/blog_hero.jpg";
import BlogPreviewImage from "../photos/blog_preview.jpg"
import axios from 'axios'


export default function Blog() {
    const [blogList, setBlogList] = useState([]);
    useEffect(() => {
        getBlogs();
        window.scrollTo(0, 0)
      }, [])

    function getBlogs() {
        axios.get("https://tssl-backend.herokuapp.com/blogs",

            { withCredentials: false }
        ).then(response => {
            console.log("response", response);
            var arr = response.data;
            console.log("response", arr);
            // arr.forEach(element => {
            //     arr.push(element)
            // });
            
            setBlogList(arr);
            
        })
            .catch(error => {
                console.log(error)
            });

    }
    return (
        <div className="blog_wrapper">
            <Navigation />
            <div className="hero_image">
                <img src={BlogHeroImg} />
            </div>
            <div className="page_title">Blog</div>
            <div className="blog_preview_wrapper">
            {blogList.map((item, index) => (
                <div className="blog_preview_container">
                    <div className="blog_preview_image"><img src={BlogPreviewImage} /></div>
                    <div className="blog_preview_title">{item.title}</div>
                    <div className="blog_preview_description">{item.content}</div>
                </div>
                ))}
                {/* <div className="blog_preview_container">
                    <div className="blog_preview_image"><img src={BlogPreviewImage} /></div>
                    <div className="blog_preview_title">Blog Title</div>
                    <div className="blog_preview_description"><LoremIpsum w={1} /></div>
                </div>
                <div className="blog_preview_container">
                    <div className="blog_preview_image"><img src={BlogPreviewImage} /></div>
                    <div className="blog_preview_title">Blog Title</div>
                    <div className="blog_preview_description"><LoremIpsum w={1} /></div>
                </div>
                <div className="blog_preview_container">
                    <div className="blog_preview_image"><img src={BlogPreviewImage} /></div>
                    <div className="blog_preview_title">Blog Title</div>
                    <div className="blog_preview_description"><LoremIpsum w={1} /></div>
                </div>
                <div className="blog_preview_container">
                    <div className="blog_preview_image"><img src={BlogPreviewImage} /></div>
                    <div className="blog_preview_title">Blog Title</div>
                    <div className="blog_preview_description"><LoremIpsum w={1} /></div>
                </div>
                <div className="blog_preview_container">
                    <div className="blog_preview_image"><img src={BlogPreviewImage} /></div>
                    <div className="blog_preview_title">Blog Title</div>
                    <div className="blog_preview_description"><LoremIpsum w={1} /></div>
                </div>
                <div className="blog_preview_container">
                    <div className="blog_preview_image"><img src={BlogPreviewImage} /></div>
                    <div className="blog_preview_title">Blog Title</div>
                    <div className="blog_preview_description"><LoremIpsum w={1} /></div>
                </div>
                <div className="blog_preview_container">
                    <div className="blog_preview_image"><img src={BlogPreviewImage} /></div>
                    <div className="blog_preview_title">Blog Title</div>
                    <div className="blog_preview_description"><LoremIpsum w={1} /></div>
                </div> */}

            </div>
            <div><Footer /></div>

        </div>
    )
}
