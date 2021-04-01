import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { LoremIpsum } from 'react-lorem-ipsum';

import home_mission from "./photos/home_mission.jpg";
import home_finance from "./photos/home_finance.jpg";
import home_relationships from "./photos/home_relationships.jpg";
import home_employment from "./photos/home_employment.jpg";
import home_spirituality from "./photos/home_spirituality.jpg";
import home_health from "./photos/home_health.jpg";

export default class HomeBody extends Component {
    render() {
    return(
            <div className = "home_body" >
            <div className="home_mission">
                <div className="home_mission_photo">
                    <img src={home_mission} />
                </div>
                <div className="home_mission_text">
                    <LoremIpsum p={2} />
                </div>
            </div>
            <div className="finance_header" id="finance">
                <div className="header">
                    <h1>Finance</h1>
                </div>
            </div>
            <div className="home_finance">
                <div className="home_finance_text">
                    <div className="home_text">
                        <LoremIpsum p={2} />
                    </div>
                    <div className="finance_button">
                        <div className="button">
                            <Link to="/pillars/finance">
                                Finance
                        </Link>
                        </div>
                    </div>
                </div>
                <div className="home_finance_photo">
                    <div className="finance_photo">
                        <img src={home_finance} />
                    </div>
                </div>

            </div>
            <div className="relationships_header" id="relationships">
                <div className="header">
                    <h1>Relationships</h1>
                </div>
            </div>
            <div className="home_relationships">
                <div className="home_relationships_photo">
                    <img src={home_relationships} />
                </div>
                <div className="home_relationships_text">
                    <LoremIpsum p={2} />
                    <div className="relationships_button">
                        <Link to="/pillars/relationships">
                            <div className="button">
                                Relationships
                                </div>
                        </Link>
                    </div>
                </div>


            </div>
            <div className="employment_header" id="employment">
                <div className="header">
                    <h1>Employment</h1>
                </div>
            </div>
            <div className="home_employment">
                <div className="home_employment_text">
                    <LoremIpsum p={2} />
                    <div className="employment_button">
                        <Link to="/pillars/employment">
                            <div className="button">
                                Employment
                                </div>
                        </Link>
                    </div>
                </div>
                <div className="home_employment_photo">
                    <img src={home_employment} />
                </div>
            </div>

            <div className="spirituality_header" id="spirituality">
                <div className="header">
                    <h1>Spirituality</h1>
                </div>
            </div>
            <div className="home_spirituality">
                <div className="home_spirituality_photo">
                    <img src={home_spirituality} />
                </div>
                <div className="home_spirituality_text">
                    <LoremIpsum p={2} />
                    <div className="spirituality_button">
                        <Link to="/pillars/spirituality">
                            <div className="button">
                                Spirituality
                                </div>
                        </Link>
                    </div>
                </div>

            </div>

            <div className="health_header" id="health">
                <div className="header">
                    <h1>Health</h1>
                </div>
            </div>
            <div className="home_health">

                <div className="home_health_text">
                    <LoremIpsum p={2} />
                    <div className="health_button">
                        <Link to="/pillars/health">
                            <div className="button">
                                Health
                                </div>
                        </Link>
                    </div>
                </div>
                <div className="home_health_photo">
                    <img src={home_health} />
                </div>


            </div>

            </div>
        )
    }
}
