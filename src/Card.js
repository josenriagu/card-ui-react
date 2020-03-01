import React from "react";
import toggle from "./toggle";

function Card({ iconId, h2, main, sub }) {
  return (
    <div className="option">
      <div className="label">
        <div className="icon" id={iconId} onClick={() => toggle(iconId)}>
          <h2>{h2}</h2>
        </div>
        <div className="info">
          <div className="main">{main}</div>
          <div className="sub">
            <p>{sub}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
