import React, { Component } from 'react';
import {firestore} from '../firebase';
import { collectDocsWithIds } from '../utils';
import Posts from './Posts';

class Application extends Component {
  state = {
    posts: []
  };

  unsubscribe = null;

  componentDidMount = async () => {
    this.unsubscribe = firestore.collection('posts').onSnapshot((snapshot) => {
      const posts = snapshot.docs.map(collectDocsWithIds);

      this.setState({posts});
    });
  }

  componentWillUnmount = () => this.unsubscribe();

  render() {
    const { posts } = this.state;

    return (
      <main className="Application">
        <h1>Live Notes</h1>
        <Posts posts={posts} />
      </main>
    );
  }
}

export default Application;
