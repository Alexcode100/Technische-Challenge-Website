import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#Herosection">
                WELCOME
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">
                ABOUT
              </a>
            </li>
              <a class="navbar-brand" href="#howtobuy">
                Clippy
              </a>
            <li class="nav-item">
              <a class="nav-link" href="#tokenomics">
                TOKENOMICS
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#howtobuy">
                HOW TO BUY
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
