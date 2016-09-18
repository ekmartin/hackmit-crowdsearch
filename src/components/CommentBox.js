import React from 'react';
import CommentList from './CommentList';
import CommentInput from './CommentInput';

const CommentBox = props => (
  <div className="comments">
    <CommentList {...props} />
    <CommentInput {...props} />
  </div>
);

export default CommentBox;
