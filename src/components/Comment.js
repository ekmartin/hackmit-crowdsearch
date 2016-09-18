import React from 'react';

const Comment = ({ comment }) => (
  <li className="comment">
    <div className="media">
      <div className="media-left">
        <p className="image is-32x32">
          <img
            src={`https://api.adorable.io/avatars/64/${comment.author}`}
            alt={comment.author}
          />
        </p>
      </div>
      <div className="media-content comment-text">
        <strong className="comment-author">{comment.author}</strong>
        {comment.content}
      </div>
    </div>
  </li>
);

export default Comment;
