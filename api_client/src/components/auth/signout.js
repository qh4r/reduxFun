import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class Signout extends Component {
    componentWillMount(){
        this.props.signout();
    }

    render() {
        return <div> Wylogowano... </div>;
    }
}

export default connect(null, actions)(Signout);