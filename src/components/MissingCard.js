import React from 'react';

const MissingCard = ({ profile }) => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img src="http://placehold.it/600x550" alt="" />
      </figure>
    </div>
    <div className="card-content">
      <div className="columns">
        <div className="column">
          <h3 className="title is-3">{profile.name}</h3>
        </div>
        <div className="column">
          <h3 className="subtitle is-3 has-text-right">{profile.age}</h3>
        </div>
      </div>
    </div>
  </div>
);

export default MissingCard;
