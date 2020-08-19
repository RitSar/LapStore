import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './button'

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    // console.log(value.detailProduct);
                    const {id, company, img, info, price, title, inCart} = value.detailProduct;
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto my-5 text-center">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt=""/>
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <h2>Model: {title}</h2>
                                        <h4 className="mt-3 mb-2 text-muted text-capitalize">Made By: {company}</h4>
                                        <h4>Price: ₹{price}</h4>
                                        <h5 className="text-capitalize font-weight-bold mt-3 mb-0">some info about the product: </h5>
                                        <p className="text-muted lead"> {info} </p>

                                        <div>
                                            <Link to="/">
                                                <ButtonContainer>Back to Products</ButtonContainer>
                                            </Link>
                                            <ButtonContainer cart diasbled={inCart?true:false} onClick={()=>{
                                                value.addToCart(id);
                                                value.openModal(id);
                                            }}>
                                                {inCart? "In Cart" : "Add to Cart"}
                                            </ButtonContainer>
                                        </div>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </ProductConsumer>
        )
    }
}
