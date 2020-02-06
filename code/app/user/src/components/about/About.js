import React, { Component } from 'react'
import './About.css'
import Card from "../card/Card"


 class About extends Component {

    state = {
        devs : [{
            name: "Zohir",
            img:"../zohir.png",
            img_ean:"../barcode_transparent_Zohir_1.png",
            description:"FRONT-END DEVELOPER",
            email:"z.alhammoud@icloud.com",
            github:"https://github.com/Alhammoud",
            linkedin:"https://www.linkedin.com/in/zohir-alhammoud/"
        },
        {
            name: "Hans",
            img:"../hans_1.png",
            description:"FULL-STACK DEVELOPER",
            img_ean:"../barcode_transparent_hans.png",
            email:"hannsheinrich@googlemail.com",
            github:"https://github.com/Bearleener",
            linkedin:"https://www.linkedin.com/in/hans-heinrich-klauss/"
        },
        {
            name: "Holger",
            img:"../holger.jpg",
            description:"FULL-STACK DEVELOPER",
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
                    description={element.description}
                    img_ean={element.img_ean} 
                    email={element.email} 
                    github={element.github} 
                    linkedin={element.linkedin}
                    />)}
                </div>
                <div className="about_text">
                    <h2>About Foodata </h2><br/>
                        <div>
                            <strong>Foodata – Deine Lebenmittel-Ampel-App</strong>
                            <br/>is a web application which gives you the opportunity to scan products and show their nurtiscore,so you can easily decide, which food can be part of your healty eating.<br/>
                            Users have also the opportunity to find products by productname 
                            or to calculate the nutriscore by themselves if they ar not online.<br/>
                            And of course this app is responsive for using it on your phone.<br/><br/>
                            For this school project, the following technologies were used:<br/>
                            <ul>
                                <li>- ReactJS with the Redux.</li>
                                <li>- JavaScript including HTML and CSS</li>
                                <li>- NodeJs and a Mongoose Schema to interacting with the MongoDB database</li>
                                <li>- NodeJS Express</li>
                                <li>- Thunk middleware</li>
                                <li>- Router and Switch to switch between components</li>
                                <li>- FETCH to perform HTML requests.</li>
                            </ul>
                            </div>
                </div>
            </div>
        )
    }
}

export default About;