import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// 김준섭님의 컴포넌트
import LoginJunsob from "./pages/junsobKim/Login/Login";
import MainJunsob from "./pages/junsobKim/Main/Main";

// 박현아님의 컴포넌트
import LoginHyunah from "./pages/hyunahPark/Login/Login";
import MainHyunah from "./pages/hyunahPark/Main/Main";

// 양진민님의 컴포넌트
import MainJinmin from "./pages/jinminYang/Main/Main";
import LoginJinmin from "./pages/jinminYang/Login/Login";
import Nav from "./components/Nav/Nav";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element="안녕" />

        {/* 김준섭님의 route */}
        <Route path="/login-junsob" element={<LoginJunsob />} />
        <Route path="/main-junsob" element={<MainJunsob />} />

        {/* 박현아님의 route */}
        <Route path="/login-hyunah" element={<LoginHyunah />} />
        <Route path="/main-hyunah" element={<MainHyunah />} />

        {/* 양진민님의 route */}
        <Route path="/login-jinmin" element={<LoginJinmin />} />
        <Route path="/main-jinmin" element={<MainJinmin />} />

        <Route path="*" element="없는 페이지예용~" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
