import React, { Component } from 'react';
import './App.css';

class Resume extends Component {
    render() {
        return (
            <div className="Resume">
                <div className="Resume-section">
                    <div>
                        <h2>Experience</h2>
                        <div className="JobDesc">
                            <div>
                                {/* Icon */}
                                <h2>Research Intern</h2>
                                <h3>Kalamazoo College</h3>
                                <p>July 2021-December 2021</p>
                                <p>Kalamazoo, MI</p>
                            </div>
                            <div>
                                <ul>
                                    <li style={{ paddingBottom: "15px" }}>(The project) provided specialized algorithm with time-improvements upwards of 900%</li>
                                    <li style={{ paddingBottom: "15px" }}>I Reviewed, Notated and Refractored code throughout the entire project</li>
                                    <li style={{ paddingBottom: "15px" }}>I researched and determined optimal technologies</li>
                                    <li style={{ paddingBottom: "15px" }}>I added accessibility functions</li>
                                    <li style={{ paddingBottom: "15px" }}>I presented research at West Michigan Regional Undergraduate Science Research Conference</li>
                                </ul>
                                <p>
                                    In this position I worked with Kalamazoo College's Computer Science Department staff on a project to develop a new method of omic data compression. This project implemented a highly scalable parallel approach using a hybrid of OpenMP & MPI technologies. In addition, my work heavily implemented CUDA.

                                    This project required a great deal of independence, creative new solutions, strength and quickly learning new technology, adaptability to the work of others and an adept proficiency at interpreting said work.
                                </p>
                            </div>
                        </div>
                        <div className="JobDesc">
                            <div>
                                {/* Icon */}
                                <h2>Intake Specialist</h2>
                                <h3>Sourcewise</h3>
                                <p>April 2021-July 2021</p>
                                <div>
                                    {/*Location Pin Icon*/}
                                    <p>Santa Clara County, CA</p>
                                </div>
                            </div>
                            <div>
                                <ul>
                                    <li style={{ paddingBottom: "15px" }}>Spearheaded Google Speaker Program Enrollment. (Technological assistance for the senior population)</li>
                                    <li style={{ paddingBottom: "15px" }}>Enrolled new participants in the Great Plates Delivered program</li>
                                    <li style={{ paddingBottom: "15px" }}>Served as point of contact fo existing clients to resolve issues.</li>
                                    <li style={{ paddingBottom: "15px" }}>Create and update client information within database.</li>
                                </ul>
                                <p>
                                    Served as point of contact for the Great Plates Delivered via phone. This program provided frozen food delivered to eligible clients' homes as a form of COVID relief.
                                </p>
                            </div>
                        </div>
                        <div className="JobDesc">
                            <div>
                                {/* Icon */}
                                <h2>Help Desk Specialist</h2>
                                <h3>Kalamazoo College</h3>
                                <p>September 2018-April 2021</p>
                                <div>
                                    {/*Location Pin Icon*/}
                                    <p>Kalamazoo, MI</p>
                                </div>
                            </div>
                            <div>
                                <ul>
                                    <li style={{ paddingBottom: "15px" }}>Monitored end-user requests for assistance and provided appropriate support</li>
                                    <li style={{ paddingBottom: "15px" }}>Created, changed, and deleted user accounts</li>
                                    <li style={{ paddingBottom: "15px" }}>Performed AV audits ensuring conference rooms are fully functional</li>
                                    <li style={{ paddingBottom: "15px" }}>Deployed new or upgraded existing hardware & software for end-users</li>
                                    <li style={{ paddingBottom: "15px" }}>Provided support after hours and on weekends per on-call rotation.</li>
                                    <li style={{ paddingBottom: "15px" }}>Provided IT support for PCs, printers, peripherals, phone systems, and cellular devices</li>
                                    <li style={{ paddingBottom: "15px" }}>Identified, managed, and resolved issues in a timely manner</li>
                                    <li style={{ paddingBottom: "15px" }}>Supported system security through OS and application patching, anti-virus support</li>
                                    <li style={{ paddingBottom: "15px" }}>Responsible for printer and copier functionality and supplies.</li>
                                    <li style={{ paddingBottom: "15px" }}>Assisted users by answering questions and providing recommendations using “non-technical” terms.</li>
                                    <li style={{ paddingBottom: "15px" }}>Ensured all support equipment (printers etc.) were in good use and escalated any unresolved issues</li>
                                    <li style={{ paddingBottom: "15px" }}>Other duties and special projects as assigned</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="JobDesc">
                        <div>
                            {/* Icon */}
                            <h2>Zookeeper</h2>
                            <h3>Los Angeles Zoo and Botanical Gardens</h3>
                            <p>August 2017 - June 2018</p>
                            <div>
                                {/*Location Pin Icon*/}
                                <p>Los Angeles, CA</p>
                            </div>
                        </div>
                        <div>
                            <ul>
                                <li style={{ paddingBottom: "15px" }}>Assisted the zookeepers with daily activities</li>
                                <li style={{ paddingBottom: "15px" }}>Oversaw hoofstock - okapi, kudzu, etc. including maintaining their habitat, preparing meals, and ensuring their safety</li>
                                <li style={{ paddingBottom: "15px" }}>Frequently, work also included caring for lions and ostriches</li>
                                <li style={{ paddingBottom: "15px" }}>Essential data entry on status and health of animals</li>
                                <li style={{ paddingBottom: "15px" }}>Effective communication skills with both adult and child visitors, skills central for maintaining safety protocols and providing meaningful educational experiences</li>
                                <li style={{ paddingBottom: "15px" }}>During a viral outbreak I also practiced proper protocol for disease prevention</li>
                            </ul>
                        </div>
                    </div>
                    <div className="JobDesc">
                        <div>
                            {/* Icon */}
                            <h2>Business Manager</h2>
                            <h3>North Hollywood High School Zoo Magnet</h3>
                            <p>September 2017 - June 2018</p>
                            <div>
                                {/*Location Pin Icon*/}
                                <p>Los Angeles, CA</p>
                            </div>
                        </div>
                        <div>
                            <ul>
                                <li style={{ paddingBottom: "15px" }}>Researched, planned, and created a campus store for the Biological Sciences Magnet School</li>
                                <li style={{ paddingBottom: "15px" }}>Researched the necessary knowledge rules and regulations regarding selling food and operating a business within LAUSD</li>
                                <li style={{ paddingBottom: "15px" }}>Recruited and managed staff</li>
                                <li style={{ paddingBottom: "15px" }}>Managed Store Finances</li>
                                <li style={{ paddingBottom: "15px" }}>Managed & Sourced Store Stock</li>
                                <li style={{ paddingBottom: "15px" }}>Trained and taught my successor about the task ahead</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="Resume-section">
                    <div>
                        <h2>Education</h2>
                        <div className="SchoolDesc">
                            <div>
                                {/* Icon */}
                                <h2>Kalamazoo College</h2>
                                <h3>Bachelor's Computer Science</h3>
                                <p>September 2018-March 2022</p>
                                <p>Kalamazoo, MI</p>
                            </div>
                            <div>
                                <p>
                                    Graduated cum laude. Alongside my major in computer science, I also completed a minor in Japanese and every core class the biology major requires.

                                    Extracirriculars: Treasurer and Co-founder of the Computer Science Society, Arboretum Trail Crew, Lion Dance & Taiko Performer.
                                </p>
                            </div>
                        </div>
                        <div className="SchoolDesc">
                            <div>
                                {/* Icon */}
                                <h2>Zoo Magnet</h2>
                                <h3>North Hollywood High School Biological Sciences Magnet</h3>
                                <h3>High School Diploma</h3>
                                <p>September 2014-June 2018</p>
                                <div>
                                    {/*Location Pin Icon*/}
                                    <p>Los Angeles, CA</p>
                                </div>
                            </div>
                            <div>
                                <p>
                                    The Biological Sciences Magnet, colloquially known as the Zoo Magnet, is a unit of North Hollywood High located at the Los Angeles Zoo. Courses were heavily STEM focused and were frequently conducted at the Los Angleles Zoo.

                                    Extracirriculars: Student Leadership (Business Manager) & Zookeeping Internship.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;