import React from 'react'
import './AlertBox.css'

export default class AlertBox extends React.Component {
    state = {
        message: this.props.message
    }
    render() {
        return (
            <div>{this.state.message}</div>
        )
    }
}