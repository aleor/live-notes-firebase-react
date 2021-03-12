import React, { Component } from 'react';
import {auth, createUserProfileDocument, firestore} from '../firebase';
import { collectDocsWithIds } from '../utils';
import Posts from './Posts';
import Authentication from './Authentication';

class Application extends Component {
  state = {
    posts: [],
    user: null
  };

  unsubscribeFromFirestore = null;
  unsubscribeFromAuth = null;

  componentDidMount = async () => {
    this.unsubscribeFromFirestore = firestore.collection('posts').onSnapshot((snapshot) => {
      const posts = snapshot.docs.map(collectDocsWithIds);

      this.setState({posts});
    });

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      const user = await createUserProfileDocument(userAuth);
      this.setState({ user });
    });
  }

  componentWillUnmount = () => this.unsubscribeFromFirestore();

  render() {
    const { posts, user } = this.state;

    return (
      <main className="Application">
        <h1>Live Notes</h1>
        <Authentication user={user} />
        <Posts posts={posts} />
      </main>
    );
  }
}

export default Application;
