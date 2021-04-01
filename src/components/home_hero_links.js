import React, { Component } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


export default class HeroLinks extends Component {
    render() {
        return (

            <div className="home_hero_links">
                <div className="hero_link">
                    <Link activeClass="active"
                        to="finance"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={0}
                        duration={500}
                        delay={50}
                        isDynamic={true}
                        onSetActive={this.handleSetActive}
                        onSetInactive={this.handleSetInactive}
                        ignoreCancelEvents={false}
                    >
                        Finance
</Link>
                </div>
                <div className="hero_link">
                    <Link activeClass="active"
                        to="relationships"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={0}
                        duration={500}
                        delay={50}
                        isDynamic={true}
                        onSetActive={this.handleSetActive}
                        onSetInactive={this.handleSetInactive}
                        ignoreCancelEvents={false}
                    >
                        Relationships
</Link>
                </div>
                <div className="hero_link">
                    <Link activeClass="active"
                        to="employment"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={0}
                        duration={500}
                        delay={50}
                        isDynamic={true}
                        onSetActive={this.handleSetActive}
                        onSetInactive={this.handleSetInactive}
                        ignoreCancelEvents={false}
                    >
                        Employment
</Link>
                </div>
                <div className="hero_link">
                    <Link activeClass="active"
                        to="spirituality"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={0}
                        duration={500}
                        delay={50}
                        isDynamic={true}
                        onSetActive={this.handleSetActive}
                        onSetInactive={this.handleSetInactive}
                        ignoreCancelEvents={false}
                    >
                        Spirituality
</Link>
                </div>
                <div className="hero_link">
                    <Link activeClass="active"
                        to="health"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={0}
                        duration={500}
                        delay={50}
                        isDynamic={true}
                        onSetActive={this.handleSetActive}
                        onSetInactive={this.handleSetInactive}
                        ignoreCancelEvents={false}
                    >
                        Health
</Link>
                </div>
            </div>
        )
    }
}
