import React, { Component } from 'react'
import './Footer.css'
import {Link} from 'react-router-dom';



class Footer extends Component {
    render() {
        return (
            <div className="footerjs">
                <div className="row row_links ">
                    <div className="features">
                            <h1>Features:</h1>
                            <ul className="list-unstyled quick-links">
                                <li><Link  className="fa" to="/">>> Home</Link></li>
                                <li><Link  className="fa" to="/about">>> About</Link></li>
                            </ul>
                    </div>
                    <div className="logo">
                        <Link to="/">
                            <img src="../logo_footer_21.png" alt="logo" />
                        </Link>
                    </div>
                    <div className="features">
                            <h1>Address:</h1>
                            <ul className="list-unstyled">
                                <li> DCI Digital Career Institute, Berlin</li>
                                <li>Vulkanstraße 1, 10367 Berlin</li>
                            </ul>
                           
                         
                    </div>
                </div>
                <div className="row">
                        <ul className="list-unstyled list-inline social text-center">
                            <li ><Link to="/about"><i className="fa fa-facebook"></i></Link></li>
                            <li ><Link to="/about"><i className="fa fa-twitter"></i></Link></li>
                            <li ><Link to="/about"><i className="fa fa-instagram"></i></Link></li>
                            <li ><Link to="/about"><i className="fa fa-google-plus"></i></Link></li>
                            <li ><Link to="/about"><i className="fa fa-envelope"></i></Link></li>
                        </ul>
                </div>
            </div>
        )
    }
}

export default Footer