import React from 'react';

const MissingCard = ({ profile }) => (
  <div className="card">
    <div className="card-image">
      <img src={profile.imageUrl} alt={profile.name} />
    </div>
    <div className="card-content">
      <h3 className="title is-3">{profile.name}</h3>
      <h5 className="subtitle is-5">Age: {profile.ageNow}</h5>
    </div>
  </div>
);

export default MissingCard;
