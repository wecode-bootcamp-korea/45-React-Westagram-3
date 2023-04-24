import React, { useState } from "react";
import Reply from "./components/Reply";
import "./Main.scss";
import { FOOTER_INFO_LIST } from "./components/FOOTER_INFO_LIST";

const Main = () => {
  // 변수
  const [id, setId] = useState(1);
  const [comment, setComment] = useState(``);
  const [REPLY, setREPLY] = useState([
    { id: 0, user: `하이`, comment: `ㅋㅋ` },
  ]);

  // 함수
  const replyInput = e => {
    e.preventDefault();
    setComment(e.target.value);
  };

  const replyButton = () => {
    if (comment.length) {
      REPLY.push({ id, user: `메롱${id}`, comment });
      setREPLY(REPLY);
      setId(id => ++id);
      setComment(``);
    } else {
      alert(`댓글을 입력하세요ㅎ`);
    }
  };

  // 출력
  return (
    <div className="main">
      {/* <!-- section --> */}
      <section>
        <article>
          <div className="userInfo">
            <div>
              <div className="userImg" />
              <div className="userName">
                <span>hahah_</span>
              </div>
            </div>
            <div className="userMenu">
              <span>···</span>
            </div>
          </div>
          <div className="feedsImgs" />
          <div className="feedsWork">
            <div className="wokrs">
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
          <div className="whoLike">
            <div className="whoIs">
              <div className="userImg" />
              <div>너당 외 100명이 좋아합니다</div>
            </div>
          </div>

          {/* reply */}
          <div>
            {/* reply list */}
            <ul>
              {REPLY.map(reply => (
                <Reply key={reply.id} reply={reply} />
              ))}
            </ul>
            {/* input reply */}
            <form onSubmit={e => e.preventDefault()}>
              <input
                type="text"
                value={comment}
                onChange={e => replyInput(e)}
              />
              <button onClick={() => replyButton()}>게시</button>
            </form>
          </div>
        </article>
      </section>

      {/* <!-- aside --> */}
      <aside>
        {/* <!-- aside > me --> */}
        <div className="me">
          <div className="myImg" />
          <div className="myName">
            <div className="myNickName">wecode_bootcamp</div>
            <div className="myRealkName">WeCode | 위코드</div>
          </div>
        </div>

        {/* <!-- aside > story --> */}
        <div className="story">
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
        </div>

        {/* <!-- aside > recomendUser --> */}
        <div className="recomendUser">
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
        </div>
      </aside>

      {/* etc. */}
      <footer>
        <ul>
          <li>소개</li>
          {FOOTER_INFO_LIST.map(item => (
            <li key={item.id}>{"\u00A0· " + item.menu}</li>
          ))}
        </ul>
      </footer>
    </div>
  );
};

export default Main;
