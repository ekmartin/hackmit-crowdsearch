import React from 'react';

const LocationMap = ({ profile }) => (
  <div className="map">
    <h1 className="title is-3 has-text-centered">
      Last Seen Location
    </h1>
    <iframe
      frameBorder="0"
      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCASLqNTKj9ON4kksYcvGFRCPjUgEH0gEw
      &q=${profile.locationLastSeen}`}
      allowFullScreen
    />
  </div>
);

export default LocationMap;
