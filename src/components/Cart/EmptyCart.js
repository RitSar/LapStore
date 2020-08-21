import React, { Component } from 'react'

export default class EmptyCart extends Component {
    render() {
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-10 mx-auto text-center">
                    <h1 className="font-weight-bold">Your cart is currently empty</h1>
                    </div>
                </div>
            </div>
        )
    }
}


// 04:29:28