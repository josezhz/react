import React from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'

export default class Alert extends React.Component {
    state = {
        msg: this.props.msg,
        country: 'singapore',
        fruit: 'apple',
        color: 'red',
        all_countries: [],
        all_fruits: [],
        all_colors: [],
        loaded: false
    }

    async componentDidMount() {
        let reqCountries = axios.get('json/countries.json'),
            reqFruits = axios.get('json/fruits.json'),
            reqColors = axios.get('json/colors.json');
        let resCountries = await reqCountries,
            resFruits = await reqFruits,
            resColors = await reqColors;
        let all_countries = resCountries.data,
            all_fruits = resFruits.data,
            all_colors = resColors.data;
        this.setState({
            all_countries,
            all_fruits,
            all_colors,
            loaded: true
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("update detected")
    }

    renderCountries = () => {
        let options = this.state.all_countries.map(i => <option value={i.value} key={i.value}>{i.display}</option>)
        return options
    }
    renderFruits = () => {
        let options = this.state.all_fruits.map(i => <option value={i.value} key={i.value}>{i.display}</option>)
        return options
    }
    renderColors = () => {
        let options = this.state.all_colors.map(i => <option value={i.value} key={i.value}>{i.display}</option>)
        return options
    }

    updateState = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            this.state.loaded ?
                <React.Fragment>
                    <h1>{this.state.msg}</h1>
                    <div className="input-group mb-3">
                        <label className="input-group-text">Country:</label>
                        <select className="form-select" name="country" value={this.state.country} onInput={this.updateState}>{this.renderCountries()}</select>
                    </div>
                    <div className="input-group mb-3">
                        <label className="input-group-text">Fruit:</label>
                        <select className="form-select" name="fruit" value={this.state.fruit} onInput={this.updateState}>{this.renderFruits()}</select>
                    </div>
                    <div className="input-group mb-3">
                        <label className="input-group-text">Color:</label>
                        <select className="form-select" name="color" value={this.state.color} onInput={this.updateState}>{this.renderColors()}</select>
                    </div>
                </React.Fragment>
                :
                <h1>loading...</h1>
        )
    }
}