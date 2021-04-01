import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

import { library } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Redirect from "./redirect";
import YTRedirect from "./ytredirect"

library.add(
    faFacebook,
    faInstagram
)



export default class Footer extends Component {
    render() {
        return (
            <div className="footer_wrapper">
                <div className="footer">
                    <div className="footer_line"></div>
                    <div className="footer_container">
                        <div className="social_media_container">
                            <div className="social_text">Let's Get Social!</div>
                            <div className="social_media">
                                <div className="facebook">
                                    <a href="facebook" target="_blank">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                </div>
                                <div className="instagram">
                                    <a href="instagram" target="_blank">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </div>
                                <div className="youtube">
                                    <a href="youtube" target="_blank">
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="footer_nav_links_wrapper">
                            <div className="footer_link">
                                <Link to="/">
                                    Home
                </Link>
                            </div>
                            <div className="footer_link">
                                <Link to="/about">
                                    About
                </Link>
                            </div>
                            <div className="footer_link">
                                <Link to="/blog">
                                    Blog
                </Link>
                            </div>
                            <div className="footer_link">
                                <Link to="/contact">
                                    Contact
                </Link>
                            </div>
                            <div className="footer_link">
                                <Link to="/shop">
                                    Shop
                </Link>
                            </div>
                        </div>
                        <div className="footer_other_links">
                            <div>Privacy Policy</div>
                            <div>Terms  Conditions</div>
                            <div>Business Enquiries</div>
                            <div>Press Enquiries</div>
                        </div>
                    </div>

                    <div className="copyright_wrapper">
                        <div className="copyright">
                            The Simple Sober Life &copy; 2021
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
