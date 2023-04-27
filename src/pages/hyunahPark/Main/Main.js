import React, { useEffect, useState } from "react";
import Feed from "./Feed";

import "./Main.scss";

import InstaIcon from "../../../assets/hyunahPark/instaicon.png";
import ExploreIcon from "../../../assets/hyunahPark/explore.png";
import heartIcon from "../../../assets/hyunahPark/heart.png";
import profileIcon from "../../../assets/hyunahPark/profile.png";
import { Link } from "react-router-dom";

const USERNAME = "olive";

const Main = () => {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetch("/data/feedData.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        setFeeds(data);
      });
  }, []);

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
          {feeds.map(feed => {
            return <Feed key={feed.id} feed={feed} />;
          })}
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
              <span className="sideProfileIdName">{USERNAME}</span>
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

          <div className="aside">
            {FOOTER_INFO_LIST.map((info, index) => {
              let dot = " · ";

              if (FOOTER_INFO_LIST.length - 1 === index) dot = "";
              if (info.id === 6) dot += "";

              return (
                <div key={info.id} className="footer">
                  <Link className="footerLink" to={info.link}>
                    {info.name}
                  </Link>
                  <span className="dot">&nbsp;{dot}&nbsp;</span>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;

const FOOTER_INFO_LIST = [
  { id: 1, name: "소개", link: "/login-hyunah" },
  { id: 2, name: "도움말", link: "/login-hyunah" },
  { id: 3, name: "홍보 센터", link: "/login-hyunah" },
  { id: 4, name: "API", link: "/login-hyunah" },
  { id: 5, name: "채용 정보", link: "/login-hyunah" },
  { id: 6, name: "개인정보처리방침", link: "/login-hyunah" },
  { id: 7, name: "약관", link: "/login-hyunah" },
  { id: 8, name: "위치", link: "/login-hyunah" },
  { id: 9, name: "인기 계정", link: "/login-hyunah" },
  { id: 10, name: "해시태그", link: "/login-hyunah" },
  { id: 11, name: "언어", link: "/login-hyunah" },
];
