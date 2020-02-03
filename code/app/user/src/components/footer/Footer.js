import React, { Component } from 'react'
import './Footer.css'
import {Link} from 'react-router-dom';



class Footer extends Component {
    render() {
        return (
            <div>
                <section id="footer">
                    <div className="container">
                        <div className="row row_links ">
                        <div >
                                <h1>Features</h1>
                                <ul className="list-unstyled quick-links">
                                    <li><Link  className="fa fa-angle-double-right" to="/about">Home</Link></li>
                                    <li><Link  className="fa fa-angle-double-right" to="/about">About</Link></li>
                                </ul>
                            </div>

                            <div className="logo">
                            <Link to="/about"><img src="../foodata_logo.png" alt="logo" /></Link>
                            </div>

                            <div className="address">
                                <h1>Address: </h1><br/>
                                    DCI Digital Career Institute, Berlin<br/>
                                    Vulkanstraße 1, 10367 Berlin<br/><br/>
                                    030 364286190<br/><br/>
                                    info@devugees.org<br/>    
                            </div>

                           
                           

                            
                                                        
                        </div>
                        <br />
                        <div className="row">
                            <div >
                                <ul className="list-unstyled list-inline social text-center">
                                    <li ><Link to="/about"><i className="fa fa-facebook"></i></Link></li>
                                    <li ><Link to="/about"><i className="fa fa-twitter"></i></Link></li>
                                    <li ><Link to="/about"><i className="fa fa-instagram"></i></Link></li>
                                    <li ><Link to="/about"><i className="fa fa-google-plus"></i></Link></li>
                                    <li ><Link to="/about"><i className="fa fa-envelope"></i></Link></li>
                                </ul>
                            </div>
                        <br />
                        </div>		
                    </div> 
                </section>
            </div>
        )
    }
}

export default Footer