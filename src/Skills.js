import React, { Component } from 'react';
import './App.css';

class Skills extends Component {

    /* Direct to another page */
    Redirect = (link) => {
        window.location.assign(link);
    }

    render() {

        if (this.props.data) {
            var skills = this.props.data.skills.map(function (skills) {
                var className = 'bar-expand ' + skills.name.toLowerCase();
                return <li key={skills.name}>
                        <span style={{ width: skills.level }} className={className}></span>
                        <em>{skills.name}</em>
                       </li>
            })
        }

        return (
            <div className="Skills">
                <div className="Section-Header">
                    <div className="Section-Header-Alignment">
                        <h1>Skills</h1>
                        <div className="HorizontalLine" />
                    </div>
                </div>
                <div className="Skill-bars-container">
                    <div className="bars">
                        <ul className="skills">
                            {skills}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;