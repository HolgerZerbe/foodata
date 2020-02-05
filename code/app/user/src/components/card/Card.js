import React, { Component } from 'react'
import './Card.css'


function Card (props){
        return (
            <div className="sep">
                    <div className="image-hover img-opacity">
                        <img src={props.img_ean} className="img-1"/>
                        <img src={props.img} className="img-2"/>
                    </div>
                    <h2>{props.name}</h2>
            </div>
        )
}
export default Card;