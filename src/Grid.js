import React from "react";
import RenderEmptyRow from "./RenderEmptyRow";
import RenderSavedWord from "./RenderSavedWord";

const Grid = ({ submittedGuesses, correctWord }) => {
  return (
    <div className="grid">
      {[...Array(5)].map((row, rowIndex) => {
        if (rowIndex < submittedGuesses.length) {
          return (
            <RenderSavedWord
              correctWord={correctWord}
              word={submittedGuesses[rowIndex]}
              rowIndex={rowIndex}
              key={`saved-${rowIndex}`}
            />
          );
        } else {
          return (
            <RenderEmptyRow rowIndex={rowIndex} key={`empty-${rowIndex}`} />
          );
        }
      })}
    </div>
  );
};

export default Grid;
