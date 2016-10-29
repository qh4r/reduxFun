import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux'; // zamiast tego przekazuje obiekt o tym samym  kluczu
import {createPost} from '../actions/index' ;


class PostsNew extends Component {
    render() {
        console.log(reduxForm);
        // taki zapis NIE DEFINIUJE fields - fields jest niepotrzebne w wersji 6 redux forms
        const {handleSubmit, fields: {title, categories, content}} = this.props;
        console.log(this.props);
        //dodane w reuxForm bind
        return (
            <form onSubmit={handleSubmit(this.props.createPost)}>
                <h3>Dodaj Nowy post</h3>
                return <div className="form-group">
                    <label htmlFor="title">Tytuł</label>
                    <input {...title} type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="categories">Kategorie</label>
                    <input {...categories} type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="content">Zawartość</label>
                    <textarea {...content} type="text" className="form-control"/>
                </div>
                <button className="btn btn-primary" type="submit">
                    Utwórz
                </button>
            </form>
        );
    };
}


// redux form przyjmuje argumenty (formconfig, [mapState, mapDispatch])

//konfiguracja redux form
// redux form ma tez swoj dedykowany reducer - form
export default reduxForm({
    form: 'NewPostData', // <- token musi byc unikalny
    fields: ['title', 'categories', 'content'] // <- niepotrzebne w wersji 6 redux forms
},null, {createPost})(PostsNew);

//export default connect(null, {createPost})(WrappedForm);

// na stacie globalnym pojawi sie wlasciowosc form zawierajaca obiekt
// NewPostData, zawierajacy pola o kluczach fields
// z wartosciami wprowadzonymi przez usera