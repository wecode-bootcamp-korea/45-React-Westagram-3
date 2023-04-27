import React from "react";
import "./Comment.scss";

const Comment = ({ index, userName, commentTxt, onRemove }) => {
  // console.log(key);
  return (
    <div className="comment" onDoubleClick={() => onRemove(index)}>
      <div className="articleReplyAdd">
        <div>
          <span className="articleReplyProfileId">{userName}</span>
          <span className="articleReplyTxt">&nbsp;{commentTxt}</span>
        </div>
        <div>
          <i className="fa-regular fa-heart" />
        </div>
      </div>
    </div>
  );
};

export default Comment;
