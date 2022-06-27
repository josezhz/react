import React from "react";
import './Dice.css'

export default class Dice extends React.Component {
    state = {
        number: parseInt(Math.ceil(Math.random()*6))
    }

    roll = () => {
        this.setState({
            number: parseInt(Math.ceil(Math.random()*6))
        })
    }

    render() {
        return (
            <React.Fragment>
                <div onClick={this.roll}>{this.state.number}</div>
            </React.Fragment>
        )
    }
}