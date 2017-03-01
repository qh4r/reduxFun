import React, {Component} from 'react';
import {connect} from 'react-redux';

export default function (ComposedComponent) {
    class Authentication extends Component {
        render() {
            return this.props.authenticated ? <ComposedComponent {...this.props}/> : <p>Access denied</p>;
        }
    }

    function mapStateToProps({authenticated}) {
        return {
            authenticated
        }
    }

    return connect(mapStateToProps)(Authentication);
}

