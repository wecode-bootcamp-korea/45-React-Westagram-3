import React from "react";
import "./Main.scss";

import InstaIcon from "../../../assets/hyunahPark/instaicon.png";
import ExploreIcon from "../../../assets/hyunahPark/explore.png";
import heartIcon from "../../../assets/hyunahPark/heart.png";
import profileIcon from "../../../assets/hyunahPark/profile.png";

const Main = () => {
  return (
    <div className="main">
      <nav className="navPart">
        <span className="nav_part">
          <img
            alt="instagram icon"
            src={InstaIcon}
            className="instagramIcon"
            width="40"
          />
          <span class="westagram_logo">&nbsp;westagram</span>
        </span>

        <span className="nav_part">
          <input type="text" className="search" placeholder="검색" />
        </span>

        <span className="nav_part">
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
        <div className="main-feeds">
          <article className="articlePart">
            <div className="article_head">
              <div className="article_profile">
                <img
                  className="mickey_profile_img"
                  alt="mickey_profile"
                  src="/images/hyunahPark/mickey_profile.jpg"
                  width="25"
                />
                <span className="article_profile_id">&nbsp;hhyunah</span>
              </div>

              <div>
                <i className="fa-solid fa-ellipsis" />
              </div>
            </div>

            <img
              className="article_main_img"
              alt="brunch"
              src="/images/hyunahPark/brunch.jpg"
              width="100%"
            />

            <div className="article_react_icon">
              <div className="article_react_icon_right">
                <i
                  className="fa-solid fa-heart"
                  id="article_react_icon_heart"
                />
                <i class="fa-regular fa-comment" />
                <i class="fa-solid fa-arrow-up-from-bracket" />
              </div>

              <div>
                <i class="fa-regular fa-bookmark" />
              </div>
            </div>

            <div className="article_like">
              <img
                className="icecream_profile_img"
                alt="icecream"
                src="/images/hyunahPark/icecream.jpg"
                width="25"
              />

              <span>
                &nbsp;
                <span className="article_like_profile_id">mickey</span>님
                <span className="article_like_profile_etc">&nbsp;외 10명</span>
                이 좋아합니다.
              </span>
            </div>

            <div className="article_content">
              <span className="article_content_profile_id">hhyunah</span>
              &nbsp;LA에서 먹는 브런치 ♥
              <div className="article_content_more">... 더 보기</div>
            </div>

            <div className="article_reply">
              <div className="article_reply_add">
                <div>
                  <span className="article_reply_profile_id">mickey</span>
                  &nbsp;계란반숙
                </div>

                <div>
                  <i class="fa-regular fa-heart" />
                </div>
              </div>
            </div>

            <div className="article_time">43분 전</div>

            <div className="article_reply_input">
              <input
                type="text"
                className="reply_txt"
                placeholder="댓글 달기..."
              />
              <input type="button" className="reply_button" value="게시" />
            </div>
          </article>
        </div>

        <div className="main-right">
          <div className="side_profile">
            <img
              className="side_profile_img"
              alt="mm"
              src="/images/hyunahPark/mm.jpg"
              width="60"
            />

            <div className="side_profile_id">
              <span className="side_profile_id_name">olive</span>
              <span>Hyunah Park</span>
            </div>
          </div>

          <div className="story">
            <div className="story_domain">
              <span className="story_txt">스토리</span>
              <span className="story_view_all">모두보기</span>
            </div>

            <div className="story_profile">
              <img
                className="story_profile_id_img"
                alt="icecream"
                src="/images/hyunahPark/icecream.jpg"
                width="50"
              />

              <div className="story_profile_id">
                <span className="story_profile_id_name">hhyunah</span>
                <span>Hyunah Park</span>
              </div>
            </div>

            <div className="story_profile">
              <img
                className="story_profile_id_img"
                alt="icecream"
                src="/images/hyunahPark/icecream.jpg"
                width="50"
              />

              <div className="story_profile_id">
                <span className="story_profile_id_name">hhyunah</span>
                <span>Hyunah Park</span>
              </div>
            </div>

            <div className="story_profile">
              <img
                className="story_profile_id_img"
                alt="icecream"
                src="/images/hyunahPark/icecream.jpg"
                width="50"
              />

              <div className="story_profile_id">
                <span className="story_profile_id_name">hhyunah</span>
                <span>Hyunah Park</span>
              </div>
            </div>
          </div>

          <div className="recommendation">
            <div className="recommendation_domain">
              <span className="rec_txt">회원님을 위한 추천</span>
              <span className="rec_view_all">모두보기</span>
            </div>

            <div className="recommendation_profile">
              <img
                className="rec_profile_id_img"
                alt="icecream"
                src="/images/hyunahPark/icecream.jpg"
                width="50"
              />

              <div className="rec_profile_id">
                <span className="rec_profile_id_name">hhyunah</span>
                <span>Hyunah Park</span>
              </div>
            </div>

            <div className="recommendation_profile">
              <img
                className="rec_profile_id_img"
                alt="icecream"
                src="/images/hyunahPark/icecream.jpg"
                width="50"
              />

              <div className="rec_profile_id">
                <span className="rec_profile_id_name">hhyunah</span>
                <span>Hyunah Park</span>
              </div>
            </div>

            <div className="recommendation_profile">
              <img
                className="rec_profile_id_img"
                alt="icecream"
                src="/images/hyunahPark/icecream.jpg"
                width="50"
              />

              <div className="rec_profile_id">
                <span className="rec_profile_id_name">hhyunah</span>
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
