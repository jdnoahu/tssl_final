import React,{useEffect,useState} from 'react';
import NewMemberForm from '../forms/new_member_form'
import LoginForm from '../forms/login_form';
import Footer from "../footer";

import Navigation from '../navigation';
import { LoremIpsum } from 'react-lorem-ipsum';

import LoginHeroImg from "../photos/login_hero.jpg";

export default function Login() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="login_wrapper">
            <Navigation />
            <div className="hero_image">
                <img src={LoginHeroImg} />
            </div>
            <div className="page_title">Login</div>
            <div className="login_page_forms">
                <NewMemberForm />
                <LoginForm />
            </div>
            <div><Footer /></div>
        </div>
    )
}