import React, { Component } from 'react'
import './Footer.css'
import {Link} from 'react-router-dom';



class Footer extends Component {
    render() {
        return (
            <section id="footer">
            <div className="container_footer">
                <div className="row row_links ">
                    <div className="features">
                            <h1>Features</h1>
                            <ul className="list-unstyled quick-links">
                                <li><Link  className="fa" to="/about">>> Home</Link></li>
                                <li><Link  className="fa" to="/about">>> About</Link></li>
                            </ul>
                    </div>
                    <div className="logo">
                        <Link to="/about">
                            <img src="../foodata_logo_version_1.png" alt="logo" />
                        </Link>
                    </div>
                    <div className="address">
                            <h1>Address: </h1>
                            <div className="text_addresse">
                               DCI Digital Career Institute, Berlin<br/>
                               Vulkanstraße 1, 10367 Berlin<br/>
                               030 364286190<br/>
                            </div>
                         
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
            </section>
        )
    }
}

export default Footer