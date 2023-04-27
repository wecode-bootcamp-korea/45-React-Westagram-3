import React, { useState } from 'react';
import Reply from './components/Reply';
import './Feed.scss';

const Feed = ({
  item: {
    userId,
    userImg,
    feedImg,
    whoLike,
    whoLikeNum,
    content,
    pastTime,
    reply,
  },
  darkMode,
}) => {
  // 변수
  const [replyId, setReplyId] = useState(1);
  const [comment, setComment] = useState(``);
  const [REPLIES, setREPLIES] = useState(reply);

  // 함수
  const replyInput = e => {
    e.preventDefault();
    setComment(e.target.value);
  };

  const replyButton = () => {
    if (comment.length) {
      setREPLIES([...REPLIES, { replyId, user: `메롱${replyId}`, comment }]);
      setReplyId(replyId => ++replyId);
      setComment(``);
    } else {
      alert(`댓글을 입력하세요ㅎ`);
    }
  };

  return (
    <div className={`feed ${darkMode ? `darkMode` : `brightMode2`}`}>
      {/* userInfo */}
      <div className="userInfo">
        <div className="userSimpleProfile">
          <img className="userImg" src={userImg} alt="" />
          <div className="userName">{userId}</div>
        </div>
        <div className="userMenu">
          <span>···</span>
        </div>
      </div>
      {/* feedImg */}
      <div className="feedImg">
        <img src={feedImg} alt="feedImg" />
      </div>
      {/* feedTool */}
      <div className="feedTool">
        <div className="works">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
            alt="heart"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
            alt="heart"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
            alt="heart"
          />
        </div>
        <div className="bookmark">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
            alt="heart"
          />
        </div>
      </div>
      {/* whoLike */}
      <div className="whoLike">
        <div className="whoIs">
          <div className="userImg" />
          <div>
            {whoLike} 외 {whoLikeNum}명이 좋아합니다
          </div>
        </div>
      </div>
      {/* content */}
      <div className="content">{content}z</div>
      {/* replyList */}
      <ul className="replyList">
        {REPLIES.map(reply => (
          <Reply key={reply.replyId} reply={reply} />
        ))}
      </ul>
      {/* writeTime */}
      <div className="writeTime">{pastTime}</div>
      {/* replyInput */}
      <form className="replyForm" onSubmit={e => e.preventDefault()}>
        <input
          type="text"
          value={comment}
          placeholder="댓글 달기..."
          onChange={e => replyInput(e)}
        />
        <button onClick={() => replyButton()}>게시</button>
      </form>
    </div>
  );
};

export default Feed;
