import React from 'react';
import './Reply.scss';

const Reply = ({ reply: { user, comment } }) => {
  return (
    <li>
      <span className="user">{user}</span>:
      <span className="comment">{comment}</span>
    </li>
  );
};

export default Reply;
