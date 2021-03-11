import React from 'react';

import moment from 'moment';

import { firestore } from '../firebase';

const Post = ({ title, content, user, createdAt, stars, comments, id }) => {
  const postRef = firestore.doc(`posts/${id}`);
  const remove = () => postRef.delete();
  const star = () => postRef.update({ stars: stars + 1 });

  return (
    <article className="Post">
      <div className="Post--content">
        <h3>{title}</h3>
        <div>{content}</div>
      </div>
      <div className="Post--meta">
        <div>
          <p>
            <span role="img" aria-label="star">
              ⭐️
            </span>
            {stars}
          </p>
          <p>
            <span role="img" aria-label="comments">
              📝
            </span>
            {comments}
          </p>
          <p>Posted by {user?.displayName}</p>
          <p>{moment(createdAt?.toDate()).calendar()}</p>
        </div>
        <div>
          <button className="star" onClick={star}>Star</button>
          <button className="delete" onClick={remove}>Delete</button>
        </div>
      </div>
    </article>
  );
};

export default Post;
