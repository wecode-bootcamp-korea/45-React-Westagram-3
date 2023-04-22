import React from "react";
import "./Login.scss";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate("/main-hyunah");
  };

  return (
    <div className="login">
      <div className="loginBox">
        <h1 className="logo">Westagram</h1>

        <div className="inputPart" id="inputPart">
          <input
            className="id"
            type="text"
            placeholder=" 전화번호, 사용자 이름 또는 이메일"
          />
          <input
            className="password"
            type="password"
            required
            placeholder=" 비밀번호"
          />
          <input
            className="button"
            type="button"
            value="로그인"
            onClick={handleButton}
          />
        </div>

        <h2 className="forget">비밀번호를 잊으셨나요?</h2>
      </div>
    </div>
  );
};

export default Login;
