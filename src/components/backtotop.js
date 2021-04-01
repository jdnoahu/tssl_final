import React, { Component } from 'react'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';

export default class ScrollToTop extends Component {
    render() {
        return (
            <div className="home_top">
                <Link
                    activeClass="active"
                    to="hometop"
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
                    <FontAwesomeIcon icon={faArrowCircleUp} />
                </Link>
            </div>
        )
    }
}
