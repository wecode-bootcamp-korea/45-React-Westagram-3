import React, { useState } from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";

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
    <div id="mainPage">
      <div id="titleLogin">Instagram</div>
      <div id="inputsLogin">
        <input
          id="contactLogin"
          className="userIdInput"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          value={userId}
          onChange={handleUserIdChange}
        />
        <input
          id="passwordLogin"
          className="passwordInput"
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div id="submitLogin">
        <button
          id="loginButton"
          onClick={goToMain}
          disabled={isLoginButtonDisabled}
          className={isLoginButtonDisabled ? "" : "active"}
        >
          로그인
        </button>
      </div>
      <a href="" id="forgotLogin">
        비밀번호를 잊으셨나요?
      </a>
    </div>
  );
};

export default LoginPage;
