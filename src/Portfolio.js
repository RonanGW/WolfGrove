import React, { Component } from 'react';
import './App.css';

class Portfolio extends Component {

    /* Default Constructor for About section */
    constructor(props) {
        super(props);

        // Define the initial state:
        this.state = {
            projects: [false, false, false, false],
            ID: 0,
        };
    }

    /* Direct to another page */
    Redirect = (link) => {
        window.location.assign(link);
    }

    render() {

        if (this.props.data) {
            var projects = this.props.data.projects.map(function (projects) {
                var url = "location.href = '" + projects.url + "';"
                return <div className="ProjectContainer">
                    <div className="ProjectBackground">
                        <img src={projects.image} className="ProjectImg"/>
                        <div>
                            <p className="ProjectDescription">{projects.description}</p>
                            <div className="ProjectHeader">
                                <button className="GHLogo" onClick={event => window.location.href = projects.url} ></button>
                                <h2><u>{projects.title}</u></h2>
                            </div>
                        </div>
                    </div>
                </div>
            })
        }

        return (
            <div className="Portfolio">
                <div className="Section-Header">
                    <div className="Section-Header-Alignment">
                        <h1 className="Section-Title-Line">
                            <div className="SectionNameLine" />
                            Portfolio
                            <div className="SectionNameLine" />
                        </h1>
                    </div>
                </div>
                <div className="Portfolio-Content">
                    {projects}
                </div>
            </div>
        );
    }
}

export default Portfolio;