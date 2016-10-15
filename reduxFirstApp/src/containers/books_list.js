import React, {Component} from 'react';

export default class BooksList extends Component {

    render() {
        return (<ul className="list-group col-sm-4">
            {this.createList()}
        </ul>)
    }

    createList() {
        return this.props.books.map(book,i => {
           return <li key={i} class="list-group-item">{book.title}</li>
        })
    }
}