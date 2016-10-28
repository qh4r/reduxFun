import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';


class PostsNew extends Component {
    render() {
        // taki zapis NIE DEFINIUJE fields - fields jest niepotrzebne w wersji 6 redux forms
        const {handleSubmit, fields: {title, categories, content}} = this.props;

        return (
            <form onSubmit={handleSubmit(() => {})}>
                <h3>Dodaj Nowy post</h3>
                <Field name="title" component={title => {
                console.log(title);
                return <div className="form-group">
                    <label htmlFor="title">Tytuł</label>
                    <input {...title} type="text" className="form-control"/>
                </div>
                    }}/>
                <Field name="categories" component={categories =>
                <div className="form-group">
                    <label htmlFor="categories">Kategorie</label>
                    <input {...categories} type="text" className="form-control"/>
                </div>
                    }/>
                <Field name="content" component={content =>
                <div className="form-group">
                    <label htmlFor="content">Zawartość</label>
                    <textarea {...content} type="text" className="form-control"/>
                </div>
                }/>
                <button className="btn btn-primary" type="submit">
                    Utwórz
                </button>
            </form>
        );
    };
}


//konfiguracja redux form
// redux form ma tez swoj dedykowany reducer - form
export default reduxForm({
    form: 'NewPostData', // <- token musi byc unikalny
    //fields: ['title', 'categories', 'content'] <- niepotrzebne w wersji 6 redux forms
})(PostsNew);

// na stacie globalnym pojawi sie wlasciowosc form zawierajaca obiekt
// NewPostData, zawierajacy pola o kluczach fields
// z wartosciami wprowadzonymi przez usera