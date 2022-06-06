import React, { Component } from 'react';
import { saveAs } from "file-saver";
import './App.css';

class About extends Component {
    
    /* Default Constructor for About section */
    constructor(props) {
        super(props);

        // Define the initial state:
        this.state = {
            highlights: false,
        };
    }

    /* Handle swap between highlights and story sections */
    handleFade = () => {
        // Update our state here...
        this.setState({
            highlights: !this.state.highlights
        })
    };

    /* Function for download resume button */
    DownloadResume = () => {
        saveAs(
            "./RonanWolfe_Resume.pdf",
            "RonanWolfe_Resume.pdf"
        );
    };

    /*s Direct to another page */
    Redirect = (link) => {
        window.location.assign(link);
    }

    /* About Display */
    render() {
        return (
            <div className="About">
                <div className="About-content">
                    <div className="About-Left">
                        <div className="About-item">
                            <h1>About Me</h1>
                            <h5>Name:</h5>
                            <p>Ronan Wolfe</p>
                            <h5>Area:</h5>
                            <p>San Fracisco, Bay Area, CA</p>
                            <h5>Links:</h5>
                            <button title="Download my Resume" className="DLLogo" onClick={this.DownloadResume}></button>
                            <button title="Link to my GitHub" className="GHLogo" onClick={this.Redirect.bind(this, "https://github.com/RonanGW")}></button>
                            <button title="Link to my LinkedIn" className="LILogo" onClick={this.Redirect.bind(this, "https://www.linkedin.com/in/ronan-wolfe/")}></button>
                        </div>
                        <div className="About-item">
                            <img src="pfp.jpg" className="About-PFP" />
                        </div>
                    </div>
                    <div className="About-item">
                        <div className={this.state.highlights ? 'fadeIn' : 'fadeOut'}>
                            <h3>My Story</h3>
                            <p> I'm an aspiring software engineer with the experience to back up that dream. I grew up in Los Angeles where I took an interest in
                                the life sciences, working as a zookeeper and frequently volunteering for conservation projects. Since 2018 I have traveled
                                around the country and gone to college. I've met people of all kinds and lived in the biggest cities, small towns and everything in
                                between. Feeling well-rounded, I am excitedly building the foundation for a career for myself. I've earned my Bachelor's of Computer Science
                                of which I graduated early cum laude from Kalamazoo College as well as worked in compression algorithm development research to both learn more
                                and prove my aptitude.
                            </p>
                            <a style={{ color: "#00008B" }} onClick={this.handleFade}>Read The Highlights>></a>
                        </div>
                        <div style={window.innerWidth < 675 ? { marginLeft: "85px" } : {} } className={this.state.highlights ? 'fadeOut' : 'fadeIn'}>
                            <h3>The Highlights</h3>
                            <ul>
                                <li style={{ paddingBottom: "15px" }}>Full Stack Software Engineer</li>
                                <li style={{ paddingBottom: "15px" }}>Data Scientist</li>
                                <li style={{ paddingBottom: "15px" }}>Abouttech</li>
                                <li style={{ paddingBottom: "15px" }}>IT</li>
                                <li style={{ paddingBottom: "15px" }}>Wildlife Conservation</li>
                            </ul>
                            <a style={{ color: "#00008B" }} onClick={this.handleFade}>Read My Story>></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;