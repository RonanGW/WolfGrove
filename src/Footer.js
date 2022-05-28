import React, { Component } from 'react';
import './App.css';

class Footer extends Component {

    Redirect = (link) => {
        window.location.assign(link);
    }

    render() {
        return (
            <div className="Footer">
                <div className="Footer-cols">
                    <div className="Contact-Footnote">
                        <h6>Contact Details</h6>
                        <p>Email: ronangwolfe@gmail.com</p>
                    </div>
                    <div className="Contact-Footnote">
                        <h6>Socials</h6>
                        <button onClick={this.Redirect.bind(this, "https://github.com/RonanGW")}>GitHub</button>
                        <button onClick={this.Redirect.bind(this, "https://www.linkedin.com/in/ronan-wolfe/")}>LinkedIn</button>
                        </div>
                </div>
                <div className="Copyright"> ©2022 WolfGrove </div>
            </div>
        );
    }
}

export default Footer;