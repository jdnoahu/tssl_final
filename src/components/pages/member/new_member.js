import React from 'react';
import Navigation from '../../../components/navigation'
import NewMemberHeroImg from '../../photos/new_member_hero.jpg';
import Footer from '../../../components/footer';

export default function Member() {
    return (
        <div className="new_member_wrapper">
            <Navigation />
            <div className="hero_image">
                <img src={NewMemberHeroImg} />
            </div>
            <Footer />
        </div>
    )
}