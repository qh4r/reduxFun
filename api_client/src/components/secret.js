import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Secret extends Component {

    componentWillMount(){
        this.props.fetchMessage();
    }

    render(){
        return (
            <div>
                <h1>SEKRET:</h1>
                <h2>{this.props.secret}</h2>
            </div>
        )
    }
}

function mapStateToProps({secret}){
    return {
        secret
    }
}

export default connect(mapStateToProps, actions)(Secret);