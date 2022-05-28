import React, { Component } from 'react';
import './App.css';

class Education extends Component {
    render() {
        return (
            <div className="Education">
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
        );
    }
}

export default Education;