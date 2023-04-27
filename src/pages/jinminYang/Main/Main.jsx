import React, { useState } from 'react';
import Feed from './components/Feed';
import { FOOTER_INFO_LIST } from './components/FOOTER_INFO_LIST';
import './Main.scss';

const Main = ({ darkMode }) => {
  // 변수
  const [feedList, setFeedList] = useState([]);

  // 동작
  useState(() => {
    fetch(`/data/data.json`)
      .then(res => res.json())
      .then(res => setFeedList(res));
  });

  // 출력
  return (
    <div className={`main ${darkMode ? `darkMode` : `brightMode2`}`}>
      {/* feeds */}
      <div className={`feeds ${darkMode ? `darkMode` : `brightMode2`}`}>
        {feedList.map(item => (
          <Feed key={item.id} item={item} darkMode={darkMode} />
        ))}
        {/* <Feed /> */}
      </div>

      {/* <!-- aside --> */}
      <aside className="aside">
        {/* <!-- aside > me --> */}
        {/* <div className="me">
          <div className="myImg" />
          <div className="myName">
            <div className="myNickName">wecode_bootcamp</div>
            <div className="myRealkName">WeCode | 위코드</div>
          </div>
        </div> */}

        {/* <!-- aside > story --> */}
        {/* <div className="story">
          <div className="rightHeaders">
            <span className="smallHeader">스토리</span>
            <span className="seeAll">모두 보기</span>
          </div>
          <div className="storyMain">
            <div className="users">
              <div className="userState">
                <div className="userImg" />
                <div className="userDesc">
                  <div className="userName">나다1</div>
                  <div className="userPlay">16분전</div>
                  <div className="userPlay" />
                </div>
              </div>
            </div>
            <div className="users">
              <div className="userState">
                <div className="userImg" />
                <div className="userDesc">
                  <div className="userName">나다2</div>
                  <div className="userPlay">3시간 전</div>
                </div>
              </div>
            </div>
            <div className="users">
              <div className="userState">
                <div className="userImg" />
                <div className="userDesc">
                  <div className="userName">나다3</div>
                  <div className="userPlay">20시간 전</div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <!-- aside > recomendUser --> */}
        {/* <div className="recomendUser">
          <div className="rightHeaders">
            <span className="smallHeader">회원님을 위한 추천</span>
            <span className="seeAll">모두 보기</span>
          </div>
          <div className="recomendUserMain">
            <div className="users">
              <div className="userState">
                <div className="userImg" />
                <div className="userDesc">
                  <div className="userName">나추천1</div>
                  <div className="userPlay">~외 n명이 친구이심</div>
                </div>
              </div>
              <div className="clickFollow">팔로우</div>
            </div>
            <div className="users">
              <div className="userState">
                <div className="userImg" />
                <div className="userDesc">
                  <div className="userName">나추천2</div>
                  <div className="userPlay">~외 n명이 친구이심</div>
                </div>
              </div>
              <div className="clickFollow">팔로우</div>
            </div>
            <div className="users">
              <div className="userState">
                <div className="userImg" />
                <div className="userDesc">
                  <div className="userName">나추천3</div>
                  <div className="userPlay">~외 n명이 친구이심</div>
                </div>
              </div>
              <div className="clickFollow">팔로우</div>
            </div>
          </div>
        </div> */}

        {/* etc. */}
        <footer className="footer">
          <ul>
            {FOOTER_INFO_LIST.map((item, index) => (
              <li key={item.id}>
                {item.menu} {FOOTER_INFO_LIST.length - 1 !== index && ` · `}
              </li>
            ))}
          </ul>
        </footer>
      </aside>
    </div>
  );
};

export default Main;
