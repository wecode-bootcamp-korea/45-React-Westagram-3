import React from "react";
import "./Nav.scss";

import InstaIcon from "../../assets/hyunahPark/instaicon.png";
import ExploreIcon from "../../assets/hyunahPark/explore.png";
import heartIcon from "../../assets/hyunahPark/heart.png";
import profileIcon from "../../assets/hyunahPark/profile.png";

const Nav = () => {
  return (
    <nav className="nav">
      <span className="navPart">
        <img
          alt="instagram icon"
          src={InstaIcon}
          className="instagramIcon"
          width="40"
        />
        <span className="westagramLogo">&nbsp;westagram</span>
      </span>

      <span className="navPart">
        <input type="text" className="search" placeholder="검색" />
      </span>

      <span className="navPart">
        <img
          alt="explore"
          src={ExploreIcon}
          className="exploreIcon"
          width="40"
        />
        <img alt="heart" src={heartIcon} className="heartIcon" width="40" />
        <img
          alt="profile"
          src={profileIcon}
          className="profileIcon"
          width="40"
        />
      </span>
    </nav>
  );
};

export default Nav;
