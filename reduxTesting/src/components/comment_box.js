import React from "react";
import {connect} from 'react-redux'
import {saveComment} from "../actions";

class CommentBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            comment: ""
        }
    };

    onChanged = ({target: {value}}) => {
        this.setState({
            comment: value
        });
    };

    onSubmit = (e) => {
        this.props.saveComment(this.state.comment);
        this.setState({
            comment: ""
        });
        e.preventDefault();
    };

    render() {
        return <form onSubmit={this.onSubmit} className="comment-box">
            <h4>new comment:</h4>
            <textarea name="comment" onChange={this.onChanged} value={this.state.comment} id="comment" cols="30"
                      rows="10"></textarea>
            <div>
                <button action="submit">ślij</button>
            </div>
        </form>
    }
}


export default connect(null, {saveComment})(CommentBox);