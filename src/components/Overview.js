import React, { Component } from 'react';
import Link from 'react-router/Link';

const Person = ({ person }) => (
  <li className="person-item">
    <Link to={`/${person.key}`}>
      <img src={person.imageUrl} alt={person.name} />
      {person.name}
    </Link>
  </li>
);

export default class Overview extends Component {
  componentDidMount() {
    const { base } = this.props;
    base.bindToState('/people', {
      context: this,
      state: 'people',
      asArray: true
    });
  }

  render() {
    if (!this.state) return null;
    return (
      <section className="section">
        <div className="container">
          <h2 className="is-2 title">Missing People</h2>
          <div className="white-box">
            <ul className="person-list">
              {this.state.people.map(person => <Person
                key={person.key}
                person={person}
              />)}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
