import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        return (
            <div className="container">
                <div className="text-center mx-auto pt-5">
                <h3>Error 404: Page not found.</h3>
                <h4 className="oswald">The requested URL <span className="text-danger"> {this.props.location.pathname} </span> was not found.</h4>
                </div>

            </div>
        )
    }
}
