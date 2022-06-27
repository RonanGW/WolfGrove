import React, { Component } from 'react';
import './App.css';

class Resume extends Component {
    render() {

        if (this.props.data) {
            var education = this.props.data.education.map(function (education) {
                var date = education.startDate + "-\n" + education.endDate;
                var description = education.description + "\n\nExtracirriculars: " + education.extracirriculars;
                var desc = description.split('\n').map(str => <p>{str}</p>);
                return <div className="ExpContainer">
                    <img className="CompanyIcon" src={education.icon} />
                    <div className="DescContainer">
                        <h2 className="ExpTitle">{education.school}</h2>
                        <h3 className="ExpCompany">{education.degree}</h3>
                        <p className="ExpItem">{education.location}</p>
                        <p className="ExpItem"><i>{date}</i></p>
                        <div >
                            <p>{desc}</p>
                        </div>
                    </div>
                </div>
            })
            var jobs = this.props.data.work.map(function (work) {
                var date = work.startDate + '-\n' + work.endDate;
                var description = work.description + '\n\n';
                var desc = description.split('\n').map(str => <p>{str}</p>);
                var tasks = work.tasks.map(function (task) {
                    return <li>{task}</li>
                });
                return <div className="ExpContainer">
                        <img className="CompanyIcon" src={work.icon} />
                        <div className="DescContainer">
                            <h2 className="ExpTitle">{work.title}</h2>
                            <h3 className="ExpCompany">{work.company}</h3>
                            <p className="ExpItem">{work.location}</p>
                            <p className="ExpItem"><i>{date}</i></p>
                            <div>
                                <p>{desc}</p>
                                <ul>{tasks}</ul>
                            </div>
                        </div>
                    </div>
            })
        }

        return (
            <section id="resume">
            <div className="Resume-container">
                <div className="Section-Header">
                    <div className="Section-Header-Alignment">
                            <h1 className="Section-Title-Line">
                                <div className="SectionNameLine" />
                                Experience
                                <div className="SectionNameLine" />
                            </h1>
                    </div>
                </div>
                <div className="Resume">
                    {/* Work Experience Section */}
                    <div className="Resume-section">
                        <div>
                            <div>{jobs}</div>
                        </div>
                    </div>
                    {/* Education section */}
                    <div className="Resume-section">
                        <div>
                            <div>{education}</div>
                        </div>
                    </div>
                </div>
                </div>
                </section>
        );
    }
}

export default Resume;