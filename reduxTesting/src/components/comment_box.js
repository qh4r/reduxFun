import React from "react";

const CommentBox = () => {
  return <div className="comment-box">
    <textarea name="comment" id="comment" cols="30" rows="10"></textarea>
    <button>Ślij</button>
  </div>
};

export default CommentBox;