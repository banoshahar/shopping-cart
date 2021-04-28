import  { useSelector} from 'react-redux';
import React, { useState, useEffect } from "react";
import {
    Navbar, NavbarBrand, Nav, Collapse, NavItem,
    Button  ,NavbarToggler
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [cartCount, setCartCount] = useState(0);
    
    const cart = useSelector(state => state.shop.cart);

    useEffect(() => {
        let count = 0;
        cart.forEach((item) => {
            count += item.qty;
        });

        setCartCount(count);
    }, [cart, cartCount]);

    const props = {
        isNavOpen: false,
    };

    const toggleNav = () => {
        props.isNavOpen = !this.state.isNavOpen;
    }
    return (
        <>
            <Navbar dark expand="md">
                <div className="container">
                <NavbarToggler onClick={toggleNav} />
                    <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Shopping Cart' /></NavbarBrand>
                    <Collapse isOpen={props.isNavOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                            <NavLink className="nav-link" to='/cart'>
                                <Button outline ><span className="fa fa-sign-in fa-lg"></span> Cart
                                    <div>{cartCount}</div>
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