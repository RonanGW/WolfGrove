import React, { Component } from 'react';
import './App.css';

class Testimonials extends Component {
    render() {
        return (
            <div className="Testimonials">
                <h2>Testimonials</h2>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <img style={{ width: "32px", height: "32px" }} src="https://www.pngall.com/wp-content/uploads/4/Quotation-Symbol-PNG.png" />
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