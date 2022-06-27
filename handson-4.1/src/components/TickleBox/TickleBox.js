import React from 'react';
import './TickleBox.css';

export default class TickleBox extends React.Component {
    state = {
        text: ""
    }

    mouseOver = () => {
        this.setState({
            text: "that tickles!"
        })
    }

    mouseOut = () => {
        this.setState({
            text: ""
        })
    }

    render() {
        return (
            <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>{this.state.text}</div>
        )
    }
}