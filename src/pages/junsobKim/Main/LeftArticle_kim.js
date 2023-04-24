import React, { useState } from "react";
import "./LeftArticle_kim.scss";

export const LeftArticle_kim = () => {
  return (
    <div className="leftArticle_kim">
      <ArticleProfiles />
      <ArticlePic />
      <ArticleReact />
      <ArticleComment />
    </div>
  );
};

export const ArticleProfiles = () => {
  return (
    <div className="articleProfiles">
      <div className="articleP">
        <a className="imgArticleProfile" href=""></a>
        <div className="txtArticleProfileThings">
          <a className="txtArticleProfile" href="">
            Wecode_bootcamp
          </a>
          <a className="txtArticleProfileS" href="">
            WeCode-위코드
          </a>
        </div>
      </div>
      <a className="articleViewMore" href="">
        &nbsp;
      </a>
    </div>
  );
};

export const ArticlePic = () => {
  return (
    <img
      className="articleImg"
      src="images/junsobkim/first_article.jpeg"
      alt="first_article"
    />
  );
};

export const ArticleReact = () => {
  return (
    <div className="articleReact">
      <div className="reacting">
        <div className="reactingS">
          <button className="heart" />
          <button className="dm" />
          <button className="share" />
        </div>
        <button className="bookmark" />
      </div>
      <div className="reactingPeople">
        <img className="reactingImg" src="images/junsobkim/peoples1.webp" />
        <div className="whoLike">Alice_Book님 외 4명이 좋아합니다</div>
      </div>
    </div>
  );
};

// Comment 컴포넌트
const Comment = ({ comment, index }) => {
  return (
    <div key={index} className="commentItem">
      <span className="who">Alice_Book</span> {comment}
    </div>
  );
};

// ArticleComment 컴포넌트
export const ArticleComment = () => {
  // 댓글 저장할 상태(state) 만들기
  const [comments, setComments] = useState([]);

  // 댓글 입력할 수 있는 input 요소의 상태 만들기
  const [commentText, setCommentText] = useState("");

  // 댓글 추가 함수 만들기
  const addComment = (event) => {
    event.preventDefault();
    // 입력한 댓글이 비어있으면 추가하지 않음
    if (commentText.trim() === "") {
      return;
    }
    // 기존 댓글 배열에 새로운 댓글 추가하기
    setComments([...comments, commentText]);
    // 댓글 입력하는 input 요소의 상태 초기화
    setCommentText("");
  };

  return (
    <div className="articleComment">
      <div className="details">
        {/* 이전 댓글들을 배열로 출력하기 */}
        {comments.map((comment, index) => (
          <Comment key={index} comment={comment} index={index} />
        ))}
        <div className="newCommentThings">
          <form onSubmit={addComment}>
            <input
              className="comment"
              placeholder="댓글달기"
              value={commentText}
              onChange={(event) => setCommentText(event.target.value)}
            />
            <button className="commentSubmit" type="submit">
              게시
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
