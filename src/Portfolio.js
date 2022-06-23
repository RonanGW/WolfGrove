import React, { Component } from 'react';
import './App.css';

class Portfolio extends Component {

    /* Default Constructor for About section */
    constructor(props) {
        super(props);

        // Define the initial state:
        this.state = {
            projects: [false, false, false, false],
            ID: 0,
        };
    }

    /* Direct to another page */
    Redirect = (link) => {
        window.location.assign(link);
    }

    /* Expands project details */
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

        if (this.props.data) {
            var projects = this.props.data.projects.map(function (projects) {
                var url = "location.href = '" + projects.url + "';"
                return <div style={{padding:"1%"}}>
                    <div style={{ boxShadow: "rgba(0, 0, 0, 0.12) 0 5px 5px", backgroundColor: "white", borderTopLeftRadius: "2%", borderTopRightRadius: "2%", width: "25vw", height: "30vh", minWidth: "30px", minHeight: "400px" }}>
                        <img src={projects.image} style={{ borderTopLeftRadius: "2%", borderTopRightRadius: "2%", width: "100%", height: "60%" }} />
                        <div>
                            <p style={{ paddingLeft: "2%", paddingRight: "2%", height: "10%", display: "flex", justifyContent: "center" }}>{projects.description}</p>
                            <div style={{ paddingLeft: "5%", paddingRight: "5%", height: "10%", display: "flex", justifyContent: "space-between" }} >
                                <button className="GHLogo" onClick={event => window.location.href = projects.url} ></button>
                                <h2><u>{projects.title}</u></h2>
                            </div>
                        </div>
                    </div>
                </div>
            })
        }

        return (
            <div className="Portfolio">
                <div className="Section-Header">
                    <div className="Section-Header-Alignment">
                        <h1 style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <div className="SectionNameLine" />
                            Portfolio
                            <div className="SectionNameLine" />
                        </h1>
                    </div>
                </div>
                {/*<div classname="portfolio-content">*/}
                {/*    */}{/* project 1*/}
                {/*    <div classname="project-button-container" >*/}
                {/*        <button style={{ background: "url('https://media.istockphoto.com/photos/sunlight-through-the-coniferous-forest-picture-id148973567?k=20&m=148973567&s=612x612&w=0&h=mqb824yiu7jjhi2jv5azpw5fw5iayg5hg4mrd9nulma=')" }} classname="project-button" onclick={this.expand.bind(this, this.state.id)}>wolfgrove</button>*/}
                {/*        */}{/* project expansion box */}
                {/*        <div classname={this.state.projects[0] ? 'openbutton' : 'closebutton'}>*/}
                {/*            <div classname="buttondesc" >*/}
                {/*                <h3>wolfgrove</h3>*/}
                {/*                <p>this is my personal website! the place you're at right now! it's a catch all place for*/}
                {/*                    everything me, all coded by myself. it's designed using react and is meant to both be*/}
                {/*                    a reference and a display of my ability. the code is all available on github to view.*/}
                {/*                    link below.*/}
                {/*                </p>*/}
                {/*                <button title="link to my github" classname="ghlogo" onclick={this.redirect.bind(this, "https://github.com/ronangw")}></button>*/}
                {/*            </div>*/}
                {/*        </div>    */}
                {/*    </div>*/}
                {/*    */}{/* project 2*/}
                {/*    <div classname="project-button-container" >*/}
                {/*        <button style={{ background: "url('https://videohive.img.customer.envatousercontent.com/files/2f4e450e-c307-48e7-810b-d61ec2367de5/inline_image_preview.jpg?auto=compress%2cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=4e2f0efc76db407633c1a8db14a0b94c')" }} classname="project-button" onclick={this.expand.bind(this, this.state.id + 1)}>phyngsd</button>*/}
                {/*        */}{/* project expansion box */}
                {/*        <div classname={this.state.projects[1] ? 'openbutton' : 'closebutton'}>*/}
                {/*            <div classname="buttondesc" >*/}
                {/*                <h3>phyngsd</h3>*/}
                {/*                <p>this is the project my software development internship was focused on. it is a highly*/}
                {/*                    scalable parallel compression algorithm for omic big data. it is primarily coded with*/}
                {/*                    c++, but also openmp, mpi & cuda as well as multithreading and supercomputing. the*/}
                {/*                    github link to the decompression algorithm (the section i mainly worked with) is below*/}

                {/*                </p>*/}
                {/*                <button title="link to my github" classname="ghlogo" onclick={this.redirect.bind(this, "https://github.com/pcdslab/phyngsd")}></button>*/}
                {/*            </div>*/}
                {/*        </div>    */}
                {/*    </div>*/}
                {/*    */}{/* project 3*/}
                {/*    <div classname="project-button-container" >*/}
                {/*        <button style={{ background: "url('https://media.istockphoto.com/photos/green-forest-picture-id1173733640?b=1&k=20&m=1173733640&s=170667a&w=0&h=qvsbtxqyfpqzzkrr1ozhu-92jntscirst0uzin26cqu=')" }} classname="project-button" onclick={this.expand.bind(this, this.state.id + 2)}>bio-loss</button>*/}
                {/*        */}{/* project expansion box */}
                {/*        <div classname={this.state.projects[2] ? 'openbutton' : 'closebutton'}>*/}
                {/*            <div classname="buttondesc" >*/}
                {/*                <h3>bio-loss</h3>*/}
                {/*                <p>this was a project i started as a final for one of my senior year courses. this project*/}
                {/*                    was meant to be an proof of concept display for an interactive educational webpage for any audience*/}
                {/*                    that quantifies biodiversity loss per country as a way of explaining how severe the issue is. */}
                {/*                    this project involved guiding several novice to creates the different aspects of the project.*/}
                {/*                    i intend to improve the code, but the current code is available below.*/}
                {/*                </p>*/}
                {/*                <button title="link to my github" classname="ghlogo" onclick={this.redirect.bind(this, "https://github.com/langstonhowley/seminar-webpage")}></button>*/}
                {/*            </div>*/}
                {/*        </div>    */}
                {/*    </div>*/}
                {/*    */}{/* project 4*/}
                {/*    <div classname="project-button-container" >*/}
                {/*        <button classname="project-button" style={{ backgroundcolor: "#dfeae2", color: "#18191a" }} onclick={this.expand.bind(this, this.state.id + 3)}>tipo</button>*/}
                {/*        */}{/* project expansion box */}
                {/*        <div classname={this.state.projects[3] ? 'openbutton' : 'closebutton'}>*/}
                {/*            <div classname="buttondesc" >*/}
                {/*                <h3>tipo</h3>*/}
                {/*                <p>this is a project i started with a friend as a way to introduce programming to her.*/}
                {/*                    it's meant to be a simple local project manager/to-do list. the source code is viewable*/}
                {/*                    at the link below.*/}
                {/*                </p>*/}
                {/*                <button title="link to my github" classname="ghlogo" onclick={this.redirect.bind(this, "https://github.com/genesismm/tipo")}></button>*/}
                {/*            </div>*/}
                {/*        </div>    */}
                {/*    </div>*/}
                {/*</div>*/}
                <div style={{ paddingTop: "3%", display: "flex", flexDirection: "row", flexFlow: "row wrap", justifyContent: "center" }}>
                    {projects}
                </div>
            </div>
        );
    }
}

export default Portfolio;