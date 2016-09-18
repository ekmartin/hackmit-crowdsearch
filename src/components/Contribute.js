import React, { Component } from 'react';
import Updates from './Updates';
import Tasks from './Tasks';

export default class Contribute extends Component {
  componentDidMount() {
    const { base } = this.props;
    base.authGetOAuthRedirectResult((err, authData) => {
      if (err) return console.log('Failed redirect', err);
      if (authData.user) {
        console.log('Logged in!', authData.user);
      } else {
        base.authWithOAuthRedirect('facebook');
      }
    });
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <Updates {...this.props} />
          <Tasks {...this.props} />
        </div>
      </section>
    );
  }
}
