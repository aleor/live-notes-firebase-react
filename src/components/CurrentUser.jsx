import React from 'react';

import moment from 'moment';

const CurrentUser = ({ displayName, photoURL, email, createdAt, children }) => {
  return (
    <section className="CurrentUser">
      <div className="CurrentUser--profile">
        {photoURL && <img src={photoURL} alt={displayName} />}
        <div className="CurrentUser--information">
          <h2>{displayName}</h2>
          <p className="email">{email}</p>
          <p className="created-at">{moment(createdAt).calendar()}</p>
        </div>
      </div>
      <div>
        <div>{children}</div>
        <button>Sign Out</button>
      </div>
    </section>
  );
};

CurrentUser.defaultProps = {
  displayName: 'Some user',
  email: 'some_user@mailinator.com',
  photoURL: '',
  createdAt: new Date(),
};

export default CurrentUser;
