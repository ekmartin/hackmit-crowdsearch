import React, { Component } from 'react';
import NotFound from './NotFound';
import MissingCard from './MissingCard';

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
    return (
      <section className="section">
        <div className="container">
          <h2 className="title is-2">Missing Person</h2>
          <div className="columns">
            <div className="column is-one-third">
              <MissingCard profile={profile} />
            </div>
            <div className="column is-two-thirds">
              <p className="content text-box">
                {profile.message}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
