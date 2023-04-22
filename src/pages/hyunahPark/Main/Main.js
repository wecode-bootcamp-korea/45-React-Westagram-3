import React from "react";
import "./Main.scss";

import InstaIcon from "../../../assets/hyunahPark/instaicon.png";
import ExploreIcon from "../../../assets/hyunahPark/explore.png";
import heartIcon from "../../../assets/hyunahPark/heart.png";
import profileIcon from "../../../assets/hyunahPark/profile.png";

const Main = () => {
  return (
    <div className="main">
      <nav className="nav">
        <span className="navPart">
          <img
            alt="instagram icon"
            src={InstaIcon}
            className="instagramIcon"
            width="40"
          />
          <span className="westagramLogo">&nbsp;westagram</span>
        </span>

        <span className="navPart">
          <input type="text" className="search" placeholder="검색" />
        </span>

        <span className="navPart">
          <img
            alt="explore"
            src={ExploreIcon}
            className="exploreIcon"
            width="40"
          />
          <img alt="heart" src={heartIcon} className="heartIcon" width="40" />
          <img
            alt="profile"
            src={profileIcon}
            className="profileIcon"
            width="40"
          />
        </span>
      </nav>

      <main className="mainPart">
        <div className="mainFeeds">
          <article className="articlePart">
            <div className="articleHead">
              <div className="articleProfile">
                <img
                  className="mickeyProfileImg"
                  alt="mickey profile"
                  src="/images/hyunahPark/mickeyProfile.jpg"
                  width="25"
                />
                <span className="articleProfileId">&nbsp;hhyunah</span>
              </div>

              <div>
                <i className="fa-solid fa-ellipsis" />
              </div>
            </div>

            <img
              className="articleMainImg"
              alt="brunch"
              src="/images/hyunahPark/brunch.jpg"
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
                alt="icecream"
                src="/images/hyunahPark/icecream.jpg"
                width="25"
              />

              <span>
                &nbsp;
                <span className="articleLikeProfileId">mickey</span>님
                <span className="articleLikeProfileEtc">&nbsp;외 10명</span>이
                좋아합니다.
              </span>
            </div>

            <div className="articleContent">
              <span className="articleContentProfileId">hhyunah</span>
              &nbsp;LA에서 먹는 브런치 ♥
              <div className="articleContentMore">... 더 보기</div>
            </div>

            <div className="articleReply">
              <div className="articleReplyAdd">
                <div>
                  <span className="articleReplyProfileId">mickey</span>
                  &nbsp;계란반숙
                </div>

                <div>
                  <i className="fa-regular fa-heart" />
                </div>
              </div>
            </div>

            <div className="articleTime">43분 전</div>

            <div className="articleReplyInput">
              <input
                type="text"
                className="replyTxt"
                placeholder="댓글 달기..."
              />
              <input type="button" className="replyButton" value="게시" />
            </div>
          </article>
        </div>

        <div className="mainRight">
          <div className="sideProfile">
            <img
              className="sideProfileImg"
              alt="mm"
              src="/images/hyunahPark/mm.jpg"
              width="60"
            />

            <div className="sideProfileId">
              <span className="sideProfileIdName">olive</span>
              <span>Hyunah Park</span>
            </div>
          </div>

          <div className="story">
            <div className="storyDomain">
              <span className="storyTxt">스토리</span>
              <span className="storyViewAll">모두보기</span>
            </div>

            <div className="storyProfile">
              <img
                className="storyProfileIdImg"
                alt="icecream"
                src="/images/hyunahPark/icecream.jpg"
                width="50"
              />

              <div className="storyProfileId">
                <span className="storyProfileIdName">hhyunah</span>
                <span>Hyunah Park</span>
              </div>
            </div>

            <div className="storyProfile">
              <img
                className="storyProfileIdImg"
                alt="icecream"
                src="/images/hyunahPark/icecream.jpg"
                width="50"
              />

              <div className="storyProfileId">
                <span className="storyProfileIdName">hhyunah</span>
                <span>Hyunah Park</span>
              </div>
            </div>

            <div className="storyProfile">
              <img
                className="storyProfileIdImg"
                alt="icecream"
                src="/images/hyunahPark/icecream.jpg"
                width="50"
              />

              <div className="storyProfileId">
                <span className="storyProfileIdName">hhyunah</span>
                <span>Hyunah Park</span>
              </div>
            </div>
          </div>

          <div className="recommendation">
            <div className="recommendationDomain">
              <span className="recTxt">회원님을 위한 추천</span>
              <span className="recViewAll">모두보기</span>
            </div>

            <div className="recommendationProfile">
              <img
                className="recProfileIdImg"
                alt="icecream"
                src="/images/hyunahPark/icecream.jpg"
                width="50"
              />

              <div className="recProfileId">
                <span className="recProfileIdName">hhyunah</span>
                <span>Hyunah Park</span>
              </div>
            </div>

            <div className="recommendationProfile">
              <img
                className="recProfileIdImg"
                alt="icecream"
                src="/images/hyunahPark/icecream.jpg"
                width="50"
              />

              <div className="recProfileId">
                <span className="recProfileIdName">hhyunah</span>
                <span>Hyunah Park</span>
              </div>
            </div>

            <div className="recommendationProfile">
              <img
                className="recProfileIdImg"
                alt="icecream"
                src="/images/hyunahPark/icecream.jpg"
                width="50"
              />

              <div className="recProfileId">
                <span className="recProfileIdName">hhyunah</span>
                <span>Hyunah Park</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
