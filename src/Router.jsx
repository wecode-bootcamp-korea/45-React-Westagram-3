import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// 김준섭님의 컴포넌트
import LoginJunsob from './pages/junsobKim/Login/Login';
import MainJunsob from './pages/junsobKim/Main/Main';

// 박현아님의 컴포넌트
import LoginHyunah from './pages/hyunahPark/Login/Login';
import MainHyunah from './pages/hyunahPark/Main/Main';

// 양진민님의 컴포넌트
import MainJinmin from './pages/jinminYang/Main/Main';
import LoginJinmin from './pages/jinminYang/Login/Login';
import Nav from './pages/jinminYang/components/Nav';

const Router = () => {
  // 변수
  const [darkMode, setDarkMode] = useState(false);
  const body = document.querySelector(`body`);
  body.style.backgroundColor = darkMode ? `black` : `#fafafa`;

  // 출력
  return (
    <BrowserRouter>
      <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element="안녕" />

        {/* 김준섭님의 route */}
        <Route path="/login-junsob" element={<LoginJunsob />} />
        <Route path="/main-junsob" element={<MainJunsob />} />

        {/* 박현아님의 route */}
        <Route path="/login-hyunah" element={<LoginHyunah />} />
        <Route path="/main-hyunah" element={<MainHyunah />} />

        {/* 양진민님의 route */}
        <Route
          path="/login-jinmin"
          element={
            <LoginJinmin darkMode={darkMode} setDarkMode={setDarkMode} />
          }
        />
        <Route
          path="/main-jinmin"
          element={<MainJinmin darkMode={darkMode} setDarkMode={setDarkMode} />}
        />

        <Route path="*" element="없는 페이지예용~" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
