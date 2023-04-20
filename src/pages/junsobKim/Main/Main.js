import React, { useState } from "react";
import "./main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as farHeart,
  faComment as farComment,
  faShareSquare as farShare,
  faBookmark as farBookmark,
  faEllipsisH as fasEllipsis,
  faHeart as fasHeart,
} from "@fortawesome/free-regular-svg-icons";
import {
  faCompass as fasCompass,
  faHeart as fasHeart2,
  faUser as fasUser,
} from "@fortawesome/free-solid-svg-icons";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Main = () => {
  return (
    <div className="all-container">
      <header className="header">
        <Nav />
      </header>
      <div className="main-contents-container">
        <LeftArticle />
        <RightSection />
      </div>
    </div>
  );
};
export default Main;

export const Nav = () => {
  return (
    <nav id="mainNav">
      <div id="logos">
        <a className="westarLogo" href="main.html"></a>
        <a className="westarLogo2" href="login.html">
          Instagram
        </a>
      </div>
      <div id="searchThings">
        <input className="searchBar" placeholder="검색" />
      </div>

      <NavMenus />
    </nav>
  );
};
export const NavMenus = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };
  return (
    <div id="mainProfileThings">
      <a className="profileThings" id="mainCompass"></a>
      <a className="profileThings" id="mainNavHeart"></a>
      <a className="profileThings" id="mainMyPage" onClick={goToLogin}></a>
    </div>
  );
};

export const LeftArticle = () => {
  return (
    <div className="leftArticle">
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
        <FontAwesomeIcon icon={faEllipsisH} />
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
          <button className="heart">
            <FontAwesomeIcon icon={farHeart} />
          </button>
          <button className="mention">
            <FontAwesomeIcon icon={farComment} />
          </button>
          <button className="share">
            <FontAwesomeIcon icon={farShare} />
          </button>
        </div>
        <button className="bookmark">
          <FontAwesomeIcon icon={farBookmark} />
        </button>
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
      <span className="who">Wecode_bootcamp</span> {comment}
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
export const RightSection = () => {
  return (
    <div className="rightSection">
      <WhosPage />
      <StoryRecommend />
      <RecommendFollow />
      <CompanyDetail />
    </div>
  );
};

export const WhosPage = () => {
  return (
    <div className="whosPage">
      <img className="myImg" src="images/junsobkim/peoples1.webp" />
      <div className="myDetail">Alice_Book</div>
    </div>
  );
};

export const StoryRecommend = () => {
  return (
    <div className="story">
      <div className="storyTitles">
        <div className="storyTitle1">스토리</div>
        <div className="storyTitle2">모두보기</div>
      </div>
      <div className="storyMembers">
        <div className="first LineStory">
          <img
            className="storyPeo"
            alt="첫번째 스토리"
            src="images/junsobkim/peoples2.webp"
          />
          <div className="first LineDetails">
            <div className="first S LineName"> Abcde </div>
            <div className="first S LineBeforeT">5분전</div>
          </div>
        </div>
        <div className="second S LineStory">
          <img
            className="storyPeo"
            alt="두번째"
            src="images/junsobkim/peoples3.webp"
          />
          <div className="second LineDetails">
            <div className="second S LineName"> bcdefg </div>
            <div className="second S LineBeforeT">9분전</div>
          </div>
        </div>
        <div className="third S LineStory">
          <img
            className="storyPeo"
            alt="세번째"
            src="images/junsobkim/peoples4.webp"
          />
          <div className="third LineDetails">
            <div className="third S LineName"> cdefg </div>
            <div className="third S LineBeforeT">1시간전</div>
          </div>
        </div>
        <div className="fourth S LineStory">
          <img
            className="storyPeo"
            alt="네번째"
            src="images/junsobkim/peoples5.webp"
          />
          <div className="fourth S LineDetails">
            <div className="fourth S LineName"> defgh </div>
            <div className="fourth S LineBeforeT">3시간전</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RecommendFollow = () => {
  return (
    <div className="recomend">
      <div className="recomendTitles">
        <div className="recomendTitle1">회원님을 위한 추천</div>
        <div className="recomendTitle2">모두보기</div>
      </div>
      <div className="recomendWho">
        <div className="first LineRecomend">
          <div className="recomendPC">
            <img
              className="storyPeo"
              alt="첫번째리코맨드"
              src="images/junsobkim/peoples6.webp"
            />
            <div className="first LineDetails">
              <div className="first R LineName"> Hijk </div>
              <div className="first R LineHow">abcd님 외 2명이 ...</div>
            </div>
          </div>
          <div className="follow 1">팔로우</div>
        </div>
        <div className="second LineRecomend">
          <div className="recomendPC">
            <img
              className="storyPeo"
              alt="두번째"
              src="images/junsobkim/peoples7.webp"
            />
            <div className="second LineDetails">
              <div className="second R LineName"> ijklm </div>
              <div className="second R LineHow">abcd님 외 2명이 ...</div>
            </div>
          </div>
          <div className="follow 2">팔로우</div>
        </div>
        <div className="second R LineRecomend">
          <div className="recomendPC">
            <img
              className="storyPeo"
              alt="두번째"
              src="images/junsobkim/peoples8.webp"
            />
            <div className="second LineDetails">
              <div className="second R LineName"> jklmnop </div>
              <div className="second R LineHow">abcd님 외 2명이 ...</div>
            </div>
          </div>
          <div className="follow 3">팔로우</div>
        </div>
      </div>
    </div>
  );
};

const CompanyDetail = () => {
  return (
    <div className="companyD">
      Instagram 정보 • 지원 • 홍보 센터 • API
      <br />
      채용 정보 • 개인정보처리방침 • 약관 •
      <br />
      디렉터리 • 프로필 • 해시태그 • 언어
      <br />© 2019 INSTAGRAM
    </div>
  );
};
