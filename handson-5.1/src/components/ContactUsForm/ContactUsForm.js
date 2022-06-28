import React from "react";

export default class ContactUsForm extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        enquiry: '',
        country: 'singapore'
    }

    updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    updateFruits = (event) => {
        let currentFruits = this.state[event.target.name]
        let modifiedFruits = currentFruits

        if (!currentFruits.includes(event.target.value)) {
            modifiedFruits.push(event.target.value)
        } else {
            modifiedFruits = currentFruits.filter((fruit) => {
                return fruit !== event.target.value
            })
        }

        this.setState({
            [event.target.name]: modifiedFruits
        })
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <label>First Name: </label>
                    <input name="firstName" type="text" value={this.state.firstName} onChange={this.updateFormField} />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input name="lastName" type="text" value={this.state.lastName} onChange={this.updateFormField} />
                </div>
                <div>
                    <label>Enquiry: </label>
                    <input name="enquiry" type="radio" value="support" checked={this.state.enquiry === 'support'} onChange={this.updateFormField} />Support
                    <input name="enquiry" type="radio" value="sales" checked={this.state.enquiry === 'sales'} onChange={this.updateFormField} />Sales
                    <input name="enquiry" type="radio" value="marketing" checked={this.state.enquiry === 'marketing'} onChange={this.updateFormField} />Marketing
                </div>
                <div>
                    <label>Country: </label>
                    <select name="country" value={this.state.country} onChange={this.updateFormField}>
                        <option value="singapore">Singapore</option>
                        <option value="malaysia">Malaysia</option>
                        <option value="thailand">Thailand</option>
                    </select>
                </div>
                <button>Submit</button>
            </React.Fragment>
        )
    }
}