import React, { useEffect, useState } from "react";
import Feed from "./Feed";
import SideProfile from "./SideProfile";
import Story from "./Story";
import Recommendation from "./Recommendation";

import "./Main.scss";

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
      <main className="mainPart">
        <div className="mainFeeds">
          {feeds.map(feed => {
            return <Feed key={feed.id} feed={feed} userName={USERNAME} />;
          })}
        </div>

        <div className="mainRight">
          <SideProfile user={USERNAME} />
          <Story />
          <Recommendation />

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
