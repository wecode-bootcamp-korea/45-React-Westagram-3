import React from "react";
import { Nav_kim } from "./Nav_kim";
import { LeftArticle_kim } from "./LeftArticle_kim";
import { RightSection_kim } from "./RightSection_kim";
import "./Main.scss";

const Main = () => {
  return (
    <div className="main">
      <header className="header">
        <Nav_kim />
      </header>
      <div className="main-contents-container">
        <LeftArticle_kim />
        <RightSection_kim />
      </div>
    </div>
  );
};
export default Main;
