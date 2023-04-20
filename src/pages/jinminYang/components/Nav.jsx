import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <>
      <Link to="/login-jinmin">로그인</Link>
      <span> </span>
      <Link to="/main-jinmin">메인</Link>
      <div>Nav</div>
      {/* <div class="co">
        <div class="coImgDiv">
          <img src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png" alt="logoImg" />
        </div>
        <div class="coNameDiv">
          <span>westagram</span>
        </div>
      </div>
      <div class="searchDiv">
        <input type="text" class="searchBar" placeholder="검색" />
      </div>
      <div class="userDiv">
        <div>
          <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" alt="">
        </div>
        <div>
          <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="">
        </div>
        <div id="navUserImg">
          <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" alt="">
        </div>
      </div>
      <div id="navMyMenu">
        프로필<br>
        저장됨<br>
        설정<br>
        로그아웃<br>
      </div> */}
    </>
  );
};

export default Nav;
