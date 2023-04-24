import React, { useState } from "react";
import "./Main.scss";

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
          <div class="userInfo">
            <div>
              <div class="userImg" />
              <div class="userName">
                <span>hahah_</span>
              </div>
            </div>
            <div class="userMenu">
              <span>···</span>
            </div>
          </div>
          <div class="feedsImgs" />
          <div class="feedsWork">
            <div class="wokrs">
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
            <div class="bookmark">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
                alt="heart"
              />
            </div>
          </div>
          <div class="whoLike">
            <div class="whoIs">
              <div class="userImg" />
              <div>너당 외 100명이 좋아합니다</div>
            </div>
          </div>

          {/* reply */}
          <div>
            {/* reply list */}
            <ul>
              {REPLY.map(reply => {
                return (
                  <li key={reply.id}>
                    {reply.user}: {reply.comment}
                  </li>
                );
              })}
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
        <div class="me">
          <div class="myImg" />
          <div class="myName">
            <div class="myNickName">wecode_bootcamp</div>
            <div class="myRealkName">WeCode | 위코드</div>
          </div>
        </div>

        {/* <!-- aside > story --> */}
        <div class="story">
          <div class="rightHeaders">
            <sapn class="smallHeader">스토리</sapn>
            <span class="seeAll">모두 보기</span>
          </div>
          <div class="storyMain">
            <div class="users">
              <div class="userState">
                <div class="userImg" />
                <div class="userDesc">
                  <div class="userName">나다1</div>
                  <div class="userPlay">16분전</div>
                  <div class="userPlay" />
                </div>
              </div>
            </div>
            <div class="users">
              <div class="userState">
                <div class="userImg" />
                <div class="userDesc">
                  <div class="userName">나다2</div>
                  <div class="userPlay">3시간 전</div>
                </div>
              </div>
            </div>
            <div class="users">
              <div class="userState">
                <div class="userImg" />
                <div class="userDesc">
                  <div class="userName">나다3</div>
                  <div class="userPlay">20시간 전</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- aside > recomendUser --> */}
        <div class="recomendUser">
          <div class="rightHeaders">
            <sapn class="smallHeader">회원님을 위한 추천</sapn>
            <span class="seeAll">모두 보기</span>
          </div>
          <div class="recomendUserMain">
            <div class="users">
              <div class="userState">
                <div class="userImg" />
                <div class="userDesc">
                  <div class="userName">나추천1</div>
                  <div class="userPlay">~외 n명이 친구이삼</div>
                </div>
              </div>
              <div class="clickFollow">팔로우</div>
            </div>
            <div class="users">
              <div class="userState">
                <div class="userImg" />
                <div class="userDesc">
                  <div class="userName">나추천2</div>
                  <div class="userPlay">~외 n명이 친구이삼</div>
                </div>
              </div>
              <div class="clickFollow">팔로우</div>
            </div>
            <div class="users">
              <div class="userState">
                <div class="userImg" />
                <div class="userDesc">
                  <div class="userName">나추천3</div>
                  <div class="userPlay">~외 n명이 친구이삼</div>
                </div>
              </div>
              <div class="clickFollow">팔로우</div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Main;
