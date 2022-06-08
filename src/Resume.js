import React, { Component } from 'react';
import './App.css';

class Resume extends Component {
    render() {
        return (
            <div className="Resume-container">
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", flexDirection: "column", fontSize: "25px"}}>
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
                                        <div className="DescPhrase">
                                            <p>
                                                I  was invited by my Computer Science professor to participate in a research project where we developed a highly scaleable, parallel compression algorithm for Omic Big Data. We were able to achieve time complexity improvements upwards of 900%.
                                                <br /><br />
                                                Responsibilities Included:
                                            </p>
                                            <ul>
                                                <li className="DescPhrase" style={{ paddingBottom: "15px", width: "14vw" }}>Reviewed, notated and refractored code throughout the entire project</li>
                                                <li className="DescPhrase" style={{ paddingBottom: "15px", width: "14vw" }}>Researched and determined optimal technologies</li>
                                                <li className="DescPhrase" style={{ paddingBottom: "15px", width: "14vw" }}>Added accessibility functions</li>
                                                <li className="DescPhrase" style={{ paddingBottom: "15px", width: "14vw" }}>Presented research at West Michigan Regional Undergraduate Science Research Conference</li>
                                            </ul>
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
                                        <div className="DescPhrase">
                                            <p>
                                                Served as point of contact for the Great Plates Delivered via phone. This program provided frozen food delivered to eligible clients' homes as a form of COVID relief.
                                            </p>
                                            <ul>
                                                <li className="DescPhrase" style={{ paddingBottom: "15px", width: "14vw" }}>Spearheaded Google Speaker Program Enrollment. (Technological assistance for the senior population)</li>
                                                <li className="DescPhrase" style={{ paddingBottom: "15px", width: "14vw" }}>Enrolled new participants in the Great Plates Delivered program</li>
                                                <li className="DescPhrase" style={{ paddingBottom: "15px", width: "14vw" }}>Served as point of contact for existing clients to resolve issues.</li>
                                                <li className="DescPhrase" style={{ paddingBottom: "15px", width: "14vw" }}>Create and update client information within database.</li>
                                            </ul>
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
                                        <div className="DescPhrase">
                                            {/* Left side details */}
                                            <p>
                                                Provided  IT support to Faculty and Student body on a variety of support issues including: 
                                            </p>
                                            <ul>
                                                <li className="DescPhrase" style={{ paddingBottom: "15px", width: "14vw" }}>Monitoring end-user requests for assistance and providing appropriate support </li>
                                                <li className="DescPhrase" style={{ paddingBottom: "15px", width: "14vw" }}>Creating, changing, and deleting user accounts</li>
                                                <li className="DescPhrase" style={{ paddingBottom: "15px", width: "14vw" }}>Performing AV audits, ensuring equipment in facilities were fully functional</li>
                                                <li className="DescPhrase" style={{ paddingBottom: "15px", width: "14vw" }}>Deploying new or upgrading existing hardware & software for end-users</li>
                                                <li className="DescPhrase" style={{ paddingBottom: "15px", width: "14vw" }}>Responding to on-call requests</li>
                                                <li className="DescPhrase" style={{ paddingBottom: "15px", width: "14vw" }}>Providing IT support for PCs, printers, peripherals, telephone systems, and cellular devices </li>
                                                <li className="DescPhrase" style={{ paddingBottom: "15px", width: "14vw" }}>Supporting system security through OS and application patching, anti-virus support</li>
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
                                        <div className="DescPhrase">
                                            <p>
                                                While attending Zoo Magnet High School, I participated in the Animal Husbandry Internship. I assisted the zookeepers with daily activities at the Los Angeles Zoo.
                                                <br/><br/>
                                                Specific responsibilities included overseeing hoof stock such as okapi, kudzu, bongos, as well as lions and ostriches, porcupines and more - maintaining their habitat, preparing meals, maintaining detailed heath records and ensuring their safety.
                                            </p>
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
                                        <div className="DescPhrase">
                                            <p>
                                                Researched, planned, and created a campus store for the North Hollywood Zoo Magnet School. 
                                                As Business Manager, my responsibilities included over-site of all sales, inventory, staffing, finance, and suppliers, as well as adhering to LAUSD food regulation requirements.
                                            </p>
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
                                                <br /><br />
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
                                                <br/><br/>
                                                Extracirriculars: Student Leadership (Business Manager) & Zookeeping Internship.
                                            </p>
                                        </div>
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