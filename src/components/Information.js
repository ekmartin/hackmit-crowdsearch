import React, { Component } from 'react';
import Link from 'react-router/Link';
import NotFound from './NotFound';
import MissingCard from './MissingCard';
import DetailedInformation from './DetailedInformation';
import ShareBox from './ShareBox';

export default class Information extends Component {
  componentDidMount() {
    const { base, params } = this.props;
    base.fetch(`people/${params.personId}`, { context: this })
      .then(profile => {
        this.setState({ profile });
      });
  }

  render() {
    if (!this.state) return null; // TODO: Loader
    if (!this.state.profile) return <NotFound />;
    const { profile } = this.state;
    const { params } = this.props;
    return (
      <section className="section">
        <div className="container">
          <div className="title-header">
            <h2 className="title is-2">Missing Person</h2>
            <Link
              to={`/${params.personId}/contribute`}
              className="button is-large is-super-color"
            >
              <i className="fa fa-users" />
              Help find {profile.name}
            </Link>
          </div>
          <div className="columns">
            <div className="column is-one-third">
              <MissingCard profile={profile} />
            </div>
            <div className="column is-two-thirds">
              <p className="content text-box">
                {profile.message}
              </p>
              <DetailedInformation profile={profile} />
              <h1 className="title is-3 has-text-centered">
                Last Seen Location
              </h1>
              <iframe
                width="635"
                height="450"
                frameBorder="0"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCASLqNTKj9ON4kksYcvGFRCPjUgEH0gEw
                &q=${profile.locationLastSeen}`}
                allowFullScreen
              />
            </div>
          </div>
          <ShareBox profile={profile} />
        </div>
      </section>
    );
  }
}
