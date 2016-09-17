import React, { Component } from 'react';
import NotFound from './NotFound';

export default class Information extends Component {
  componentDidMount() {
    const { base, personId } = this.props;
    base.fetch(`people/${personId}`, { context: this })
      .then(profile => {
        this.setState({ profile });
      });
  }

  render() {
    if (!this.state) return null; // TODO: Loader
    if (!this.state.profile) return <NotFound />;
    const { profile } = this.state;
    return <div className="container">
      <h1>{profile.name}</h1>
      <p>{profile.description}</p>
    </div>;
  }
}
