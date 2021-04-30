import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';


function Footer(props) {
    return (
        <div className="main--footer">
            <div className="container--lg">
                <Row>
                    <Col md="4" sm="6">
                        <div className="ftr--content">
                        <h3 className="sm--hd font--semiBold dark--text mb-3">Address</h3>
                        <address className="sm--para grey--text">
                            121, Clear Water Bay Road,<br/>
                            Clear Water Bay,<br/> 
                            Kowloon HONG KONG</address>
                      </div>
                    </Col>
                    <Col md="4" sm="6">
                        <div className="ftr--content">
                        <h3 className="sm--hd font--semiBold dark--text mb-3">Contact Us</h3>
                            <div className="sm--para grey--text mb-2"><i className="fa fa-phone mr-2"></i> +852 1234 5678</div>
                            <div className="sm--para grey--text mb-2"><i className="fa fa-fax mr-2"></i> +852 8765 4321</div>
                            <div className="sm--para grey--text"><i className="fa fa-envelope mr-2"></i> <a href="#"
                            className="sm--para grey--text text-decoration-none">
                                confusion@food.net</a></div>
                        </div>        
                    </Col>
                    <Col md="4" sm="6" xs="12">
                        <div className="mt-md-0 mt-3 ftr--content">
                        <h3 className="sm--hd font--semiBold dark--text mb-3">Join Us</h3>
                            <div className="d-flex align-items-center">
                                <a className="social--link social--fb text-decoration-none" href="http://www.facebook.com"><i className="fa fa-facebook"></i></a>
                                <a className="social--link social--ldIn text-decoration-none" href="http://www.linkedin.com"><i className="fa fa-linkedin"></i></a>
                                <a className="social--link social--insta text-decoration-none" href="http://www.instagram.com"><i className="fa fa-instagram"></i></a>
                                <a className="social--link social--twt text-decoration-none" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                                
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="ftr--cp">
                <Row>
                    <Col xs="12">
                        <p className="text-center sm--para blue--text">© Copyright 2018 Ristorante Con Fusion</p>
                    </Col>
                </Row>
                </div>
            </div>
        </div>
    )
}

export default Footer;