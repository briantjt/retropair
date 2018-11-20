import React from "react";

export default function PairMap({ pairs, round }) {
  return (
    <div>
      <h1>Round: {round+1}</h1>
      {Object.keys(pairs).map(person => {
        return (
          <h2 key={person}>
            {person}⟺{pairs[person]}
          </h2>
        )
      })}
    </div>
  );
}
