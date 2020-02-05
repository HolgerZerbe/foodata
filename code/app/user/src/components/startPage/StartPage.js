import React, { Component } from 'react'
import './StartPage.css'

class StartPage extends Component {
    render() {
        return (
            <div className="startPage">
                <p className="welcome">Willkommen bei </p>
                <div className="startPageLogo"><img src="../foodata_logo.png" alt="logo" /></div>
                <p className="welcome">Deiner Lebensmittelampel-App </p>
                
            </div>
        )
    }
}

export default StartPage

