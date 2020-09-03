import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer } from './button';

export default class Navbar extends Component {
    render() {
        return (

            <NavWrapper className="navbar navbar-light">
                <div className="container">

                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item"><Link to='/' className="nav-link"><h3>ReStore</h3></Link></li>
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
background: black;
.nav-link{
    color: cyan !important;
    font-size: 1.3rem; 
}
`