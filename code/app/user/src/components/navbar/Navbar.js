import React, { Component } from 'react'
import './Navbar.css'
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// import StartPage from './components/startPage/StartPage';
// import StartPage from './components/startPage/StartPage';
// import StartPage from './components/startPage/StartPage';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
               Hallo von Navbar.js 

            
                <Link className="link" to="/">Startpage</Link>
                <Link className="link" to="/about">About</Link>
                <Link className="link" to="/scan">Scannen</Link>
                <Link className="link" to="/search">Produkt Suchen</Link>
                <Link className="link" to="/calc">Selbst berechnen</Link>
            

            </div>
        )
    }
}

export default Navbar