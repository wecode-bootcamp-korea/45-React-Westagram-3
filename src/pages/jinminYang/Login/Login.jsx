import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="compNameDiv">
        <span className="compName">westagram</span>
      </div>
      <form>
        <input
          className="id"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input className="pw" type="password" placeholder="비밀번호" />
        <button className="loginButton" type="submit">
          로그인
        </button>
      </form>
      <div className="forgotPwDiv">
        <Link to="#">비밀번호를 잊으셨나요?</Link>
      </div>
    </div>
  );
};

export default Login;
