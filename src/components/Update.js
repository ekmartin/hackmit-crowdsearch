import React from 'react';
import moment from 'moment';

const getDate = date => moment(date).fromNow();

const Update = ({ update }) => (
  <li className="column">
    <div className="white-box media">
      <figure className="media-left">
        <p className="avatar image is-64x64">
          <img
            src={`https://api.adorable.io/avatars/105/${update.name}`}
            alt={update.name}
          />
        </p>
      </figure>
      <div className="media-content">
        <div className="author">
          <h4 className="title is-4">{update.name}</h4>
          <p className="subtitle">{getDate(update.createdAt)}</p>
        </div>
        <p className="text-content">{update.content}</p>
      </div>
    </div>
  </li>
);

export default Update;
