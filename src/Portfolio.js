import React, { Component } from 'react';
import './App.css';

class Portfolio extends Component {

    Redirect = (link) => {
        window.location.assign(link);
    }

    render() {
        return (
            <div className="Portfolio">
                <h1>Portfolio</h1>
                <div className="Portfolio-Content">
                    <div className="Project-Button-Container" >
                        <button style={{ background: "url('https://media.istockphoto.com/photos/sunlight-through-the-coniferous-forest-picture-id148973567?k=20&m=148973567&s=612x612&w=0&h=MqB824yiU7JJHI2JV5AZPW5FW5IAyG5hg4mRd9NuLmA=')" }} className="Project-Button" onClick={this.Redirect.bind(this, "")}>WolfGrove</button>
                    </div>
                    <div className="Project-Button-Container" >
                        <button style={{ background: "url('https://videohive.img.customer.envatousercontent.com/files/2f4e450e-c307-48e7-810b-d61ec2367de5/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=4e2f0efc76db407633c1a8db14a0b94c')" }} className="Project-Button" onClick={this.Redirect.bind(this, "https://github.com/pcdslab/PHYNGSD")}>PhyNGSD</button>
                    </div>
                    <div className="Project-Button-Container" >
                        <button style={{ background: "url('https://media.istockphoto.com/photos/green-forest-picture-id1173733640?b=1&k=20&m=1173733640&s=170667a&w=0&h=qVsBTxqYFPqZZkRr1OzHu-92jNtscIrST0UZin26CQU=')" }} className="Project-Button" onClick={this.Redirect.bind(this, "https://github.com/langstonhowley/seminar-webpage")}>Bio-Loss</button>
                    </div>
                    <div className="Project-Button-Container" >
                        <button className="Project-Button" style={{ backgroundColor: "#DFEAE2", color: "#18191A" }} onClick={this.Redirect.bind(this, "https://github.com/GenesisMM/TIPO")}>TIPO</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;