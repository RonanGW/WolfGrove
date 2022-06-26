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
                var percent = skills.level + "%";
                var r = 100 - parseInt(skills.level);
                var remainder = r.toString() + "%";
                return <li>
                        <div style={{ display: "flex", flexDirection: "column", marginBottom: "36px" }}>
                            <em>{skills.name}</em>
                            <div style={{ display: "flex", flexDirection: "row", height: "42px" }}>
                                <div style={{ width: percent, backgroundColor: "black", borderRadius: "3px 0 0 3px"}} />
                                <div style={{ width: remainder, backgroundColor: "grey", borderRadius: "3px 0 0 3px"}} />
                            </div>
                        </div>
                    </li>
                //var className = 'bar-expand ' + skills.name.toLowerCase();
                //return <li key={skills.name}>
                //        <span style={{ width: skills.level }} className={className}></span>
                //        <em>{skills.name}</em>
                //       </li>
            })
        }

        return (
            <div className="Skills">
                <div className="Section-Header">
                    <div className="Section-Header-Alignment">
                        <h1 style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <div className="SectionNameLine" />
                            Skills
                            <div className="SectionNameLine" />
                        </h1>
                    </div>
                </div>
                <div className="Skill-bars-container">
                    <div className="barz" style={{ width: "70%"}}>
                        <ul className="skills" style={{ listStyle: "none"}}>
                            {skills}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;