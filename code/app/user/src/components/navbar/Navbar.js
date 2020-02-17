import React, { Component } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';


class Navbar extends Component {
    render() {
        return (
            <div className="navbar">

            
                <Link className="linkNavbar ln1" to="/scan">Scannen</Link>
                <Link className="linkNavbar ln2" to="/search">Produkt Suchen</Link>
                <Link className="linkNavbar ln3" to="/calc">Selbst berechnen</Link>
            

            </div>
        )
    }
}

export default Navbar