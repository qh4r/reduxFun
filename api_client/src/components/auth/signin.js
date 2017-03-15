import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import * as actions from '../../actions';
import {connect} from 'react-redux';

class Signin extends Component {
    handleFormSubmit({email, password}) {
        console.log(email, password);
        this.props.signInUser(email, password)
    }

    render() {
        const {handleSubmit} = this.props;
        return (<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <fieldset className="form-group">
                <label>Mail:</label>
                <Field name="email" component="input" type="text" className="form-control"/>
            </fieldset>
            <fieldset className="form-group">
                <label>Hasło</label>
                <Field type="password" name="password" component="input" className="form-control"/>
            </fieldset>
            <button className="btn btn-primary" action="submit">Zaloguj</button>
        </form>)
    }
}

export default connect(null, actions)(reduxForm({
    form: 'signin',
})(Signin));