import React, {Component} from 'react';

export default class Resources extends Component {
    render() {
        return (
            <div>
                test test, sekrety
                <ul>
                    {this.props.resources.map(x => <li key={x}>{x}</li>)}
                </ul>
            </div>
        )
    }
}