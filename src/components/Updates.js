import React, { Component } from 'react';
import Update from './Update';

export default class Updates extends Component {
  componentDidMount() {
    const { base, params } = this.props;
    base.bindToState(`/updates/${params.personId}`, {
      context: this,
      state: 'updates',
      asArray: true
    });
  }

  render() {
    if (!this.state) return null;
    return (
      <section className="small-section">
        <h3 className="title is-3">Important Updates</h3>
        <ul className="columns">
          {this.state.updates.map(update =>
            <Update
              {...this.props}
              key={update.key}
              update={update}
            />
          )}
        </ul>
      </section>
    );
  }
}
