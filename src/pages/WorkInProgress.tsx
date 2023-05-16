import React from "react";
import wip from "../assets/svg/wip-bot.svg";
import { Link } from "react-router-dom";

function WorkInProgress() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>work in progress!</h1>
        <img src={wip} className="App-logo" alt="logo" />
        <p>good news! whatever link you clicked will exist!... unfortunately, not yet.</p>
        <p>
          here, a link back {"---> "}
          <Link to="/home">Home</Link>
        </p>
      </header>
    </div>
  );
}

export default WorkInProgress;
