import React, { Component } from 'react';
import Updates from './Updates';
import Tasks from './Tasks';

const handleRedirect = err => {
  if (err) console.log('Failed request redirect', err);
};

export default class Contribute extends Component {
  componentDidMount() {
    const { base } = this.props;
    base.authGetOAuthRedirectResult((err, authData) => {
      if (err) return console.log('Failed redirect', err);
      if (authData.user) return this.setState({ user: authData.user });
      base.authWithOAuthRedirect('facebook', handleRedirect);
    });
  }

  render() {
    if (!this.state) return null;
    const { user } = this.state;
    return (
      <section className="section">
        <div className="container">
          <Updates {...this.props} user={user} />
          <Tasks {...this.props} user={user} />
        </div>
      </section>
    );
  }
}
