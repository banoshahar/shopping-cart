import React, { useState } from "react";
import {
    Navbar, NavbarBrand, Nav, Collapse, NavItem,
    Button  ,NavbarToggler
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import useCartHooks from '../../redux/Shopping/Cart/cart-actions';

const Header = () => {
    const [isNavOpen ,toggleNav] = useState(false);
    const handleShow = () => toggleNav(temp => !temp);
    const {cartTotal} = useCartHooks()
    return (
        <div className="nav--container">
        <div className="container--lg">  
            <Navbar dark expand="lg" className="main--navbar"> 
                <NavbarToggler onClick={handleShow} />
                    <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Shopping Cart' /></NavbarBrand>
                    <Collapse isOpen={isNavOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                            <NavLink className="nav-link" to='/cart'>
                                <div className="cart--icon">
                                    <span className="fa fa-shopping-cart"></span>
                                    <div className="cart--total"><span className="cart--total-qt">{cartTotal.count}</span></div>
                                </div>
                                </NavLink>
                            </NavItem>
                            
                        </Nav>
                    </Collapse>
            </Navbar>
        </div>
        </div>   
    );

}
export default Header;