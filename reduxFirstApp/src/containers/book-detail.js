import React, {Component} from 'react';
import {connect} from 'react-redux'

class BookDetails extends Component {
    render() {
        return (
            <div className="col-sm-8">
                {this.props.book && this.props.book.title}
                <br />
                {this.props.book && new Array(+this.props.book.rating).fill('*').join('')}
            </div>
        )
    }
}

function MapStateToProps(state){
    return {
        book: state.selectedBook
    }
}

export default connect(MapStateToProps)(BookDetails);