import React from "react";
import "./Story.scss";

const Story = () => {
  return (
    <div className="story">
      <div className="storyDomain">
        <span className="storyTxt">스토리</span>
        <span className="storyViewAll">모두보기</span>
      </div>

      <div className="storyProfile">
        <img
          className="storyProfileIdImg"
          alt="icecream"
          src="/images/hyunahPark/icecream.jpg"
          width="50"
        />

        <div className="storyProfileId">
          <span className="storyProfileIdName">hhyunah</span>
          <span>Hyunah Park</span>
        </div>
      </div>

      <div className="storyProfile">
        <img
          className="storyProfileIdImg"
          alt="icecream"
          src="/images/hyunahPark/icecream.jpg"
          width="50"
        />

        <div className="storyProfileId">
          <span className="storyProfileIdName">hhyunah</span>
          <span>Hyunah Park</span>
        </div>
      </div>

      <div className="storyProfile">
        <img
          className="storyProfileIdImg"
          alt="icecream"
          src="/images/hyunahPark/icecream.jpg"
          width="50"
        />

        <div className="storyProfileId">
          <span className="storyProfileIdName">hhyunah</span>
          <span>Hyunah Park</span>
        </div>
      </div>
    </div>
  );
};

export default Story;
