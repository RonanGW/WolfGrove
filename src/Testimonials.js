import React, { Component } from 'react';
import './App.css';

class Testimonials extends Component {

    /* Default Constructor for About section */
    constructor(props) {
        super(props);
    }

    render() {

        if (this.props.data) {
            var testmonial = this.props.data.testimonials.map(function (testimonials) {
                return <div>
                    <div className="TestimonialsContent">
                        <img className="QuoteImg" src="https://www.pngall.com/wp-content/uploads/4/Quotation-Symbol-PNG.png" />
                        {testimonials.quote}
                    </div>
                    - {testimonials.person}
                </div>
            })
        }

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
                {testmonial}
            </div>
        );
    }
}

export default Testimonials;