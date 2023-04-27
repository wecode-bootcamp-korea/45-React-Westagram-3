import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

console.log(localStorage.getItem("key"));

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

  const handleSignupBtn = () => {
    // navigate("/main-hyunah");
    // setSignup({ email: userId, password: userPw });

    fetch("http://10.58.52.194:3000/users/signup", {
      method: "POST",
      headers: { "Content-type": "application/json;utf=8" },
      body: JSON.stringify({ email: userId, password: userPw }),
    })
      .then(response => response.json())
      .then(signUpdata => console.log(signUpdata));
  };

  const handleLoginBtn = () => {
    // navigate("/main-hyunah");
    // setSignup({ email: userId, password: userPw });

    fetch("http://10.58.52.194:3000/users/login", {
      method: "POST",
      headers: { "Content-type": "application/json;utf=8" },
      body: JSON.stringify({ email: userId, password: userPw }),
    })
      .then(response => response.json())
      .then(loginData => {
        console.log(loginData);

        if (loginData.accessToken) {
          localStorage.setItem("key", loginData.accessToken);
          navigate("/main-hyunah");
        }
      });
  };

  const handleKeyUp = e => {
    if (!isValidBtn && e.key === "Enter") {
      // navigate("/main-hyunah");
      // setSignup({ email: userId, password: userPw });
    }
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
            onKeyUp={handleKeyUp}
          />
          <input
            className="password"
            type="password"
            required
            placeholder=" 비밀번호"
            onChange={saveUserPw}
            onKeyUp={handleKeyUp}
          />
          <button
            className={`button ${btnMode}`}
            onClick={handleSignupBtn}
            disabled={isValidBtn}
          >
            signup
          </button>
          <button
            className={`button ${btnMode}`}
            onClick={handleLoginBtn}
            disabled={isValidBtn}
          >
            login
          </button>
        </div>

        <h2 className="forget">비밀번호를 잊으셨나요?</h2>
      </div>
    </div>
  );
};

export default Login;
