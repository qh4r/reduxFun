import React, {Component} from "react";
import { connect } from 'react-redux';

class CommentsList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<ul className="comments-list">
            {this.props.comments && this.props.comments.map((x,i) => <li key={i}>{x}</li>)}
        </ul>)
    }
}

function mapStateToProps(state) {
    return {
        comments: state.comments
    };
}

export default connect(mapStateToProps)(CommentsList);