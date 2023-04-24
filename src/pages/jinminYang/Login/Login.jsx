import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  // 변수
  const [id, setId] = useState(``);
  const [pw, setPw] = useState(``);

  // 함수
  const saveUserId = e => {
    setId(e.target.value);
  };

  const saveUserPw = e => {
    setPw(e.target.value);
  };

  const blockRefresh = e => {
    alert(`전송`);
    e.preventDefault();
  };

  // 출력
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
          onChange={saveUserId}
        />
        <input
          className="pw"
          type="password"
          placeholder="비밀번호"
          onChange={saveUserPw}
        />
        {id.includes(`@`) && pw.length >= 5 ? (
          <button className="btnColorTrue" onClick={e => blockRefresh(e)}>
            로그인
          </button>
        ) : (
          <button className="btnColorFalse" disabled>
            로그인
          </button>
        )}
      </form>
      <div className="forgotPwDiv">
        <Link to="#">비밀번호를 잊으셨나요?</Link>
      </div>
    </div>
  );
};

export default Login;
