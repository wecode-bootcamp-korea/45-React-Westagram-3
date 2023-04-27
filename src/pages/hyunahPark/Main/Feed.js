import React, { useState } from "react";
import Comment from "./Comment";
import "./Feed.scss";

const USERNAME = "mcdonald";

const Feed = ({ feed }) => {
  const [commentArr, setCommentArr] = useState([]);
  const [inputTxt, setInputTxt] = useState("");

  const addComment = () => {
    setCommentArr([...commentArr, inputTxt]);
    setInputTxt("");
  };

  const handleInput = e => {
    setInputTxt(e.target.value);
  };

  const handleEnter = e => {
    if (e.key === "Enter" && inputTxt) {
      addComment();
    }
  };

  const handleBtn = () => {
    if (inputTxt) {
      addComment();
    }
  };

  return (
    <div className="feed">
      <div className="articleHead">
        <div className="articleProfile">
          <img
            className="mickeyProfileImg"
            alt="profile img"
            src={feed.profileImg}
            width="25"
          />
          <span className="articleProfileId">&nbsp;{feed.user}</span>
        </div>

        <div>
          <i className="fa-solid fa-ellipsis" />
        </div>
      </div>

      <img
        className="articleMainImg"
        alt="feed img"
        src={feed.img}
        width="100%"
      />

      <div className="articleReactIcon">
        <div className="articleReactIconRight">
          <i className="fa-solid fa-heart" id="articleReactIconHeart" />
          <i className="fa-regular fa-comment" />
          <i className="fa-solid fa-arrow-up-from-bracket" />
        </div>

        <div>
          <i className="fa-regular fa-bookmark" />
        </div>
      </div>

      <div className="articleLike">
        <img
          className="icecreamProfileImg"
          alt="like img"
          src={feed.likeImg}
          width="25"
        />

        <span>
          &nbsp;
          <span className="articleLikeProfileId">{feed.likeProfile}</span>님
          <span className="articleLikeProfileEtc">&nbsp;외 10명</span>이
          좋아합니다.
        </span>
      </div>

      <div className="articleContent">
        <span className="articleContentProfileId">hhyunah</span>
        &nbsp;{feed.content}
        <div className="articleContentMore">... 더 보기</div>
      </div>

      <div className="articleReply">
        {/* <Comment key={0} USERNAME="mickey" commentTxt="계란반숙" /> */}

        {/* 댓글 추가 */}
        {commentArr.map((commentTxt, index) => (
          <Comment key={index} USERNAME={USERNAME} commentTxt={commentTxt} />
        ))}
        {/* 댓글 추가 / */}
      </div>

      <div className="articleTime">{feed.time}분 전</div>

      <div className="articleReplyInput">
        <input
          type="text"
          className="replyTxt"
          placeholder="댓글 달기..."
          onChange={handleInput}
          onKeyUp={handleEnter}
          value={inputTxt}
        />
        <button className="replyButton" onClick={handleBtn}>
          게시
        </button>
      </div>
    </div>
  );
};

export default Feed;
