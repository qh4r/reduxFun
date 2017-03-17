import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form'
import {connect} from 'react-redux';
import * as actions from '../../actions';

class Signup extends Component {
    handleFormSubmit({email, password, passwordRepeat}) {
        this.props.signupUser({
            email,
            password
        });
    }

    render() {
        console.log('err:',this.props.authError)
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.handleFormSubmit.bind(this))}>
                    <Field name="email" label="Email" type="email" component={renderFieldContent}/>
                    <Field name="password" label="Hasło" type="password" component={renderFieldContent}/>
                    <Field name="passwordRepeat" label="Powtóż hasło" type="password" component={renderFieldContent}/>
                    {this.props.errorMsg && <div style={{color: 'red'}}><strong>Błąd!</strong> {this.props.errorMsg}</div>}
                    <button className="btn btn-primary" disabled={this.props.submitting} type="submit">
                        Zarejestruj
                    </button>
                </form>
            </div>
        )
    }
}

// trzeba to tak robic bo w przypadku funkcji inline pola sie non stop przeladowuja
function renderFieldContent({input, label, type, meta: {touched, error}}) {
    return <fieldset className="form-group">
        <label>{label}</label>
        <input {...input} type={type} className="form-control"/>
        {touched && error && <span style={{color: 'red'}}>{error}</span>}
    </fieldset>
}

function validate({email, password, passwordRepeat}) {
    const errors = {};
    if (password !== passwordRepeat) {
        errors.password = "Hasła nie pasują";
    }
    return errors;
}

function mapStateToProps({auth: {error}}) {
    return {
        errorMsg: error
    }
}

export default connect(mapStateToProps, actions)(reduxForm({
    form: 'signout',
    validate
})(Signup));