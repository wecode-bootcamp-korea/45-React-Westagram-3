import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [id, setId] = useState(null);
  const [pw, setPw] = useState(null);

  const saveUserId = e => {
    setId(e.target.value);
  };

  const saveUserPw = e => {
    setPw(e.target.value);
  };

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
          onChange={e => saveUserId(e)}
        />
        <input
          className="pw"
          type="password"
          placeholder="비밀번호"
          onChange={e => saveUserPw(e)}
        />
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
