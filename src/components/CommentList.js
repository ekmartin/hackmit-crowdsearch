import React, { Component } from 'react';
import Comment from './Comment';

export default class CommentList extends Component {
  componentDidMount() {
    const { base, update } = this.props;
    base.bindToState(`comments/${update.key}`, {
      context: this,
      state: 'comments',
      asArray: true
    });
  }

  render() {
    if (!this.state) return null;
    return (
      <ul>
        {this.state.comments.map(comment =>
          <Comment key={comment.key} comment={comment} />
        )}
      </ul>
    );
  }
}
