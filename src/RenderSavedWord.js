import React from "react";

const RenderSavedWord = ({ word, rowIndex, correctWord }) => {
  const letters = word.split("");
  return (
    <div className="row" key={`row ${rowIndex}`}>
      {[...Array(5)].map((_, columnIndex) => {
        const char = letters[columnIndex] || "";
        let bgColor = "";

        if (correctWord[columnIndex] === char) {
          bgColor = "green";
        } else if (correctWord.includes(char)) {
          bgColor = "yellow";
        } else {
          bgColor = "red";
        }
        return (
          <div
            className="column"
            key={`column ${columnIndex}`}
            style={{
              backgroundColor: bgColor,
            }}
          >
            {char}
          </div>
        );
      })}
    </div>
  );
};

export default RenderSavedWord;
