import React, { Component } from 'react';

export default class Main extends Component {
    render() {
        return (
            <div className = "row p-4" style = {{height: "500px", width: "1050px", backgroundColor: "#e06666"}}>
                {this.props.children}
            </div>
        )
    }
}