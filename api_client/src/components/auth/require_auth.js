import React, {Component} from 'react';
import {connect} from 'react-redux';

export default function (ComposedComponent) {
    class Authentication extends Component {
        static contextTypes = {
            router: React.PropTypes.object
        };

        componentWillReceiveProps(newProps) {
            if(!newProps.authenticated) {
                this.context.router.push('/signin');
            }
        }

        render() {
            return this.props.authenticated ? <ComposedComponent {...this.props}/> : <p>Access denied</p>;
        }
    }

    function mapStateToProps({auth: {authenticated}}) {
        return {
            authenticated
        }
    }

    return connect(mapStateToProps)(Authentication);
}

