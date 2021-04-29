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
        <>
            <Navbar dark expand="md">
                <div className="container">
                <NavbarToggler onClick={handleShow} />
                    <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Shopping Cart' /></NavbarBrand>
                    <Collapse isOpen={isNavOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                            <NavLink className="nav-link" to='/cart'>
                                <Button outline ><span className="fa fa-sign-in fa-lg"></span> Cart
                                    <div>{cartTotal.count}</div>
                                </Button>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>

        </>
    );

}
export default Header;