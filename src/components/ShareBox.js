import React, { Component } from 'react';

export default class ShareBox extends Component {
  constructor(props) {
    super(props);
    this.handleShare = this.handleShare.bind(this);
  }

  handleShare(e) {
    e.preventDefault();
    // TODO: Correct data here:
    FB.ui({
      method: 'feed',
      name: 'Test',
      link: 'http://localhost:3000',
      caption: 'test caption',
      description: 'test description'
      // TODO:
      // picture: profile.pictureUrl,
    });
  }

  render() {
    return (
      <a href="#" onClick={this.handleShare} className="share-link">
        <i className="fa fa-facebook" />
        Share on Facebook
      </a>
    );
  }
}
