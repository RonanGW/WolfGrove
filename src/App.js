import React, { Component } from 'react';
import { Link } from 'react-scroll'
import './App.css';
import Intro from './Intro.js';
import Bio from './Bio.js';
import Education from './Education.js';
import Resume from './Resume.js';
import Footer from './Footer.js';
import Portfolio from './Portfolio.js';
import Testimonials from './Testimonials.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div>
                        <h1>WolfGrove</h1>
                        {/*Icon*/}
                    </div>
                    <div className="header-button">
                        <Link className="header-button" to="Intro" spy={true} smooth={true}>Intro</Link>
                        <Link className="header-button" to="Bio" spy={true} smooth={true}>Bio</Link>
                        <Link className="header-button" to="Education" spy={true} smooth={true}>Education</Link>
                        <Link className="header-button" to="Resume" spy={true} smooth={true}>Resume</Link>
                        <Link className="header-button" to="Portfolio" spy={true} smooth={true}>Portfolio</Link>
                        <Link className="header-button" to="Testimonials" spy={true} smooth={true}>Testimonials</Link>
                    </div>
                </header>
                <Intro/>
                <Bio />
                <Education />
                <Resume />
                <Portfolio />
                <Testimonials />
                <Footer />
            </div>
        );
    }
}

export default App;
