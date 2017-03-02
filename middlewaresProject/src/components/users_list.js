import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class UsersList extends Component {

    componentWillMount() {
        this.props.fetchUsers();
    }

    renderUser = (user) => <div>
        <div key={user.name} className="card card-block">
            <h4 className="card-title">{user.name}</h4>
            <p className="card-text">test</p>
            <a className="btn btn-primary">mail</a>
        </div>
    </div>;

    render() {
        return (
            <div className="users-list">
                {this.props.users
                    ?
                    this.props.users.map(this.renderUser)
                    :
                    <p>brak użytkowników</p>
                }
            </div>
        )
    }
}

function mapStateToPros({users}) {
    return {
        users
    }
}

export default connect(mapStateToPros, actions)(UsersList);
