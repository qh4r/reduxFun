import React, { Component } from 'react';
import CommentBox from "./comment_box";
import CommentsList from "./comments_list";

export default class App extends Component {
  render() {
    return (
      <div>
        <CommentBox />
        <CommentsList />
      </div>
    );
  }
}
