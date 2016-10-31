import React, {Component, PropTypes} from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux'; // zamiast tego przekazuje obiekt o tym samym  kluczu
import {createPost} from '../actions/index' ;
import {Link, push} from 'react-router';

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

    onSubmit(data) {
        this.props.createPost(data)
            .then(() => {
                this.context.router.push('/');
            })

    }

    render() {
        // taki zapis NIE DEFINIUJE fields - fields jest niepotrzebne w wersji 6 redux forms
        const {handleSubmit, resetForm, fields: {title, categories, content}} = this.props;
        //dodane w reuxForm bind
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>Dodaj Nowy post</h3>
                <div className={`form-group ${title.touched && !title.valid ? 'has-danger' : ''}`}>
                    <label htmlFor="title">Tytuł</label>
                    <input {...title} type="text" className="form-control"/>
                    <div hidden={!title.touched || title.valid} className="text-help alert alert-danger">
                        {title.error}
                    </div>
                </div>
                <div className={`form-group ${categories.touched && !categories.valid ? 'has-danger' : ''}`}>
                    <label htmlFor="categories">Kategorie</label>
                    <input {...categories} type="text" className="form-control"/>
                    <div hidden={!categories.touched || categories.valid} className="text-help alert alert-danger">
                        {categories.error}
                    </div>
                </div>
                <div className={`form-group ${content.touched && !content.valid ? 'has-danger' : ''}`}>
                    <label htmlFor="content">Zawartość</label>
                    <textarea {...content} type="text" className="form-control"/>
                    <div hidden={!content.touched || content.valid} className="text-help alert alert-danger">
                        {content.error}
                    </div>
                </div>
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

    if (!values.title) {
        errors.title = "Podaj tytuł";
    }

    if (!values.categories) {
        errors.categories = "Podaj kategorie";
    }

    if (!values.content) {
        errors.content = "Podaj zawartosc posta";
    }


    return errors;
}

// redux form przyjmuje argumenty (formconfig, [mapState, mapDispatch])

//konfiguracja redux form
// redux form ma tez swoj dedykowany reducer - form
export default reduxForm({
    form: 'NewPostData', // <- token musi byc unikalny
    fields: ['title', 'categories', 'content'], // <- niepotrzebne w wersji 6 redux forms
    validate
}, null, {createPost})(PostsNew);

//export default connect(null, {createPost})(WrappedForm);

// na stacie globalnym pojawi sie wlasciowosc form zawierajaca obiekt
// NewPostData, zawierajacy pola o kluczach fields
// z wartosciami wprowadzonymi przez usera