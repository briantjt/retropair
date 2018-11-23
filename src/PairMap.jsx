import React from "react";

export default function PairMap({ pairs, round }) {
  return (
    <div className="pair-container">
      <h1>Round: {round + 1}</h1>
      {Object.keys(pairs).map(person => {
        return (
              <div className="float-names">
              <h2>{person}</h2>
              <h2>⟺</h2>
              <h2>{pairs[person]}</h2>
              </div>
        );
      })}
    </div>
  );
}
