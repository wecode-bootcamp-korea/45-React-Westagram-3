import React, { useNavigate } from "react-router-dom";
import "./Nav_kim.scss";

export const Nav_kim = () => {
  return (
    <nav id="mainNav">
      <div id="logos">
        <a className="westarLogo" href="main.html"></a>
        <a className="westarLogo2" href="login.html">
          Instagram
        </a>
      </div>
      <div id="searchThings">
        <input className="searchBar" placeholder="검색" />
      </div>

      <NavMenus_kim />
    </nav>
  );
};

export const NavMenus_kim = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login-junsob");
  };
  return (
    <div id="mainProfileThings">
      <a className="profileThings" id="mainCompass"></a>
      <a className="profileThings" id="mainNavHeart"></a>
      <a className="profileThings" id="mainMyPage" onClick={goToLogin}></a>
    </div>
  );
};
