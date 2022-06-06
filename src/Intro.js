import React, { Component } from 'react';
import './App.css';

class Intro extends Component {
    render() {
        return (
            <div className="Intro">
                {/* Likely temporary Work in Progress Notice */}
                <h1>Welcome!</h1>
                <h3>Important Note</h3>
                <p> Welcome to my site. It's in it's infancy at the moment, but I intend to for this to be catch all location for everything me! That means this'll be a big project,
                    which will encompass a fair bit more than just this page. First at foremost, that's me, to the right. So if you catch any bugs or just have opinions, feel free to
                    contact me. Please take a look through my page and see if you find anything of interest. I'll be posting projects, life updates, skills and affiliations. If you'd like to know more
                    or have access to anything password-locked, reach out and I'd be happy to help. My contact details with be available throughout this site.
                </p>
                <img className="PFP" src="./sapling.png" alt="pfp" />
            </div>
        );
    }
}

export default Intro;