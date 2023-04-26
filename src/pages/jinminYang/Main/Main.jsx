import React, { useState } from 'react';
import { FOOTER_INFO_LIST } from './components/FOOTER_INFO_LIST';
import './Main.scss';
import Reply from './components/Reply';

const Main = () => {
  // 변수
  const [id, setId] = useState(1);
  const [comment, setComment] = useState(``);
  const [REPLIES, setREPLIES] = useState([
    { id: 0, user: `하이`, comment: `ㅋㅋ` },
  ]);

  // 함수
  const replyInput = e => {
    e.preventDefault();
    setComment(e.target.value);
  };

  const replyButton = () => {
    if (comment.length) {
      setREPLIES([...REPLIES, { id, user: `메롱${id}`, comment }]);
      setId(id => ++id);
      setComment(``);
    } else {
      alert(`댓글을 입력하세요ㅎ`);
    }
  };

  // 출력
  return (
    <div className="main">
      {/* feeds */}
      <div className="feeds">
        <div className="feed">
          {/* userInfo */}
          <div className="userInfo">
            <div className="userSimpleProfile">
              <img
                className="userImg"
                src="https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E"
                alt=""
              />
              <div className="userName">hahah_</div>
            </div>
            <div className="userMenu">
              <span>···</span>
            </div>
          </div>
          {/* feedImg */}
          <div className="feedImg">
            <img
              src="https://danawalab.github.io/images/2022-12-29-nextjs-devstory/10.gif"
              alt=""
            />
          </div>
          {/* feedTool */}
          <div className="feedTool">
            <div className="works">
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
          {/* whoLike */}
          <div className="whoLike">
            <div className="whoIs">
              <div className="userImg" />
              <div>키키 외 100명이 좋아합니다</div>
            </div>
          </div>
          {/* replyList */}
          <ul className="replyList">
            {REPLIES.map(reply => (
              <Reply key={reply.id} reply={reply} />
            ))}
          </ul>
          {/* writeTime */}
          <div className="writeTime">42분전</div>
          {/* replyInput */}
          <form className="replyForm" onSubmit={e => e.preventDefault()}>
            <input
              type="text"
              value={comment}
              placeholder="댓글 달기..."
              onChange={e => replyInput(e)}
            />
            <button onClick={() => replyButton()}>게시</button>
          </form>
        </div>
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
        {/* <footer className="footer">
          <ul>
            <li>소개</li>
            {FOOTER_INFO_LIST.map(item => (
              <li key={item.id}>{"\u00A0· " + item.menu}</li>
            ))}
          </ul>
        </footer> */}
      </aside>
    </div>
  );
};

export default Main;
