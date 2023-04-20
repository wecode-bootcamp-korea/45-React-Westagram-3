import React from "react";
import "./Main.scss";

const Main = () => {
  return (
    <main>
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
          {/* <!-- section > reply --> */}
          <div id="replies" class="replies">
            <div class="replyBox">
              <div class="userName">1</div>
              <div class="userTalk">하나</div>
              <div class="delReply">x</div>
            </div>
            <div class="replyBox">
              <div class="userName">2</div>
              <div class="userTalk">둘</div>
              <div class="delReply">x</div>
            </div>
          </div>
          <div class="typeReply">
            {/* <!-- <form id="replyForm" action="#"> --> */}
            <input id="inputReply" type="text" placeholder="댓글 달기..." />
            <input id="inputReplyBtn" type="button" value="게시" />
            {/* <!-- </form> --> */}
            <button id="check">확인</button>
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
    </main>
  );
};

export default Main;
