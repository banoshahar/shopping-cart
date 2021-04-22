import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import { Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div className="App">
            <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="danger" variant="dark">
                <ReactBootStrap.Navbar.Brand href="/">Shoping Cart</ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootStrap.Nav className="mr-auto">
                        <Link to="/Items">
                            <ReactBootStrap.Nav.Link href="#Items">Items</ReactBootStrap.Nav.Link>
                        </Link>
                        <Link to="/Cart">
                            <ReactBootStrap.Nav.Link href="#Cart">Cart</ReactBootStrap.Nav.Link>
                        </Link>
                       
                    </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>
        </div>
    )
}

export default NavBar;