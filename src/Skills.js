import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import './App.css';

class Skills extends Component {

    /* Direct to another page */
    Redirect = (link) => {
        window.location.assign(link);
    }

    render() {

        if (this.props.data) {
            var skills = this.props.data.skills.map(function (skills) {
                return <li className="skill-bar">
                        <div className="skill-container">
                            <em className="skill-title">{skills.name}</em>
                            <StarRatingComponent
                            name="rate1"
                            starCount={5}
                            value={parseInt(skills.level)}
                            starColor={"Red"}
                            emptyStarColor={"green"}
                        />
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