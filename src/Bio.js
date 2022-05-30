import React, { Component } from 'react';
import { saveAs } from "file-saver";
import './App.css';

class Bio extends Component {

    constructor(props) {
        super(props);

        // Define the initial state:
        this.state = {
            highlights: false,
        };
    }

    handleFade = () => {
        // Update our state here...
        this.setState({
            highlights: !this.state.highlights
        })
    };

    DownloadResume = () => {
        saveAs(
            "./RonanWolfe_Resume.pdf",
            "RonanWolfe_Resume.pdf"
        );
    };

    Redirect = (link) => {
        window.location.assign(link);
    }
    
    render() {
        return (
            <div className="Bio">
                <div className="Bio-content">
                    <div className="Bio-item">
                        <h2>About Me</h2>
                        <h5>Name:</h5>
                        <p>Ronan Wolfe</p>
                        <h5>Area:</h5>
                        <p>San Fracisco, Bay Area, CA</p>
                        <h5>Links:</h5>
                        <button title="Download my Resume" className="DLLogo" onClick={this.DownloadResume}></button>
                        <button title="Link to my GitHub" className="GHLogo" onClick={this.Redirect.bind(this, "https://github.com/RonanGW")}></button>
                        <button title="Link to my LinkedIn" className="LILogo" onClick={this.Redirect.bind(this, "https://www.linkedin.com/in/ronan-wolfe/")}></button>
                    </div>
                    <div className="Bio-item">
                        <img src="pfp.jpg" className="Bio-PFP" />
                    </div>
                    <div className="Bio-item">
                        <div className={this.state.highlights ? 'fadeIn' : 'fadeOut'}>
                            <h3>My Story</h3>
                            <p> I'm an aspiring software engineer with the credentials to back up that dream. I grew up in Los Angeles where I took an interest in
                                the life sciences, working as a zookeeper and frequently volunteering for conservation projects. Since 2018 I have traveled
                                around the country and gone to college. I've met people of all kinds and lived in the biggest cities, small towns and everything in
                                between. Feeling well-rounded, I am excitedly building the foundation for a career for myself. I've earned my Bachelor's of Computer Science
                                of which I graduated early cum laude from Kalamazoo College as well as worked in compression algorithm development research to both learn more
                                and prove my aptitude.
                            </p>
                            <button onClick={this.handleFade}>The Highlights</button>
                        </div>
                        <div className={this.state.highlights ? 'fadeOut' : 'fadeIn'}>
                            <h3>The Highlights</h3>
                            <p> - Software Engineer
                                - Data Scientist
                                - Biotech
                            </p>
                            <button onClick={this.handleFade}>My Story</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bio;