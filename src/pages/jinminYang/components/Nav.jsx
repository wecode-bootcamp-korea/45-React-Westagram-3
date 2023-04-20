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
    </>
  );
};

export default Nav;
