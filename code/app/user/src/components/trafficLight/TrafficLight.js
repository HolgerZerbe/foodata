import React from 'react'
import './TrafficLight.css'

 function TrafficLight(props) {


    return (
    <div id="traffic-light">
            {props.blink==="red" ? <div id="redblink" /> :<div id="red"></div>}
            {props.blink==="yellow" ? <div id="yellowblink" /> :<div id="yellow"></div>}
            {props.blink==="green" ? <div id="greenblink" /> :<div id="green"></div>}

    </div>
    )
}

export default TrafficLight;