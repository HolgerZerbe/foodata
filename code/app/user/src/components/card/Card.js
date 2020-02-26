import React from 'react'
import './Card.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAt } from '@fortawesome/fontawesome-free-solid'
import { faGithub ,faLinkedin } from '@fortawesome/free-brands-svg-icons'


function Card (props){
    
        return (
            <div className="sep">
                    <div className="image-hover img-opacity">
                        <img src={props.img_ean} className="img-1" alt="EAN"/>
                        <img src={props.img} className="img-2" alt="Person"/>
                    </div>
                    <h2>{props.name}</h2>
                    <h4 className="dev_description">{props.description}</h4>
                    <div className="font_icons">
                        <a className="icon" href={props.github}>          <FontAwesomeIcon icon={faGithub}   size="3x"  color="black" /></a>
                        <a className="icon" href={props.linkedin}>        <FontAwesomeIcon icon={faLinkedin} size="3x"  color="black" /></a>
                        <a className="icon" href={"mailto:"+ props.email}><FontAwesomeIcon icon={faAt}       size="3x"  color="black" /></a> 
                        
                    </div>
            </div>
        )
}
export default Card;