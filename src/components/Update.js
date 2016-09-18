import React from 'react';
import moment from 'moment';
import CommentBox from './CommentBox';

const getDate = date => moment(date).fromNow();

const Update = ({ update, ...props }) => (
  <li className="column">
    <div className="white-box update">
      <div className="media">
        <figure className="media-left">
          <p className="avatar image is-64x64">
            <img
              src={`https://api.adorable.io/avatars/105/${update.author}`}
              alt={update.author}
            />
          </p>
        </figure>
        <div className="media-content">
          <div className="author">
            <h4 className="title is-4">{update.author}</h4>
            <p className="subtitle">{getDate(update.createdAt)}</p>
          </div>
          <p className="text-content">{update.content}</p>
        </div>
      </div>

      <CommentBox update={update} {...props} />
    </div>
  </li>
);

export default Update;
