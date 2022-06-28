import React from "react";

export default class ContactUsForm extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        enquiry: '',
        country: 'singapore',
        contactOptions: []
    }

    updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    updateContactOptions = (event) => {
        let contactOptionsCopy = [...this.state.contactOptions]
        if (!contactOptionsCopy.includes(event.target.value)) {
            contactOptionsCopy.push(event.target.value)
        } else {
            contactOptionsCopy = contactOptionsCopy.filter((contactOption) => {
                return contactOption !== event.target.value
            })
        }
        this.setState({
            [event.target.name]: contactOptionsCopy
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
                <div>
                    <label>Contact Options: </label>
                    <input name="contactOptions" 
                           type="checkbox" 
                           value="email" 
                           checked={this.state.contactOptions.includes('email')}
                           onChange={this.updateContactOptions} />Email
                    <input name="contactOptions" 
                           type="checkbox" 
                           value="phoneNumber" 
                           checked={this.state.contactOptions.includes('phoneNumber')}
                           onChange={this.updateContactOptions} />Phone Number
                    <input name="contactOptions" 
                           type="checkbox" 
                           value="slowMail" 
                           checked={this.state.contactOptions.includes('slowMail')}
                           onChange={this.updateContactOptions} />Slow Mail
                </div>
                <button>Submit</button>
            </React.Fragment>
        )
    }
}