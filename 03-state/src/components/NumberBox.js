import React from 'react'

class NumberBox extends React.Component {
    state = {
        count: this.props.initialValue
    }

    render() {
        return (
            <div style={{
                border: "1px solid black",
                padding: "10px",
                width: "20px"
            }}>
                {this.state.count}
            </div>
        )
    }
}

export default NumberBox