import React from "react";

export default class SurveyForm extends React.Component {
    state = {
        name: '',
        color: '',
        country: 'singapore',
        fruits: []
    }

    updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    updateFruits = (event) => {
        let fruitsCopy = this.state[event.target.name]

        if (!this.state[event.target.name].includes(event.target.value)) {
            fruitsCopy = [...this.state[event.target.name], event.target.value]
        } else {
            fruitsCopy = this.state[event.target.name].filter((fruit) => {
                return fruit !== event.target.value
            })
        }

        this.setState({
            [event.target.name]: fruitsCopy
        })
    }

    render() {
        return (
            <React.Fragment>
                <h1>Survey Form</h1>
                <div>
                    <label>Name: </label>
                    <input name="name" type="text" value={this.state.name} onChange={this.updateFormField} />
                </div>
                <div>
                    <label>Favourite Colour: </label>
                    <input name="color" type="radio" value="red" checked={this.state.color === 'red'} onChange={this.updateFormField} />Red
                    <input name="color" type="radio" value="blue" checked={this.state.color === 'blue'} onChange={this.updateFormField} />Blue
                    <input name="color" type="radio" value="green" checked={this.state.color === 'green'} onChange={this.updateFormField} />Green
                </div>
                <div>
                    <label>Country: </label>
                    <select name="country" value={this.state.country} onChange={this.updateFormField}>
                        <option value="singapore">Singapore</option>
                        <option value="malaysia">Malaysia</option>
                        <option value="indonesia">Indonesia</option>
                    </select>
                </div>
                <div>
                    <label>Fruits: </label>
                    <input type="checkbox" name="fruits" value="apple" checked={this.state.fruits.includes('apple')} onChange={this.updateFruits} />Apple
                    <input type="checkbox" name="fruits" value="orange" checked={this.state.fruits.includes('orange')} onChange={this.updateFruits} />Orange
                    <input type="checkbox" name="fruits" value="pineapple" checked={this.state.fruits.includes('pineapple')} onChange={this.updateFruits} />Pineapple
                    <input type="checkbox" name="fruits" value="durian" checked={this.state.fruits.includes('durian')} onChange={this.updateFruits} />Durian
                </div>
                <button>Submit</button>
            </React.Fragment>
        )
    }
}