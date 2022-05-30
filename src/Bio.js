import React, { Component } from 'react';
import { saveAs } from "file-saver";
import './App.css';

class Bio extends Component {

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
                <h1>About Me</h1>
                <div className="Bio-content">
                    <div>
                        <h3>Resume & Links</h3>
                        <button className="DLLogo" onClick={this.DownloadResume}></button>
                        <button className="GHLogo" onClick={this.Redirect.bind(this, "https://github.com/RonanGW")}></button>
                        <button className="LILogo" onClick={this.Redirect.bind(this, "https://www.linkedin.com/in/ronan-wolfe/")}></button>
                    </div>
                    <img src="pfp.jpg" className="Bio-PFP" />
                    <p> I have an aspiring software engineer with the credentials to back up that dream. I grew up in Los Angeles where I took an interest in
                        the life sciences, working as a zookeeper and frequently volunteering for conservation projects. Since 2018 I have traveled
                        around the country and gone to college. I've met people of all kinds and lived in the biggest cities, small towns and everything in
                        between. That being said, I am excitedly building the foundation for a career for myself. I've earned my Bachelor's of Computer Science
                        of which I graduated early cum laude from Kalamazoo College as well as worked in compression algorithm development research to both learn
                        and prove my aptitude. Feel free to reach out if you'd like to chat.
                        </p>
                </div>
            </div>
        );
    }
}

export default Bio;