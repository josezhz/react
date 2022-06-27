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

    color = () => {
        if (this.state.number === 1) {return "red"}
        else if (this.state.number === 6) {return "green"}
        else {return "black"}
    }

    render() {
        return (
            <React.Fragment>
                <div onClick={this.roll} style={{color: this.color()}}>{this.state.number}</div>
            </React.Fragment>
        )
    }
}