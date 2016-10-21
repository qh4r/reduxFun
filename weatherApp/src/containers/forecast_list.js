import React, { Component } from 'react';
import {connect} from 'react-redux';
import GraphElement from '../components/graph_element';

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
        console.log(cityData);
        const city = cityData.city;
        const [temp, pressure, humidity] = cityData.list.reduce(([t,p,h], w) => {
                return [[w.main.temp, ...t],
                    [w.main.pressure, ...p],
                    [w.main.humidity, ...h]];
            },
            [[], [], []]);

        return (
            <tr key={city.id}>
                <td style={{verticalAlign: 'middle'}}>{city.name}</td>
                <GraphElement data={temp} color={'#aa2a2a'} />
                <GraphElement data={pressure} color={'#7a1aff'} />
                <GraphElement data={humidity} color={'#87b7ff'} />
            </tr>
        )
    }
}

function mapStateToProps({forecast}) {
    return {forecast};
}

export default connect(mapStateToProps, null)(ForecastList);