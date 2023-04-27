import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";

const LoginPage = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const goToMain = () => {
    navigate("/main-junsob");
  };

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const isUserIdValid = userId.includes("@");
  const isPasswordValid = password.length >= 5;
  const isLoginButtonDisabled = !isUserIdValid || !isPasswordValid;

  return (
    <div className="mainPage">
      <div className="mainContents">
        <div className="titleLogin">Instagram</div>
        <div className="inputsLogin">
          <input
            className="userIdInput"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            value={userId}
            onChange={handleUserIdChange}
          />
          <input
            className="passwordInput"
            type="password "
            placeholder="비밀번호"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="submitLogin">
          <button
            id="loginButton"
            onClick={goToMain}
            disabled={isLoginButtonDisabled}
            className={isLoginButtonDisabled ? "" : "active"}
          >
            로그인
          </button>
        </div>
        <a href="" className="forgotLogin">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </div>
  );
};

export default LoginPage;
