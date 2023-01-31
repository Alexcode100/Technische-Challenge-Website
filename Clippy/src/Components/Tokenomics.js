import React from "react";

export default function Tokenomics() {
  return (
    <div className="tokenomics">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1>Tokenomics</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 order-md-1 order-3 text-center">
            <img
              src="/Asserts/TornadoTokenomics.png"
              className="img-fluid tok-1"
              alt=""
            />
          </div>
          <div className="col-md-4 order-md-2 order-1 text-center text-md-center">
            <img
              src="/Asserts/TokenomicsPicture.png"
              className="img-fluid tok-2"
              alt=""
            />
          </div>
          <div className="col-md-4 order-md-3 order-2 bottom-pd">
            <h6>3% Buy back</h6>
            <h5>Able to sustain mid to long term</h5>

            <h6>4% Marketing</h6>
            <h5>making sure our tea is sipped</h5>

            <h6>2% LP</h6>
            <h5>Increasing the ever rising price floor</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
