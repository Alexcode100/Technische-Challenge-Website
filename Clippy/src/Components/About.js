import React from "react";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>About</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <p>
              <span>Clippy</span> - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet :
            </p>
          </div>
          <div className="col-md-6 text-right">
            <img src="./Asserts/AboutIMG.png" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
