import React, {Component, PropTypes} from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux'; // zamiast tego przekazuje obiekt o tym samym  kluczu
import {createPost} from '../actions/index' ;
import {Link, push} from 'react-router';

const FIELDS = {
    title: {
        type: 'input',
        label: 'Tytuł'
    },
    categories: {
        type: 'input',
        label: 'Kategorie'
    },
    content: {
        type: 'textarea',
        label: 'Zawartość'
    }
};

// context to obekt zwracany przez
// .childContextTypes = {
//     color: React.PropTypes.string
// };
// rodzica
// router ma ustawione pole router - przykladowo

class PostsNew extends Component {
    // stary sposob to:
    // contextTypes: {
    // router: React.PropTypes.object.isRequired
    // },
    // to sprawia ze rpzeszukiwane jest drzewo w pszukiwaniu czegos co ma kontekst router
    static contextTypes = {
        router: PropTypes.object,
        store: PropTypes.object /// TEGO LEPIEJ nie robic
        // context to properta na tagu <Router> ma router
    };

    //w taju sam sposob mozna utworzyc propsTypes - wymagania dla propert

    onSubmit(data) {
        this.props.createPost(data)
            .then(() => {
                this.context.router.push('/');
            })

    }

    renderField(fieldConfig, field) {
        const fieldHelper = this.props.fields[field];

        return (
            <div className={`form-group ${fieldHelper.touched && !fieldHelper.valid ? 'has-danger' : ''}`}>
                <label htmlFor="title">{fieldConfig.label}</label>
                <fieldConfig.type {...fieldHelper} type="text" className="form-control"/>
                <div hidden={!fieldHelper.touched || fieldHelper.valid} className="text-help alert alert-danger">
                    {fieldHelper.error}
                </div>
            </div>
        )
    }

    render() {
        // taki zapis NIE DEFINIUJE fields - fields jest niepotrzebne w wersji 6 redux forms
        const {handleSubmit, resetForm, fields: {title, categories, content}} = this.props;
        //dodane w reuxForm bind
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>Dodaj Nowy post</h3>
                {Object.keys(FIELDS).map((field) => {
                    return this.renderField(FIELDS[field], field)
                })}
                <button className="btn btn-primary" type="submit">
                    Utwórz
                </button>
                <a className="btn btn-danger" onClick={resetForm}>
                    Wyczyść
                </a>
                <Link to="/" className="btn btn-info text-xs-right">Wróć</Link>

            </form>
        );
    };
}


function validate(values) {
    const errors = {};

    Object.keys(FIELDS).map(field => {
        if (!values[field]) {
            errors[field] = "Pole wymagane"
        }
    });

    return errors;
}

// redux form przyjmuje argumenty (formconfig, [mapState, mapDispatch])

//konfiguracja redux form
// redux form ma tez swoj dedykowany reducer - form
export default reduxForm({
    form: 'NewPostData', // <- token musi byc unikalny
    fields: Object.keys(FIELDS), // <- niepotrzebne w wersji 6 redux forms
    validate
}, null, {createPost})(PostsNew);

//export default connect(null, {createPost})(WrappedForm);

// na stacie globalnym pojawi sie wlasciowosc form zawierajaca obiekt
// NewPostData, zawierajacy pola o kluczach fields
// z wartosciami wprowadzonymi przez usera