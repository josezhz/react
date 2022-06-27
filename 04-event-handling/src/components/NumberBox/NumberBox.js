import React from "react";
import './NumberBox.css'

export default class NumberBox extends React.Component {
    state = {
        count: this.props.initialValue
    }

    click = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <React.Fragment>
                <div onClick={this.click} style={{
                    border: "1px solid black",
                    padding: "10px",
                    width: "20px"
                }}>{this.state.count}</div>
                <p>This number is <b>{this.state.count % 2 === 0 ? "even" : "odd"}</b></p>
            </React.Fragment>
        )
    }
}