import React, { Component } from 'react'
import './Footer.css'
import {Link} from 'react-router-dom';



class Footer extends Component {
    render() {
        return (
            <div>
                Hallo von Footer.js
                <br />
                <Link to="/about">About</Link>

            </div>
        )
    }
}

export default Footer