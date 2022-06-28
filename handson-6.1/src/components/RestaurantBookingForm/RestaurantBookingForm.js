import React from 'react';

export default class RestaurantBookingForm extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        seating: '',
        smoking: 'smoking',
        appetizer: []
    }

    seating = [
        {
            display: "Outdoors",
            value: "outdoors"
        },
        {
            display: "Indoors",
            value: "indoors"
        },
        {
            display: "VIP Indoors",
            value: "vip-indoors"
        }
    ]

    smoking = [
        {
            display: "Smoking",
            value: "smoking"
        },
        {
            display: "Non Smoking",
            value: "non-smoking"
        }
    ]

    appetizer = [
        {
            display: "Raw Fishes",
            value: "raw-fishes"
        },
        {
            display: "Salad",
            value: "salad"
        },
        {
            display: "Fried Cuttlefish",
            value: "fried-fish"
        },
        {
            display: "Peanuts",
            value: "peanuts"
        }
    ]

    updateState = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    updateAppetizer = e => {
        let appetizerCopy = this.state.appetizer.slice()
        if (!appetizerCopy.includes(e.target.value)) {
            appetizerCopy.push(e.target.value)
        } else {
            let indexToRemove = appetizerCopy.indexOf(e.target.value)
            appetizerCopy = [
                ...appetizerCopy.slice(0, indexToRemove),
                ...appetizerCopy.slice(indexToRemove + 1)
            ]
        }
        this.setState({
            appetizer: appetizerCopy
        })
    }

    render() {
        return (
            <React.Fragment>
                <h1>Restaurant Booking Form</h1>
                <div>
                    <label>First Name: </label>
                    <input name="firstName" type="text" onInput={this.updateState} />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input name="lastName" type="text" onInput={this.updateState} />
                </div>
                <div>
                    <label>Seating: </label>
                    {this.seating.map(s => {
                        return (
                            <div key={s.value}>
                                <input type="radio" name="seating" value={s.value} onChange={this.updateState} checked={this.state.seating === s.value} />{s.display}
                            </div>
                        )
                    })}
                </div>
                <div>
                    <label>Smoking: </label>
                    <select name="smoking" onChange={this.updateState}>
                        {this.smoking.map(s => {
                            return (
                                <option value={s.value} key={s.value}>{s.display}</option>
                            )
                        })}
                    </select>
                </div>
                <div>
                    <label>Appetizer: </label>
                    {this.appetizer.map(a => {
                        return (
                            <div key={a.value}>
                                <input type="checkbox" name="appetizer" value={a.value} onChange={this.updateAppetizer} checked={this.state.appetizer.includes(a.value)} />{a.display}
                            </div>
                        )
                    })}
                </div>
            </React.Fragment>
        )
    }
}