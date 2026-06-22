import React from "react";

const SubmitButton = ({ onClick, won, lost }) => {
  return (
    <button className="submit-button" disabled={lost || won} onClick={onClick}>
      Submit
    </button>
  );
};

export default SubmitButton;
