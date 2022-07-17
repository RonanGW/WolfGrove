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
                var starTwo = skills.level.map(function(level) {
                    if (parseInt(skills.level) >= 2)
                        return <AiFillStar />
                    else
                        return <AiOutlineStar />
                })
                var starThree = skills.level.map(function (level) {
                    if (parseInt(skills.level) >= 3)
                        return <AiFillStar />
                    else
                        return <AiOutlineStar />
                })
                var starFour = skills.level.map(function (level) {
                    if (parseInt(skills.level) >= 4)
                        return <AiFillStar />
                    else
                        return <AiOutlineStar />
                })
                var starFive = skills.level.map(function (level) {
                    if (parseInt(skills.level) >= 5)
                        return <AiFillStar />
                    else
                        return <AiOutlineStar />
                })
                return <li>
                        <div className="skill-container">
                            <em className="skill-title">{skills.name}</em>
                            <AiFillStar />
                            {starTwo}
                            {starThree}
                            {starFour}
                            {starFive}
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