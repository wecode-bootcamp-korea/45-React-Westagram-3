import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  const isValidBtn = !userId.includes("@") || userPw.length < 5;
  const btnMode = isValidBtn ? "notValid" : "valid";

  const saveUserID = e => {
    setUserId(e.target.value);
  };

  const saveUserPw = e => {
    setUserPw(e.target.value);
  };

  const handleBtn = () => {
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
            onChange={saveUserID}
          />
          <input
            className="password"
            type="password"
            required
            placeholder=" 비밀번호"
            onChange={saveUserPw}
          />
          <button
            className={`button ${btnMode}`}
            onClick={handleBtn}
            disabled={isValidBtn}
          >
            로그인
          </button>
        </div>

        <h2 className="forget">비밀번호를 잊으셨나요?</h2>
      </div>
    </div>
  );
};

export default Login;
