import React from "react";
import "./index.css";
import carddata from "./carddata";
import Card from "./Card";

function App() {
  return (
    <div className="options" data-testid="options-test">
      {carddata.map(card => (
        <Card
          key={card.iconId}
          iconId={card.iconId}
          h2={card.h2}
          main={card.main}
          sub={card.sub}
        />
      ))}
    </div>
  );
}

export default App;
