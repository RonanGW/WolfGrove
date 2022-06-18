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
                <div className="Section-Header">
                    <div className="Section-Header-Alignment">
                        <h1>About Me</h1>
                        <div className="HorizontalLine" />
                    </div>
                </div>
                {/*<ScrollAnimation animateIn="fadeIn">*/}
                    <div style={{ transition: this.state.visibility ? "" : "width 7s 7s, height 7s 7s, opacity 7s" }} className="About-content">
                    {/* Personal info and PFP */}
                    <div className="About-Left">
                        {/* Personal info */}
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }} >
                        <div className="About-item">
                            <h5>Name:</h5>
                            <p>{name}</p>
                            <h5>Area:</h5>
                            <p>{area}</p>
                            <h5>Links:</h5>
                            <button title="Download my Resume" className="DLLogo" onClick={this.DownloadResume}></button>
                            <button title="Link to my GitHub" className="GHLogo" onClick={this.Redirect.bind(this, "https://github.com/RonanGW")}></button>
                            <button title="Link to my LinkedIn" className="LILogo" onClick={this.Redirect.bind(this, "https://www.linkedin.com/in/ronan-wolfe/")}></button>
                            </div>
                        </div>
                        {/* PFP */}
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }} className="About-item">
                            <img src={pfp} className="About-PFP" />
                        </div>
                    </div>
                    {/* Swapping interests and story sections */}
                    <div className="About-item">
                        {/* My story Section */}
                        <div className={this.state.interests ? 'fadeInInterests' : 'fadeOutInterests'}>
                            <h3>My Story</h3>
                            <p> {bio}{/*I'm a software engineer with the experience to back up that dream. I grew up in Los Angeles where I took an interest in*/}
                            {/*    the life sciences, working as a zookeeper and frequently volunteering for conservation projects. Since 2018 I have traveled*/}
                            {/*    around the country and gone to college. I've met people of all kinds and lived in the biggest cities, small towns and everything in*/}
                            {/*    between. Feeling well-rounded, I am excitedly building the foundation for a career for myself. I've earned my Bachelor's of Computer Science*/}
                            {/*    of which I graduated early cum laude from Kalamazoo College as well as worked in compression algorithm development research to both learn more*/}
                            {/*    and prove my aptitude.*/}
                            </p>
                            <button className="Interests-Button" onClick={this.handleFade}>Read My Interests</button>
                        </div>
                        {/* Interests section */}
                            <div  className={this.state.interests ? 'fadeOutInterests' : 'fadeInInterests'}>
                            <h3>My Interests</h3>
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
                {/*</ScrollAnimation>*/}
            </div>
        );
    }
}

export default About;