import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../../navigation';
import Footer from "../../footer";
import { LoremIpsum } from 'react-lorem-ipsum';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';


import FinanceHeroImage from "../../photos/finance_hero.jpg";
import PillarPreviewImage from "../../photos/blog_preview.jpg";
import PillarImage from "../../photos/finance_page.jpg";
import axios from 'axios'


export default function Finance() {
    const [blogList, setBlogList] = useState([]);
    useEffect(() => {
        getBlogs();
        window.scrollTo(0, 0)
    }, [])

    function getBlogs() {
        axios.get("http://127.0.0.1:5000/blogs",

            { withCredentials: false }
        ).then(response => {
            console.log("response", response);
            var arr = response.data;
            console.log("response", arr);
            var filteredData = arr.filter(item => item.category === "Finance")
            console.log("response", filteredData);
            // arr.forEach(element => {
            //     arr.push(element)
            // });

            setBlogList(filteredData);

        })
            .catch(error => {
                console.log(error)
            });

    }
    return (
        <div className="finance_wrapper">
            <Navigation />
            <div className="hero_image">
                <img src={FinanceHeroImage} />
            </div>
            <div className="page_title">Finance</div>
            <div className="pillar_color_bar"></div>
            <div className="right_arrow_wrapper">
                <div className="right_arrow_container">

                    {/* <div className="right_arrow">
                        <Link to="./relationships">
                            <FontAwesomeIcon icon={faArrowCircleRight} />
                        </Link>
                    </div>
                    <div className="right_arrow_text">
                        Relationships
                        </div> */}
                </div>
            </div>
            <div className="pillar_body_wrapper">
                <div className="pillar_section_one">
                    <div className="pillar_section_one_image">
                        <img src={PillarImage} />
                    </div>
                    <div className="pillar_text_one">
                        <LoremIpsum p={2} />
                    </div>
                </div>
                <div className="pillar_section_two">
                    <LoremIpsum p={4} />
                </div>
                <div className="pillar_blog_section">
                    {blogList.map((item, index) => (
                        <div className="pillar_preview_container">
                            <div className="pillar_preview_image"><img src={PillarPreviewImage} /></div>
                            <div className="pillar_preview_title">{item.title}</div>
                            <div className="pillar_preview_description">{item.content}</div>
                        </div>
                    ))}
                </div>
                <div><Footer /></div>
            </div>

        </div>
    )
}
