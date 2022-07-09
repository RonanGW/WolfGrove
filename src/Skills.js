import React, { Component } from 'react';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import './App.css';

class Skills extends Component {

    /* Direct to another page */
    Redirect = (link) => {
        window.location.assign(link);
    }

    render() {

        if (this.props.data) {
            var skills = this.props.data.skills.map(function (skills) {
                var percent = skills.level + "%";
                var r = 100 - parseInt(skills.level);
                var remainder = r.toString() + "%";
                return <li>
                        <div className="skill-container">
                            <em className="skill-title">{skills.name}</em>
                            <div className="bar-container">
                                <div style={{ width: percent, backgroundColor: "black", borderRadius: "3px 0 0 3px"}} />
                                <div style={{ width: remainder, backgroundColor: "grey", borderRadius: "3px 0 0 3px"}} />
                            </div>
                        </div>
                    </li>
            })
        }

        return (
            <div className="Skills">
                <div className="Section-Header">
                    <div className="Section-Header-Alignment">
                        <h1 className="Section-Title-Line">
                            <div className="SectionNameLine" />
                            Skills
                            <div className="SectionNameLine" />
                        </h1>
                    </div>
                </div>
                <div className="Skill-bars-container">
                    <div className="bars">
                        <ul>
                            {skills}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;