import React, { Component } from 'react';
import {firestore} from '../firebase';
import { collectDocsWithIds } from '../utils';
import Posts from './Posts';

class Application extends Component {
  state = {
    posts: []
  };

  componentDidMount = async () => {
    const snapshot = await firestore.collection('posts').get();
    
    const posts = snapshot.docs.map(collectDocsWithIds) ;

    this.setState({posts});
  }

  handleCreate = async post => {
    const { posts } = this.state;

    const docRef = await firestore.collection('posts').add(post);
    const doc = await docRef.get();
    const newPost = collectDocsWithIds(doc);

    this.setState({ posts: [newPost, ...posts] });
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
