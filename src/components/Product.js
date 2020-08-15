import React, { Component } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import PropTypes from 'prop-types';

export default class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="img-container p-5" onClick={()=>console.log('image container clicked.')}>
                        <Link to='/details'>
                            <img src={img} alt="" className="card-img-top"/>
                        </Link>
                        <button className="cart-btn" disabled={inCart?true:false} onClick={()=>(console.log('added to cart.'))}>
                            {inCart?(<p className = "mb-0" disabled>In Cart</p>):<i className="fa fa-cart-plus" />}
                        </button>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {title}
                        </p>
                        <h5 className="font-italic mb-0">
                            <span className="mr-1">₹</span>
                            {price}
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
};

const ProductWrapper = styled.div`
font-family: Bahnschrift;
.card{
    border: transparent;
    transition: all 0.5s linear;
}
.card-footer{
    background: transparent;
    border-top: transparent;
    transition: all 0.5s linear;
}
&:hover{
    .card{
        border: 0.04 solid grey;
        box-shadow: 2px 2px 5px 0px grey;
    }
    .card-footer{
        background: aliceblue;
    }
}
.img-container{
    position: relative;
    overflow: hidden;
}
.card-img-top{
    transition: all 0.5s linear;
}
.img-container:hover .card-img-top{
    transform: scale(1.1);
}
.cart-btn{
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: gold;
    border: none;
    color: green;
    border-radius: 0.5rem 0 0 0;
    font-size: 1.5rem;
    transform: translate(100%, 100%);
    transition: all 0.3s linear;
}
.img-container:hover .cart-btn{
    transform: translate(0, 0);
}
.cart-btn:hover{
    color: gold;
    background-color: green;
}

`