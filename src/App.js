import React, { Component } from 'react';
import { Link } from 'react-scroll'
import ReactGA from 'react-ga';
import $ from 'jquery';
import "animate.css/animate.min.css";
import './App.css';
import Intro from './Intro.js';
import About from './About.js';
import Resume from './Resume.js';
import Footer from './Footer.js';
import Portfolio from './Portfolio.js';
import Skills from './Skills.js';
import Testimonials from './Testimonials.js';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            resumeData: {}
        };

        ReactGA.initialize('UA-110570651-1');
        ReactGA.pageview(window.location.pathname);
    }

    getResumeData() {
        $.ajax({
            url: 'resumeData.json',
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({ resumeData: data });
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
                //alert(err);
            }
        });
    }

    componentDidMount() {
        this.getResumeData();
    }

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
                        <Link className="header-button" to="Resume" spy={true} smooth={true}>Experience</Link>
                        <Link className="header-button" to="skills" spy={true} smooth={true}>Skills</Link>
                        <Link className="header-button" to="Portfolio" spy={true} smooth={true}>Portfolio</Link>
                        <Link className="header-button" to="Testimonials" spy={true} smooth={true}>Testimonials</Link>
                    </div>
                </header>
                {/* Section Components */}
                <Intro />
                <About data={this.state.resumeData.main} />
                <Resume data={this.state.resumeData.resume} />
                <Skills data={this.state.resumeData.resume} />
                <Portfolio data={this.state.resumeData.portfolio} />
                <Testimonials />
                <Footer />
            </div>
        );
    }
}

export default App;
