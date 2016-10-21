import React, { Component } from 'react';
import {connect} from 'react-redux';

class ForecastList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>Miasto</th>
                    <th>Temperatura</th>
                    <th>Ciśnienie</th>
                    <th>Wilgotność</th>
                </tr>
                </thead>
                <tbody>
                {this.props.forecast.map(this.renderForecast.bind(this))}
                </tbody>
            </table>
        )
    }

    renderForecast(cityData) {
        const city = cityData.city;
        console.log(cityData);
        return (
            <tr key={city.id}>
                <td>{city.name}</td>
            </tr>
        )
    }
}

function mapStateToProps({forecast}) {
    return {forecast};
}

export default connect(mapStateToProps, null)(ForecastList);