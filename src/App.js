import React, { Component } from 'react';
import './App.css';
import Intro from './Intro.js';
import Bio from './Bio.js';
import Education from './Education.js';
import Footer from './Footer.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Wolf Grove</h1>
                    <h3>Ronan</h3>
                </header>
                <Intro />
                <Bio />
                <Education />
                <Footer />
            </div>
        );
    }
}

export default App;
