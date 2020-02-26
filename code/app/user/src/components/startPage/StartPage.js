import React, { Component } from 'react'
import './StartPage.css'

class StartPage extends Component {
    render() {
        return (
            <div className="startPage">
                <div className="welcome">Willkommen bei </div>
                <div className="startPageLogo"><img src="../logo_20.png" alt="logo" /></div>
                <div className="welcome">Deiner Lebensmittelampel-App </div>
            </div>
        )
    }
}

export default StartPage

