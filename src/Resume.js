import React, { Component } from 'react';
import './App.css';

class Resume extends Component {
    render() {
        return (
            <div className="Resume">
                {/* Work Experience Section */}
                <div className="Resume-section">
                    <div>
                        {/* Section header */}
                        <h1>Experience</h1>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            {/* Styled item bullet points*/}
                            <img src="./LeafWalls.png" />
                            <div>
                                {/* Research Job */}
                                <div className="JobDesc">
                                    {/* Left side details */}
                                    <div className="TitlePhrase">
                                        <h2>Software Development Intern</h2>
                                        <div className="LogoPhrase">
                                            <img style={{ width: "32px", height: "32px" }} src="./KIcon.png" />
                                            <h3>Kalamazoo College</h3>
                                        </div>
                                        <div className="LogoPhrase">
                                            <img style={{ width: "20px", height: "20px" }} src="./Calendar.png" />
                                            <p>July 2021-<br />December 2021</p>
                                        </div>
                                        <div className="LogoPhrase">
                                            <img style={{ width: "16px", height: "20px" }} src="./LocPin.png" />
                                            <p>Kalamazoo, MI</p>
                                        </div>
                                    </div>
                                    {/* Divider */}
                                    <div className="VerticalLine" />
                                    {/* Right side description */}
                                    <div>
                                        <ul>
                                            <li className="DescPhrase" style={{ paddingBottom: "15px" }}>(The project) provided specialized algorithm with time-improvements upwards of 900%</li>
                                            <li className="DescPhrase" style={{ paddingBottom: "15px" }}>I Reviewed, Notated and Refractored code throughout the entire project</li>
                                            <li className="DescPhrase" style={{ paddingBottom: "15px" }}>I researched and determined optimal technologies</li>
                                            <li className="DescPhrase" style={{ paddingBottom: "15px" }}>I added accessibility functions</li>
                                            <li className="DescPhrase" style={{ paddingBottom: "15px" }}>I presented research at West Michigan Regional Undergraduate Science Research Conference</li>
                                        </ul>
                                        <p className="DescPhrase">
                                            In this position I worked with Kalamazoo College's Computer Science Department staff on a project to develop a new method of omic data compression. This project implemented a highly scalable parallel approach using a hybrid of OpenMP & MPI technologies. In addition, my work heavily implemented CUDA.

                                            This project required a great deal of independence, creative new solutions, strength and quickly learning new technology, adaptability to the work of others and an adept proficiency at interpreting said work.
                                        </p>
                                    </div>
                                </div>
                                {/* Call Center Job */}
                                <div className="JobDesc">
                                    {/* Left side details */}
                                    <div className="TitlePhrase">
                                        <h2>Intake Specialist</h2>
                                        <div className="LogoPhrase">
                                            <img style={{ width: "32px", height: "32px" }} src="./SourcewiseIcon.png" />
                                            <h3>Sourcewise</h3>
                                        </div>
                                        <div className="LogoPhrase">
                                            <img style={{ width: "20px", height: "20px" }} src="./Calendar.png" />
                                            <p>April 2021-<br />July 2021</p>
                                        </div>
                                        <div className="LogoPhrase">
                                            <img style={{ width: "16px", height: "20px" }} src="./LocPin.png" />
                                            <p>Santa Clara<br />County, CA</p>
                                        </div>
                                    </div>
                                    {/* Divider */}
                                    <div className="VerticalLine" />
                                    {/* Right side description */}
                                    <div>
                                        <ul>
                                            <li className="DescPhrase" style={{ paddingBottom: "15px" }}>Spearheaded Google Speaker Program Enrollment. (Technological assistance for the senior population)</li>
                                            <li className="DescPhrase" style={{ paddingBottom: "15px" }}>Enrolled new participants in the Great Plates Delivered program</li>
                                            <li className="DescPhrase" style={{ paddingBottom: "15px" }}>Served as point of contact fo existing clients to resolve issues.</li>
                                            <li className="DescPhrase" style={{ paddingBottom: "15px" }}>Create and update client information within database.</li>
                                        </ul>
                                        <p className="DescPhrase">
                                            Served as point of contact for the Great Plates Delivered via phone. This program provided frozen food delivered to eligible clients' homes as a form of COVID relief.
                                        </p>
                                    </div>
                                </div>
                                {/* Help Desk Job */}
                                <div className="JobDesc">
                                    {/* Left side details */}
                                    <div className="TitlePhrase">
                                        <h2>Help Desk Specialist</h2>
                                        <div className="LogoPhrase">
                                            <img style={{ width: "32px", height: "32px" }} src="./KIcon.png" />
                                            <h3>Kalamazoo College</h3>
                                        </div>
                                        <div className="LogoPhrase">
                                            <img style={{ width: "20px", height: "20px" }} src="./Calendar.png" />
                                            <p>September 2018-<br />April 2021</p>
                                        </div>
                                        <div className="LogoPhrase">
                                            <img style={{ width: "16px", height: "20px" }} src="./LocPin.png" />
                                            <p>Kalamazoo, MI</p>
                                        </div>
                                    </div>
                                    {/* Divider */}
                                    <div className="VerticalLine" />
                                    <div>
                                        {/* Left side details */}
                                        <ul>
                                            <li className="DescPhrase" style={{ paddingBottom: "15px" }}>Monitored end-user requests for assistance and provided appropriate support</li>
                                            <li className="DescPhrase" style={{ paddingBottom: "15px" }}>Created, changed, and deleted user accounts</li>
                                            <li className="DescPhrase" style={{ paddingBottom: "15px" }}>Performed AV audits ensuring conference rooms are fully functional</li>
                                            <li className="DescPhrase" style={{ paddingBottom: "15px" }}>Deployed new or upgraded existing hardware & software for end-users</li>
                                            <li className="DescPhrase" style={{ paddingBottom: "15px" }}>Provided support after hours and on weekends per on-call rotation.</li>
                                            <li className="DescPhrase" style={{ paddingBottom: "15px" }}>Provided IT support for PCs, printers, peripherals, phone systems, and cellular devices</li>
                                            <li className="DescPhrase" style={{ paddingBottom: "15px" }}>Identified, managed, and resolved issues in a timely manner</li>
                                            <li className="DescPhrase" style={{ paddingBottom: "15px" }}>Supported system security through OS and application patching, anti-virus support</li>
                                            <li className="DescPhrase" style={{ paddingBottom: "15px" }}>Responsible for printer and copier functionality and supplies.</li>
                                            <li className="DescPhrase" style={{ paddingBottom: "15px" }}>Assisted users by answering questions and providing recommendations using <span>&#8220;</span>non-technical<span>&#8221;</span> terms.</li>
                                            <li className="DescPhrase" style={{ paddingBottom: "15px" }}>Ensured all support equipment (printers etc.) were in good use and escalated any unresolved issues</li>
                                            <li className="DescPhrase" style={{ paddingBottom: "15px" }}>Other duties and special projects as assigned</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Zookeeping Job */}
                                <div className="JobDesc">
                                    {/* Left side details */}
                                    <div className="TitlePhrase">
                                        <h2>Zookeeper</h2>
                                        <div className="LogoPhrase">
                                            <img style={{ width: "32px", height: "32px" }} src="./ZooMagIcon.jpg" />
                                            <h3>Zoo Magnet</h3>
                                        </div>
                                        <div className="LogoPhrase">
                                            <img style={{ width: "20px", height: "20px" }} src="./Calendar.png" />
                                            <p>August 2017-<br />June 2018</p>
                                        </div>
                                        <div className="LogoPhrase">
                                            <img style={{ width: "16px", height: "20px" }} src="./LocPin.png" />
                                            <p>Los Angeles, CA</p>
                                        </div>
                                    </div>
                                    {/* Divider */}
                                    <div className="VerticalLine" />
                                    {/* Right side description */}
                                    <div>
                                        <ul>
                                            <li className="DescPhrase" style={{ paddingBottom: "15px" }}>Assisted the zookeepers with daily activities</li>
                                            <li className="DescPhrase" style={{ paddingBottom: "15px" }}>Oversaw hoofstock - okapi, kudzu, etc. including maintaining their habitat, preparing meals, and ensuring their safety</li>
                                            <li className="DescPhrase" style={{ paddingBottom: "15px" }}>Frequently, work also included caring for lions and ostriches</li>
                                            <li className="DescPhrase" style={{ paddingBottom: "15px" }}>Essential data entry on status and health of animals</li>
                                            <li className="DescPhrase" style={{ paddingBottom: "15px" }}>Effective communication skills with both adult and child visitors, skills central for maintaining safety protocols and providing meaningful educational experiences</li>
                                            <li className="DescPhrase" style={{ paddingBottom: "15px" }}>During a viral outbreak I also practiced proper protocol for disease prevention</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Student Store Job */}
                                <div className="JobDesc">
                                    {/* Left side details */}
                                    <div className="TitlePhrase">
                                        <h2>Business Manager</h2>
                                        <div className="LogoPhrase">
                                            <img style={{ width: "32px", height: "32px" }} src="./ZooMagIcon.jpg" />
                                            <h3>Zoo Magnet</h3>
                                        </div>
                                        <div className="LogoPhrase">
                                            <img style={{ width: "20px", height: "20px" }} src="./Calendar.png" />
                                            <p>September 2017-<br />June 2018</p>
                                        </div>
                                        <div className="LogoPhrase">
                                            <img style={{ width: "16px", height: "20px" }} src="./LocPin.png" />
                                            <p>Los Angeles, CA</p>
                                        </div>
                                    </div>
                                    {/* Divider */}
                                    <div className="VerticalLine" />
                                    {/* Right side description */}
                                    <div>
                                        <ul>
                                            <li className="DescPhrase" style={{ paddingBottom: "15px" }}>Researched, planned, and created a campus store for the Biological Sciences Magnet School</li>
                                            <li className="DescPhrase" style={{ paddingBottom: "15px" }}>Researched the necessary knowledge rules and regulations regarding selling food and operating a business within LAUSD</li>
                                            <li className="DescPhrase" style={{ paddingBottom: "15px" }}>Recruited and managed staff</li>
                                            <li className="DescPhrase" style={{ paddingBottom: "15px" }}>Managed Store Finances</li>
                                            <li className="DescPhrase" style={{ paddingBottom: "15px" }}>Managed & Sourced Store Stock</li>
                                            <li className="DescPhrase" style={{ paddingBottom: "15px" }}>Trained and taught my successor about the task ahead</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
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
                            <div>
                                {/* College Undergrad */}
                                <div className="SchoolDesc">
                                    {/* Left side details */}
                                    <div className="TitlePhrase">
                                        <div className="LogoPhrase">
                                            <img style={{ width: "64px", height: "64px" }} src="./KIcon.png" />
                                            <h2>Kalamazoo College</h2>
                                        </div>
                                        <h3>Bachelor's of<br />Computer Science</h3>
                                        <div className="LogoPhrase">
                                            <img style={{ width: "20px", height: "20px" }} src="./Calendar.png" />
                                            <p>September 2018-<br />March 2022</p>
                                        </div>
                                        <div className="LogoPhrase">
                                            <img style={{ width: "16px", height: "20px" }} src="./LocPin.png" />
                                            <p>Kalamazoo, MI</p>
                                        </div>
                                    </div>
                                    {/* Divider */}
                                    <div className="VerticalLine" />
                                    {/* Right side description */}
                                    <div>
                                        <p className="DescPhrase">
                                            Graduated cum laude. Alongside my major in computer science, I also completed a minor in Japanese and every core class the biology major requires.

