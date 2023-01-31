import React from "react";

export default function Roadmap() {
  return (
    <div className="roadmap" id="roadmap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 colud1 text-center">
            <div>
              <img src="./Asserts/RoadmapCloud1.png" className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <h1>Roadmap</h1>
          </div>
          <div className="col-md-4 colud2 text-center arrow ">
            <img src="./Asserts/RoadmapCloud1.png" className="img-fluid" alt="" />
          </div>
        </div>
        <div className="row mt-6">
          <div className="col-1"></div>
          <div className="col-md-2">
            <h5>Phase 1</h5>
            <p>
              Launch on 28th <br /> 500 Holders <br /> Doge Raids
            </p>
          </div>
          <div className="col-md-2 arrow text-center align-self-center">
            <img src="./Asserts/arrow.png" className="img-fluid" alt="" />
          </div>
          <div className="col-md-2">
            <h5>Phase 2</h5>
            <p>
            Excepteur sint occaecat <br /> Clippy <br /> Duis aute irure
            </p>
          </div>
          <div className="col-md-2 arrow text-center fliping align-self-center">
            <img src="./Asserts/arrow.png" className="img-fluid" alt="" />
          </div>
          <div className="col-md-2">
            <h5>Phase 3</h5>
            <p>
              10.000 TG members <br /> CEX listing <br /> HomerShiba
            </p>
          </div>
          <div className="col-1"></div>
        </div>

        <div className="row">
          <div className="col-12">
            <h4>
              This website does not constitute nor implies a prospectus of any
              sort. No wording contained herein should be construed as a
              solicitation for investment. Accordingly, this white-paper/website
              does not pertain in any way to an offering of securities in any
              jurisdiction worldwide whatsoever. Rather, this white-paper and
              website constitutes a technical description of the functionality
              of the SlaveInu ecosystem, it is a degen play
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
