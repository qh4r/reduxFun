import React, {Component} from 'react';
import { connect } from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BooksList extends Component {

    render() {
        console.log(this.props);
        return (<ul className="list-group col-sm-4">
            {this.createList()}
        </ul>)
    }

    createList() {
        return this.props.books.map((book, i) => {
            //this.props.selectBook.bind(null, book)
            return <li onClick={() => this.props.selectBook(book)}
                       key={i}
                       className={`list-group-item ${this.props.selectedBook && this.props.selectedBook.title == book.title
                       ? 'list-group-item-info'
                       : ''}`}>{book.title}</li>
        })
    }
}

//to co to zwraca wyladuje jako properta dzieki connect
function mapStateToProps(state) {
    return {
        books: state.books,
        selectedBook: state.selectedBook
    }
}

//to co to zwraca wyladuje jako properta dzieki connect
function mapDispatchToProps(dispatch) {
    // to sprawia ze zawsze gdy ktos uzyje select book zostanie
    // to zdispatchowane do wszystkich reducerow
    return bindActionCreators({selectBook: selectBook}, dispatch)
}

// to awansuje komponent do kontenera
export default connect(mapStateToProps, mapDispatchToProps)(BooksList)