                                            Extracirriculars: Treasurer and Co-founder of the Computer Science Society, Arboretum Trail Crew, Lion Dance & Taiko Performer.
                                        </p>
                                    </div>
                                </div>
                                {/* High School */}
                                <div className="SchoolDesc">
                                    {/* Left side details */}
                                    <div className="TitlePhrase">
                                        <div className="LogoPhrase">
                                            <img style={{ width: "64px", height: "64px" }} src="./ZooMagIcon.jpg" />
                                            <h2>Zoo Magnet</h2>
                                        </div>
                                        <h3>High School Diploma</h3>
                                        <div className="LogoPhrase">
                                            <img style={{ width: "20px", height: "20px" }} src="./Calendar.png" />
                                            <p>September 2014-<br />June 2018</p>
                                        </div>
                                        <div className="LogoPhrase">
                                            <img style={{ width: "16px", height: "20px" }} src="./LocPin.png" />
                                            <p>Los Angeles, CA</p>
                                        </div>
                                    </div>
                                    {/* Divider */}
                                    <div className="VerticalLine" />
                                    {/* Right side description */}
                                    <div>
                                        <p className="DescPhrase">
                                            The Biological Sciences Magnet, colloquially known as the Zoo Magnet, is a unit of North Hollywood High located at the Los Angeles Zoo. Courses were heavily STEM focused and were frequently conducted at the Los Angleles Zoo.

                                            Extracirriculars: Student Leadership (Business Manager) & Zookeeping Internship.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;