import React, { Component } from 'react';
import './App.css';

class Testimonials extends Component {
    render() {
        return (
            <div className="Testimonials">
                <div className="Section-Header">
                    <div className="Section-Header-Alignment">
                        <h1 className="Section-Title-Line">
                            <div className="SectionNameLine" />
                            Testimonials
                            <div className="SectionNameLine" />
                        </h1>
                    </div>
                </div>
                <div className="TestimonialsContent">
                    <img className="QuoteImg" src="https://www.pngall.com/wp-content/uploads/4/Quotation-Symbol-PNG.png" />
                    <p>[Ronan] is willing to think analytically and
                        creatively about problems and their possible solutions while being tremendously disciplined and
                        attentive to his work.</p>
                </div>
                <p>-Dr. Sandino Vargas-Perez, Professor of Computer Science</p>
            </div>
        );
    }
}

export default Testimonials;