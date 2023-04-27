import React from "react";
import "./SideProfile.scss";

const SideProfile = ({ user }) => {
  return (
    <div className="sideProfile">
      <img
        className="sideProfileImg"
        alt="mm"
        src="/images/hyunahPark/mm.jpg"
        width="60"
      />

      <div className="sideProfileId">
        <span className="sideProfileIdName">{user}</span>
        <span>Hyunah Park</span>
      </div>
    </div>
  );
};

export default SideProfile;
