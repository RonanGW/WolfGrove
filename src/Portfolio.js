import React, { Component } from 'react';
import './App.css';

class Portfolio extends Component {

    constructor(props) {
        super(props);

        // Define the initial state:
        this.state = {
            projects: [true, false, false, false],
            ID: 0,
        };
    }

    Redirect = (link) => {
        window.location.assign(link);
    }

    Expand = (id) => {
        console.log(`Project ${id} is ${this.state.projects[id]}`)
        var tmp = [true, false, false, false];
        var i = 0;
        this.state.projects.forEach(element => {
                if (id == i) {
                    if (this.state.projects[i])
                        tmp[i] = false;
                    else
                        tmp[i] = true;
                }
                else {
                    tmp[i] = false;
                }
                i++;
            },
        );
        this.setState({
            projects: tmp
        })
    }

    render() {
        return (
            <div className="Portfolio">
                <h1>Portfolio</h1>
                <div className="Portfolio-Content">
                    <div className="Project-Button-Container" >
                        <button style={{ background: "url('https://media.istockphoto.com/photos/sunlight-through-the-coniferous-forest-picture-id148973567?k=20&m=148973567&s=612x612&w=0&h=MqB824yiU7JJHI2JV5AZPW5FW5IAyG5hg4mRd9NuLmA=')" }} className="Project-Button" onClick={this.Expand.bind(this, this.state.ID )}>WolfGrove</button>
                        <div className={this.state.projects[0] ? 'openButton' : 'closeButton'}>
                            <div className="buttonDesc" >
                                <h3>WolfGrove</h3>
                                <p>This is my personal website! The place you're at right now! It's a catch all place for
                                    everything me, all coded by myself. It's designed using react and is meant to both be
                                    a reference and a display of my ability. The code is all available on Github to view.
                                    Link Below.
                                </p>
                                <button title="Link to my GitHub" className="GHLogo" onClick={this.Redirect.bind(this, "https://github.com/RonanGW")}></button>
                            </div>
                        </div>    
                    </div>
                    <div className="Project-Button-Container" >
                        <button style={{ background: "url('https://videohive.img.customer.envatousercontent.com/files/2f4e450e-c307-48e7-810b-d61ec2367de5/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=4e2f0efc76db407633c1a8db14a0b94c')" }} className="Project-Button" onClick={this.Expand.bind(this, this.state.ID + 1)}>PhyNGSD</button>
                        <div className={this.state.projects[1] ? 'openButton' : 'closeButton'}>
                            <div className="buttonDesc" >
                                <h3>PhyNGSD</h3>
                                <button title="Link to my GitHub" className="GHLogo" onClick={this.Redirect.bind(this, "https://github.com/pcdslab/PHYNGSD")}></button>
                            </div>
                        </div>    
                    </div>
                    <div className="Project-Button-Container" >
                        <button style={{ background: "url('https://media.istockphoto.com/photos/green-forest-picture-id1173733640?b=1&k=20&m=1173733640&s=170667a&w=0&h=qVsBTxqYFPqZZkRr1OzHu-92jNtscIrST0UZin26CQU=')" }} className="Project-Button" onClick={this.Expand.bind(this, this.state.ID + 2)}>Bio-Loss</button>
                        <div className={this.state.projects[2] ? 'openButton' : 'closeButton'}>
                            <div className="buttonDesc" >
                                <h3>Bio-Loss</h3>
                                <button title="Link to my GitHub" className="GHLogo" onClick={this.Redirect.bind(this, "https://github.com/langstonhowley/seminar-webpage")}></button>
                            </div>
                        </div>    
                    </div>
                    <div className="Project-Button-Container" >
                        <button className="Project-Button" style={{ backgroundColor: "#DFEAE2", color: "#18191A" }} onClick={this.Expand.bind(this, this.state.ID + 3)}>TIPO</button>
                        <div className={this.state.projects[3] ? 'openButton' : 'closeButton'}>
                            <div className="buttonDesc" >
                                <h3>TIPO</h3>
                                <button title="Link to my GitHub" className="GHLogo" onClick={this.Redirect.bind(this, "https://github.com/GenesisMM/TIPO")}></button>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;