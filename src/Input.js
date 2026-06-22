import React from "react";

const Input = ({ wordGuess, onChange }) => {
  return (
    <input
      id="word-input"
      className="input-box"
      type="text"
      placeholder="Type your guess"
      value={wordGuess}
      onChange={onChange}
    />
  );
};

export default Input;
