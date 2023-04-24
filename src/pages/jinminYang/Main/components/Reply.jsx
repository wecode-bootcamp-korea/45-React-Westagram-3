import React from "react";

const Reply = ({ reply: { user, comment } }) => {
  return (
    <li>
      {user}: {comment}
    </li>
  );
};

export default Reply;
