import React from "react";
import COMPANYDETAIL from "./COMPANYDETAIL";
import "./RightSection_kim.scss";

export const RightSection_kim = () => {
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
      {COMPANYDETAIL.map(({ id, name, address }, index) => (
        <React.Fragment key={id}>
          <a className="details" href={address}>
            {name}
          </a>
          {index !== COMPANYDETAIL.length - 1 && <span>•</span>}
        </React.Fragment>
      ))}
    </div>
  );
};
