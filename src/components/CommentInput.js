import React, { Component } from 'react';

// TODO: Get this from above
const user = {
  name: 'Art Garfunkel'
};

export default class CommentInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    comment: ''
  };

  submitComment() {
  }

  handleChange({ target }) {
    this.setState({ comment: target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { base, update } = this.props;
    base.push(`comments/${update.key}`, {
      data: {
        content: this.state.comment,
        author: user.name
      }
    });

    this.setState({ comment: '' });
  }

  render() {
    return (
      <div className="media">
        <div className="media-left">
          <p className="image is-32x32">
            <img
              src={`https://api.adorable.io/avatars/64/${user.name}`}
              alt={user.name}
            />
          </p>
        </div>
        <div className="media-content">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Add a comment..."
              className="comment-input"
              value={this.state.comment}
              onChange={this.handleChange}
            />
          </form>
        </div>
      </div>
    );
  }
}
