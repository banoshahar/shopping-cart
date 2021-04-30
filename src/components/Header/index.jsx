import React, { useState } from "react";
import {
    Navbar, NavbarBrand, Nav, Collapse, NavItem,
    Button, NavbarToggler
} from 'reactstrap';
import { Link } from "react-router-dom";
import { NavLink, useHistory } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import useCartHooks from '../../redux/Cart/cart-actions';

const Header = () => {
    const [isNavOpen, toggleNav] = useState(false);
    const handleShow = () => toggleNav(temp => !temp);
    const { cartTotal } = useCartHooks()
    const history = useHistory()
    return (
        <div className="nav--container">
            <div className="container--lg">
                <Navbar dark expand="lg" className="main--navbar">
                    <NavbarToggler onClick={handleShow} />
                    <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Shopping Cart' /></NavbarBrand>

                    <div className="hdr--center d-lg-flex d-none alig-items-center">
                        <Link to={'/login'}>
                        <Button className="btn hdr--btn login--btn">Login</Button>
                        </Link>
                        <Link to={'/register'}>
                        <Button className="btn hdr--btn sigUp--btn">Sign Up</Button>
                        </Link>
                        <Button className="btn hdr--btn summary--btn" onClick={() => history.push('/cart')}>View summary</Button>
                    </div>
                    <div className="hdr--left d-flex alig-items-center">
                        <div className="cart--icon">
                            <span className="fa fa-shopping-cart"></span>
                            <div className="cart--total"><span className="cart--total-qt">{cartTotal.count}</span></div>
                        </div>
                        <Dropdown className="drpDn--main">
                            <Dropdown.Toggle>
                                <div className="drpDn--img"><img src="assets/images/alberto.png" /></div>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#"></Dropdown.Item>
                                <Dropdown.Item href="#">Username Username Username Username Username</Dropdown.Item>
                                <Dropdown.Item href="#" className="text-danger"><i className="fa fa-sign-out-alt text-danger"></i>Log out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <Collapse isOpen={isNavOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {/* <NavItem>
                            <NavLink className="nav-link" to='/cart'>
                                <div className="cart--icon">
                                    <span className="fa fa-shopping-cart"></span>
                                    <div className="cart--total"><span className="cart--total-qt">{cartTotal.count}</span></div>
                                </div>
                                </NavLink>
                            </NavItem> */}
                            <div className="nav--sm-btn d-flex flex-column alig-items-center">
                                <Button className="btn hdr--btn login--btn">Login</Button>
                                <Button className="btn hdr--btn sigUp--btn">Sign Up</Button>
                                <Button className="btn hdr--btn summary--btn">View summary</Button>
                            </div>
                        </Nav>
                    </Collapse>

                </Navbar>
            </div>
        </div>
    );

}
export default Header;