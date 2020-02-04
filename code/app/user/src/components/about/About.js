import React, { Component } from 'react'
import './About.css'


 class About extends Component {
    render() {
        return (
            <div className="sep">
                    <div className="image-hover img-opacity">
                        <img src="../barcode_transparent.png" className="img-1"/>
                        <img src="../2.jpg" className="img-2"/>
                    </div>
                    <h2>Name</h2>
            </div>
        )
    }
}

export default About;