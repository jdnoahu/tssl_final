import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import ScrollToTop from './backtotop';

import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

export default class navigation extends Component {
    constructor() {
        super();
        this.state={
            redirectValue:"",
            // redirectHome:false,
            // redirectAbout:false,
            // redirectBlog:false,
            // redirectContact:false,
            // redirectLogin:false,

            // redirectEmployment:false,
            // redirectFinance:false,
            // redirectLogin:false,
            // redirectLogin:false,
            // redirectLogin:false,
            // redirectLogin:false,
        }

    }
    redirectNext(redValue) {
        this.setState({redirectValue:redValue})
    }
    render() {
        return (
            
            <div className="navigation_wrapper navbar">
                {/* <ScrollToTop /> */}
                {this.state.redirectValue == "Blog" ? <Redirect to="/blog" /> : null}
                {this.state.redirectValue == "About" ? <Redirect to="/about" /> : null}
                {this.state.redirectValue == "Home" ? <Redirect to="/" /> : null}
                {this.state.redirectValue == "Contact" ? <Redirect to="/contact" /> : null}

                {this.state.redirectValue == "Employment" ? <Redirect to="/pillars/employment" /> : null}
                {this.state.redirectValue == "Finance" ? <Redirect to="/pillars/finance" /> : null}
                {this.state.redirectValue == "Health" ? <Redirect to="/pillars/health" /> : null}
                {this.state.redirectValue == "Relationship" ? <Redirect to="/pillars/relationships" /> : null}
                {this.state.redirectValue == "Spirituality" ? <Redirect to="/pillars/spirituality" /> : null}
                <div className="nav_links">
                    <div className="nav_link_wrapper main_menu">
                        <NavLink exact to="/">
                            Home
                </NavLink>
                    </div>
                    <div className="nav_link_wrapper  main_menu">
                        <NavLink to="/about">
                            About
                </NavLink>
                    </div>
                    <Menu menuButton={<div className="nav_link_wrapper main_menu ">Blog</div>}>
                        
                        <MenuItem href="/blog" className="nav_link_wrapper">All</MenuItem>
                        <MenuItem href="/pillars/employment"  className="nav_link_wrapper">Employment</MenuItem>
                        <MenuItem href="/pillars/finance" className="nav_link_wrapper">Finance</MenuItem>
                        <MenuItem href="/pillars/health" className="nav_link_wrapper">Health</MenuItem>
                        <MenuItem href="/pillars/relationships" className="nav_link_wrapper">Relationship</MenuItem>
                        <MenuItem href="/pillars/spirituality" className="nav_link_wrapper">Spirituality</MenuItem>
                    </Menu>
                    {/* <div className="nav_link_wrapper ">
                        <NavLink className="subnavbtn" to="/blog">
                            Blog
                </NavLink>
                    </div>

                    <div className="subnav-content">
                        <a className="subnavbtn" href="#company">Company</a>
                        <a className="subnavbtn" href="#team">Team</a>
                        <a className="subnavbtn" href="#careers">Careers</a>
                    </div> */}
                    <div className="nav_link_wrapper  main_menu">
                        <NavLink to="/contact">
                            Contact
                </NavLink>
                    </div>
                    {/* <div className="nav_link_wrapper">
                        <NavLink to="/shop">
                            Shop
                </NavLink>
                    </div> */}
                    {/* <Menu onClick={this.redirectNext}  menuButton={<div className="nav_links main_menu">Home</div>}></Menu>
                    <Menu menuButton={<div className="nav_links main_menu">About</div>}></Menu> */}
                    
                    {/* <Menu menuButton={<div className="nav_links main_menu">Contact</div>}></Menu> */}
                    {/* <Menu menuButton={<div className="nav_links main_menu">About</div>}></Menu> */}
                    <div className="nav_link_wrapper">
                        <NavLink to="/login">
                            <div className="login_button">
                                Login
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}


