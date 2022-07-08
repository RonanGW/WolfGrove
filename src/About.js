import React, { Component } from 'react';
import { saveAs } from "file-saver";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css";
import './App.css';

class About extends Component {
    
    /* Default Constructor for About section */
    constructor(props) {
        super(props);

        // Define the initial state:
        this.state = {
            interests: false,
            visibility: false
        };
    }

    /* Handle swap between interests and story sections */
    handleFade = () => {
        // Update our state here...
        this.setState({
            interests: !this.state.interests
        })
    };

    /* Function for download resume button */
    DownloadResume = () => {
        saveAs(
            "./RonanWolfe_Resume.pdf",
            "RonanWolfe_Resume.pdf"
        );
    };

    /* Direct to another page */
    Redirect = (link) => {
        window.location.assign(link);
    }

    /* About Display */
    render() {

        if (this.props.data) {
            var name = this.props.data.name;
            var area = this.props.data.address.city + ", " + this.props.data.address.state;
            var pfp = this.props.data.pfpurl;
            var bio = this.props.data.bio;
        }

        return (
            <div className="About">
                <div className="Section-Header-Alignment">
                    <h1 className="Section-Title-Line">
                        <div className="SectionNameLine" />
                        About Me
                        <div className="SectionNameLine" />
                    </h1>
                </div>
                <div className="About-content">
                    <div className="About-left">
                        <div className="About-left-content">
                            <div className="About-links-banner">
                            <button title="Download my Resume" className="DLLogo" onClick={this.DownloadResume}></button>
                            <button title="Link to my GitHub" className="GHLogo" onClick={this.Redirect.bind(this, "https://github.com/RonanGW")}></button>
                            <button title="Link to my LinkedIn" className="LILogo" onClick={this.Redirect.bind(this, "https://www.linkedin.com/in/ronan-wolfe/")}></button>
                            </div>
                            <div className="About-profile">
                                <img className="About-PFP" src={pfp} />
                                <p style={{margin: "0px"}}>{name}</p>
                                <p style={{margin: "0px"}}>{area}</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="About-right">
                        <div className="About-item">
                            <div className={this.state.interests ? 'fadeInInterests' : 'fadeOutInterests'}>
                                My Story<br/>{bio}
                                <button className="Interests-Button" onClick={this.handleFade}>Read My Interests</button>
                            </div>
                            <div className={this.state.interests ? 'fadeOutInterests' : 'fadeInInterests'}>
                                My Interests
                                <ul>
                                    <li style={{ paddingBottom: "15px" }}>Full Stack Software Engineer</li>
                                    <li style={{ paddingBottom: "15px" }}>Data Scientist</li>
                                    <li style={{ paddingBottom: "15px" }}>Biotechnology</li>
                                    <li style={{ paddingBottom: "15px" }}>IT</li>
                                    <li style={{ paddingBottom: "15px" }}>Wildlife Conservation</li>
                                </ul>
                                <button className="Interests-Button" onClick={this.handleFade}>Read My Story</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;