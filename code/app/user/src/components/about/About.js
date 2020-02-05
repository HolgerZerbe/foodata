import React, { Component } from 'react'
import './About.css'
import Card from "../card/Card"


 class About extends Component {

    state = {
        devs : [{
            name: "Zohir",
            img:"../zohir.png",
            img_ean:"../barcode_transparent_Zohir_1.png",
            email:"z.alhammoud@icloud.com",
            github:"https://github.com/Alhammoud",
            linkedin:"https://www.linkedin.com/in/zohir-alhammoud/"
        },
        {
            name: "Hans",
            img:"../hans_1.png",
            img_ean:"../barcode_transparent_hans.png",
            email:"hannsheinrich@googlemail.com",
            github:"https://github.com/Bearleener",
            linkedin:"https://www.linkedin.com/in/hans-heinrich-klauss/"
        },
        {
            name: "Holger",
            img:"../holger.jpg",
            img_ean:"../barcode_transparent_holger.png",
            email:"Holger.Zerbe@web.de",
            github:"https://github.com/HolgerZerbe",
            linkedin:"https://www.linkedin.com/in/holger-zerbe"
        }
    ]
    }

    render() {
        return (
            <div className="about_div">
                <h1> Team Foodata </h1>
                <div className="photo_div">
                    {this.state.devs.map((element, index) => 
                    <Card 
                    key={index} 
                    name={element.name} 
                    img={element.img} 
                    img_ean={element.img_ean} 
                    email={element.email} 
                    github={element.github} 
                    linkedin={element.linkedin}
                    />)}
                </div>
            </div>
        )
    }
}

export default About;