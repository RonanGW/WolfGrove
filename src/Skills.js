import React, { Component } from 'react';
import './App.css';

class Skills extends Component {

    /* Direct to another page */
    Redirect = (link) => {
        window.location.assign(link);
    }

    render() {
        return (
            <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ display: "flex", alignItems: "center", flexDirection: "column", }}>
                    <h1>Skills</h1>
                    <div className="HorizontalLine" />
                </div>
                </div>
            </div>
        );
    }
}

export default Skills;