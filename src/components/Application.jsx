import React, { Component } from 'react';

import Posts from './Posts';

class Application extends Component {
  state = {
    posts: [
      {
        id: '1',
        title: 'A Very First Post',
        content:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis suscipit repellendus modi unde cumque, fugit in ad necessitatibus eos sed quasi et! Commodi repudiandae tempora ipsum fugiat. Quam, officia excepturi!',
        user: {
          uid: '500',
          displayName: 'Some user',
          email: 'some_user@mailinator.com',
          photoURL: '',
        },
        stars: 1,
        comments: 20,
      },
      {
        id: '2',
        title: 'The Meaning of Life',
        content:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis suscipit repellendus modi unde cumque, fugit in ad necessitatibus eos sed quasi et! Commodi repudiandae tempora ipsum fugiat. Quam, officia excepturi!',
        user: {
          uid: '501',
          displayName: 'A Thinker',
          email: 'thinker@mailinator.com',
          photoURL: '',
        },
        stars: 3,
        comments: 0,
      },
    ],
  };

  handleCreate = post => {
    const { posts } = this.state;
    this.setState({ posts: [post, ...posts] });
  };

  render() {
    const { posts } = this.state;

    return (
      <main className="Application">
        <h1>Live Notes</h1>
        <Posts posts={posts} onCreate={this.handleCreate} />
      </main>
    );
  }
}

export default Application;
