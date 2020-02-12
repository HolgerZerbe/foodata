import React, { Component } from 'react'
import './NotFound.css'

class NotFound extends Component {
    render() {
        return (
            <div className="notfound_div">
            <div id="error">
            <p id="error404">404 </p>
                <p id="o">E</p>
                <p id="o2">r</p>
                <p id="p">r</p>
                <p id="s">o</p>
                <p id="ausrufezeichen">r </p>
            </div>
            <div className="img_not_found">
                <img className="img_ele" src='3d_man_kein_seite_gefunden.png'/>
            </div>
        </div>
        )
    }
}

export default NotFound