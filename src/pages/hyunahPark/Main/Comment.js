import React from "react";
import "./Comment.scss";

const Comment = props => {
  return (
    <div className="comment">
      <div key={props.index} className="articleReplyAdd">
        <div>
          <span className="articleReplyProfileId">{props.USERNAME}</span>
          <span className="articleReplyTxt">&nbsp;{props.commentTxt}</span>
        </div>
        <div>
          <i className="fa-regular fa-heart" />
        </div>
      </div>
    </div>
  );
};

export default Comment;
