import React from 'react';

const DetailedInformation = ({ profile }) => (
  <div className="text-box level">
    <div className="level-item has-text-centered">
      <p className="heading">Age</p>
      <p className="title">{profile.ageNow}</p>
    </div>
    <div className="level-item has-text-centered">
      <p className="heading">Hair Color</p>
      <p className="title">{profile.hairColour}</p>
    </div>
    <div className="level-item has-text-centered">
      <p className="heading">Eye Color</p>
      <p className="title">{profile.eyeColour}</p>
    </div>
  </div>
);

export default DetailedInformation;
