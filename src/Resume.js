import React, { Component } from 'react';
import './App.css';

class Resume extends Component {
    render() {

        if (this.props.data) {
            var education = this.props.data.education.map(function (education) {
                var date = education.startDate + "-\n" + education.endDate;
                var description = education.description + "\n\nExtracirriculars: " + education.extracirriculars;
                var desc = description.split('\n').map(str => <p>{str}</p>);
                return <div className="SchoolDesc">
                        {/* Left side details */}
                        <div className="TitlePhrase">
                            <div className="LogoPhrase">
                            <img style={{ width: "64px", height: "64px" }} src={education.icon} />
                            <h2>{education.school}</h2>
                            </div>
                            <h3>{education.degree}</h3>
                            <div className="LogoPhrase">
                                <img style={{ width: "20px", height: "20px" }} src="./Calendar.png" />
                                <p>{date}</p>
                            </div>
                            <div className="LogoPhrase">
                                <img style={{ width: "16px", height: "20px" }} src="./LocPin.png" />
                            <p>{education.location}</p>
                            </div>
                            </div>
                            {/* Divider */}
                            <div className="VerticalLine" />
                            {/* Right side description */}
                            <div>
                                <p className="DescPhrase">
                                   {desc}
                                </p>
                            </div>
                        </div>
            })
            var jobs = this.props.data.work.map(function (work) {
                var date = work.startDate + '-\n' + work.endDate;
                var description = work.description + '\n\n';
                var desc = description.split('\n').map(str => <p>{str}</p>);
                var tasks = work.tasks.map(function (task) {
                    return <li className="DescPhrase" style={{ paddingBottom: "15px", width: "14vw" }}>{task}</li>
                });
                return <div className="JobDesc">
                        {/* Left side details */}
                        <div className="TitlePhrase">
                            <h2>{work.title}</h2>
                            <div className="LogoPhrase">
                                <img style={{ width: "32px", height: "32px" }} src={work.icon} />
                                <h3>{work.company}</h3>
                            </div>
                            <div className="LogoPhrase">
                                <img style={{ width: "20px", height: "20px" }} src="./Calendar.png" />
                                <p>{date}</p>
                            </div>
                            <div className="LogoPhrase">
                                <img style={{ width: "16px", height: "20px" }} src="./LocPin.png" />
                                <p>{work.location}</p>
                            </div>
                        </div>
                        {/* Divider */}
                        <div className="VerticalLine" />
                        {/* Right side description */}
                        <div className="DescPhrase">
                            <p>{desc}</p>
                            <ul>{tasks}</ul>
                        </div>
                    </div>
            })
        }

        return (
            <section id="resume">
            <div className="Resume-container">
                <div className="Section-Header">
                    <div className="Section-Header-Alignment">
                        <h1>Resume</h1>
                        <div className="HorizontalLine" />
                    </div>
                </div>
                <div className="Resume">
                    {/* Work Experience Section */}
                    <div className="Resume-section">
                        <div>
                            {/* Section header */}
                            <h1>Experience</h1>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                {/* Styled item bullet points*/}
                                <img src="./LeafWalls.png" />
                                <div>{jobs}</div>
                            </div>
                        </div>
                    </div>
                    {/* Education section */}
                    <div className="Resume-section">
                        <div>
                            {/* Section header */}
                            <h1>Education</h1>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                {/* Styled item bullet points*/}
                                <img src="./LeafWalls.png" />
                                <div style={{ display: "flex", flexDirection: "column" }}>{education}</div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </section>
        );
    }
}

export default Resume;