import React, { Component } from 'react';
import './App.css';

class Resume extends Component {
    render() {
        return (
            <div className="Resume">
                <div className="JobDesc">
                    <div>
                        {/* Icon */}
                        <h2>Research Intern</h2>
                        <h3>Kalamazoo College</h3>
                        <p>July 2021-December 2021</p>
                        <p>Kalamazoo, MI</p>
                    </div>
                    <div>
                        <p>
                            - (The project) provided specialized algorithm with time-improvements upwards of 900%
                            - I Reviewed, Notated and Refractored code throughout the entire project
                            - I researched and determined optimal technologies
                            - I added accessibility functions
                            - I presented research at West Michigan Regional Undergraduate Science Research Conference


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
                        <p>
                            - Spearheaded Google Speaker Program Enrollment. (Technological assistance for the senior population)
                            - Enrolled new participants in the Great Plates Delivered program
                            - Served as point of contact fo existing clients to resolve issues.
                            - Create and update client information within database.

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
                        <p>
                            Hired part-time to field IT requests from Faculty as well as Student body on a variety of support issues including:
                            - Monitoring end-user requests for assistance and provide appropriate support
                            - Creating, changing, and deleting user accounts
                            - Performing AV audits ensuring conference room are fully functional
                            - Deploying new or upgraded existing hardware & software for end-users
                            - Providing support after hours and on weekends per on-call rotation.
                            - Providing IT support for PCs, printers, peripherals, telephone systems, and cellular devices
                            - Identifying, managing, and resolving issues in a timely manner
                            - Supporting system security through OS and application patching, anti-virus support
                            - Responsible for printer and copier functionality and supplies.
                            - Assisting users by answering questions and providing recommendations using “non-technical” terms.
                            - Ensuring all support equipment (printers etc.) were in good use and escalated any unresolved issues
                            - Other duties and special projects as assigned
                        </p>
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
                        <p>
                            For my yearlong Animal Husbandry Internship, I assisted the zookeepers with daily activities at the Los Angeles Zoo. Specific responsibilities included overseeing hoof stock - okapi, kudzu, etc. - maintaining their habitat, preparing meals, and ensuring their safety. Frequently, work also included caring for lions and ostriches. Records were essential for ongoing health of the animals and data entry was a routine part of the job. I also required effective communication skills with both adult and child visitors, skills central for maintaining safety protocols and providing meaningful educational experiences. During a viral outbreak I also practiced proper protocol for disease prevention.
                        </p>
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
                        <p>
                            Researched, planned, and created a campus store for the Biological Sciences Magnet School. As Business Manager, I acquired the knowledge necessary for sales, inventory, staffing, finance, suppliers, as well as rules and regulations regarding selling food. In addition, I trained and taught my successor about the task ahead.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;