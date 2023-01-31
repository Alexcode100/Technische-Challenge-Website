import React from "react";

// import sample from "../Asserts/herosection-bg.mp4";

export default function Herosection() {
  return (
    <div className="herosection">
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <div className="left-buttons">
              <a className="uniswap" href="">
                Uniswap
              </a>
              <a className="dextools" href="">
                dextools
              </a>
            </div>
          </div>

          <div className="col-6">
            <div className="left-buttons">
              <a className="twitter" href="">
                twitter
              </a>
              <a className="telegram" href="">
                telegram
              </a>
            </div>
          </div>
        </div>
        <div className="row desktop-video">
          <div className="col-12 p-0">
            <video className="videoTag" autoPlay loop muted>
              <source src="./Asserts/HerosectionBG.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="row mobile-video">
          <div className="col-12 p-0">
            <video className="videoTag" autoPlay loop muted>
              <source src="./Asserts/HerosectionBG.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
