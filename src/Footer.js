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
                        <h3>Contact Details</h3>
                        <p>Email: ronangwolfe@gmail.com</p>
                    </div>
                    <div className="Contact-Footnote">
                        <h3>Socials</h3>
                        <div>
                        <button title="Link to my GitHub" className="GHLogo" onClick={this.Redirect.bind(this, "https://github.com/RonanGW")}></button>
                        <button title="Link to my LinkedIn" className="LILogo" onClick={this.Redirect.bind(this, "https://www.linkedin.com/in/ronan-wolfe/")}></button>
                        </div>
                    </div>
                </div>
                <div className="Copyright"><p>&copy; WolfGrove</p></div>
            </div>
        );
    }
}

export default Footer;