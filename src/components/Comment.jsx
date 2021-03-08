import React from 'react';

import moment from 'moment';

const Comment = ({ content, user, createdAt }) => {
  return (
    <article className="Comment">
      <span className="Comment--author">{user.displayName}</span>
      <span className="Comment--content">{content}</span>
      <span className="Comment--timestamp">{moment(createdAt).calendar()}</span>
    </article>
  );
};

Comment.defaultProps = {
  title: 'Thought-provoking comment',
  content:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus est aut dolorem, dolor voluptatem assumenda possimus officia blanditiis iusto porro eaque non ab autem nihil! Alias repudiandae itaque quo provident.',
  user: {
    displayName: 'Some user',
    email: 'some_user@mailinator.com',
    photoURL: '',
  },
  createdAt: new Date(),
};

export default Comment;
