import React, { Component } from 'react';
import { Link } from 'react-scroll'
import './App.css';
import Intro from './Intro.js';
import About from './About.js';
import Resume from './Resume.js';
import Footer from './Footer.js';
import Portfolio from './Portfolio.js';
import Testimonials from './Testimonials.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* Header Bar */}
                <header className="App-header">
                    <div>
                        <h1>WolfGrove</h1>
                        {/*Icon*/}
                    </div>
                    <div className="header-button">
                        <Link className="header-button" to="Intro" spy={true} smooth={true} offset={-120}>Intro</Link>
                        <Link className="header-button" to="About" spy={true} smooth={true} offset={-95}>About</Link>
                        <Link className="header-button" to="Resume" spy={true} smooth={true}>Resume</Link>
                        <Link className="header-button" to="Portfolio" spy={true} smooth={true}>Portfolio</Link>
                        <Link className="header-button" to="Testimonials" spy={true} smooth={true}>Testimonials</Link>
                    </div>
                </header>
                {/* Section Components */}
                <Intro />
                <About />
                <Resume />
                <Portfolio />
                <Testimonials />
                <Footer />
            </div>
        );
    }
}

export default App;
