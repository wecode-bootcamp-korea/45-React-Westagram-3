import React from "react";
import "./Recommendation.scss";

const Recommendation = () => {
  return (
    <div className="recommendation">
      <div className="recommendationDomain">
        <span className="recTxt">회원님을 위한 추천</span>
        <span className="recViewAll">모두보기</span>
      </div>

      <div className="recommendationProfile">
        <img
          className="recProfileIdImg"
          alt="icecream"
          src="/images/hyunahPark/icecream.jpg"
          width="50"
        />

        <div className="recProfileId">
          <span className="recProfileIdName">hhyunah</span>
          <span>Hyunah Park</span>
        </div>
      </div>

      <div className="recommendationProfile">
        <img
          className="recProfileIdImg"
          alt="icecream"
          src="/images/hyunahPark/icecream.jpg"
          width="50"
        />

        <div className="recProfileId">
          <span className="recProfileIdName">hhyunah</span>
          <span>Hyunah Park</span>
        </div>
      </div>

      <div className="recommendationProfile">
        <img
          className="recProfileIdImg"
          alt="icecream"
          src="/images/hyunahPark/icecream.jpg"
          width="50"
        />

        <div className="recProfileId">
          <span className="recProfileIdName">hhyunah</span>
          <span>Hyunah Park</span>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
