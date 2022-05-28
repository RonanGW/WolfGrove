import React, { Component } from 'react';
import './App.css';

class Portfolio extends Component {

    Redirect = (link) => {
        window.location.assign(link);
    }

    render() {
        return (
            <div className="Portfolio">
                <h2>Portfolio</h2>
                <p>I will be making custom descriptions for these projects in time, but at the moment these are links to all my biggest projects of professional nature (i.e not game dev)</p>
                <button onClick={this.Redirect.bind(this, "")}>This page!</button>
                <button onClick={this.Redirect.bind(this, "https://github.com/pcdslab/PHYNGSD")}>PhyNGSD</button>
                <button onClick={this.Redirect.bind(this, "https://github.com/langstonhowley/seminar-webpage")}>Bio-Loss</button>
                <button onClick={this.Redirect.bind(this, "https://github.com/GenesisMM/TIPO")}>TIPO</button>
            </div>
        );
    }
}

export default Portfolio;