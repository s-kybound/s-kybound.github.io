import React from "react";
import lost from "../assets/svg/confused-bot.svg";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>how did you get here?</h1>
        <img src={lost} className="App-logo" alt="logo" />
        <p>you seem to be lost...</p>
        <p>
          here, a link back {"---> "}
          <Link to="/home">Home</Link>
        </p>
      </header>
    </div>
  );
}

export default PageNotFound;
