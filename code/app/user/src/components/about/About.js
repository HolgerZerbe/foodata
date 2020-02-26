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
            img:"../hans.png",
            description:"FULL-STACK DEVELOPER",
            img_ean:"../barcode_transparent_hans.png",
            email:"hannsheinrich@googlemail.com",
            github:"https://github.com/Bearleener",
            linkedin:"https://www.linkedin.com/in/hans-heinrich-klauss/"
        },
        {
            name: "Holger",
            img:"../holger.png",
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
                <h1 className="about_div_h1"> Team foodata </h1>
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
                <div className="line"></div>
                <div>
                        <h2 className="headline-text">Über die Entwicklung dieser App </h2>
                        <p>
                            Diese App ist das Abschlussprojekt unserer Ausbildung zum Web-Developer am  Digital Career Institute (DCI) Berlin.
                        </p>
                        <p>
                            Unser Ziel war, eine Anwendung zu programmieren die einen praktischen Nutzen für alle Menschen hat. Sie sollte responsiv und von allen Nutzern – egal ob auf dem Smartphone oder dem Desktop – auf einfache, schnelle und intuitive Weise zu bedienen sein.
                        </p>
                        <br/>
                        <div className="line"></div>
                        <div className="code-tools">
                                <h2 className="headline-text headline-text-zwei">Diese Technologien wurden verwendet:</h2>
                                <div className="code-tools-list">
                                    <div className="code-tools-links">
                                        <ul>
                                            <li> HTML, CSS und JavaScript</li>
                                            <li> ReactJS mit Redux und Thunk Middleware</li>
                                            <li> Router und Switch zum Wechseln zwischen den Komponten</li>
                                        </ul>
                                    </div>
                                    <div className="code-tools-rechts">
                                </div>
                                    <ul>
                                        <li> NodeJs</li>
                                        <li> MongoDB mit einem Mongoose Schema</li>
                                        <li> FETCH um HTML requests zu händeln.</li>
                                    </ul>
                                </div>
                            </div>

                            </div>
                </div>
            </div>
        )
    }
}

export default About;