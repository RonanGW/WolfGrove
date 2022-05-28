import React, { Component } from 'react';
import { Link } from 'react-scroll'
import './App.css';
import Intro from './Intro.js';
import Bio from './Bio.js';
import Education from './Education.js';
import Resume from './Resume';
import Footer from './Footer.js';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div>
                        <h1>WolfGrove</h1>
                        {/*Icon*/}
                    </div>
                    <Link to="Intro" spy={true} smooth={true}>Intro</Link>
                    <Link to="Bio" spy={true} smooth={true}>Bio</Link>
                    <Link to="Education" spy={true} smooth={true}>Education</Link>
                    <Link to="Resume" spy={true} smooth={true}>Resume</Link>
                    <Link to="Portfolio" spy={true} smooth={true}>Portfolio</Link>
                    <Link to="Testimonials" spy={true} smooth={true}>Testimonials</Link>
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
