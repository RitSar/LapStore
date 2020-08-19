import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from './button';

export default class Navbar extends Component {
    render() {
        return (
            
            <NavWrapper className="navbar navbar-light">
                <div className="container">
                <Link to='/'>
                    {/* <p className="navbar-brand">Riddle Store</p> */}
                    <img src={Logo} alt="Logo" width="30px" className="navbar-brand"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5"><Link to='/' className="nav-link">Products</Link></li>
                </ul>
                <Link to='/cart' className="ml-auto">
                    <ButtonContainer><i className="fa fa-shopping-cart mr-2"></i>My Cart</ButtonContainer>
                </Link>
                </div>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
background: crimson;
.nav-link{
    color: gold !important;
    font-size: 1.3rem; 
}
`