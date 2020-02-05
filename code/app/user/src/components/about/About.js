import React, { Component } from 'react'
import './About.css'
import Card from "../card/Card"

 class About extends Component {

    state = {
        devs : [{
            name: "Zohir",
            img:"../2.jpg",
            img_ean:"../barcode_transparent_Zohir.png",
            email:"",
            linkedin:"",
        },
        {
            name: "Hans",
            img:"../2.jpg",
            img_ean:"../barcode_transparent_hans.png",
            email:"",
            linkedin:"",
        },
        {
            name: "Holger",
            img:"../2.jpg",
            img_ean:"../barcode_transparent_holger.png",
            email:"",
            linkedin:"",
        }
    ]
    }

    render() {
        return (
            <div className="about_div">
                <h1> Team Foodata </h1>
                <div className="photo_div">
                    {this.state.devs.map((element, index) => <Card key={index} name={element.name} img={element.img} img_ean={element.img_ean
                    } />)}

                </div>
                <div><i className="fab fa-github"></i></div>
            </div>
        )
    }
}

export default About;