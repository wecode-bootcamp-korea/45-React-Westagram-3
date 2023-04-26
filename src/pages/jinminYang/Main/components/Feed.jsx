import React, { useState } from 'react';
import Reply from './components/Reply';
import './Feed.scss';

const Feed = () => {
  // 변수
  const [id, setId] = useState(1);
  const [comment, setComment] = useState(``);
  const [REPLIES, setREPLIES] = useState([
    { id: 0, user: `하이`, comment: `ㅋㅋ` },
  ]);

  // 함수
  const replyInput = e => {
    e.preventDefault();
    setComment(e.target.value);
  };

  const replyButton = () => {
    if (comment.length) {
      setREPLIES([...REPLIES, { id, user: `메롱${id}`, comment }]);
      setId(id => ++id);
      setComment(``);
    } else {
      alert(`댓글을 입력하세요ㅎ`);
    }
  };

  return (
    <div className="feed">
      {/* userInfo */}
      <div className="userInfo">
        <div className="userSimpleProfile">
          <img
            className="userImg"
            src="https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E"
            alt=""
          />
          <div className="userName">hahah_</div>
        </div>
        <div className="userMenu">
          <span>···</span>
        </div>
      </div>
      {/* feedImg */}
      <div className="feedImg">
        <img
          src="https://danawalab.github.io/images/2022-12-29-nextjs-devstory/10.gif"
          alt=""
        />
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
          <div>키키 외 100명이 좋아합니다</div>
        </div>
      </div>
      {/* replyList */}
      <ul className="replyList">
        {REPLIES.map(reply => (
          <Reply key={reply.id} reply={reply} />
        ))}
      </ul>
      {/* writeTime */}
      <div className="writeTime">42분전</div>
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
