import React, { Component } from 'react';
import './App.css';

class Portfolio extends Component {

    Redirect = (link) => {
        window.location.assign(link);
    }

    render() {
        return (
            <div className="Portfolio">
                <h1>Portfolio</h1>
                <div className="Portfolio-Content">
                    <div className="Project-Button-Container" >
                        <button className="Project-Button" onClick={this.Redirect.bind(this, "")}>WolfGrove</button>
                    </div>
                    <div className="Project-Button-Container" >
                        <button className="Project-Button" style={{ backgroundColor: "#18191A" }} onClick={this.Redirect.bind(this, "https://github.com/pcdslab/PHYNGSD")}>PhyNGSD</button>
                    </div>
                    <div className="Project-Button-Container" >
                        <button className="Project-Button" onClick={this.Redirect.bind(this, "https://github.com/langstonhowley/seminar-webpage")}>Bio-Loss</button>
                    </div>
                    <div className="Project-Button-Container" >
                        <button className="Project-Button" style={{ backgroundColor: "#DFEAE2", color: "#18191A" }} onClick={this.Redirect.bind(this, "https://github.com/GenesisMM/TIPO")}>TIPO</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;