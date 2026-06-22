import "./styles.css";
import React, { useState } from "react";
import Grid from "./Grid";
import Input from "./Input";
import SubmitButton from "./SubmitButton";

export default function App() {
  const [wordGuess, setWordGuess] = useState("");
  const [won, setWon] = useState(false);
  const [lost, setLost] = useState(false);
  const [submittedGuesses, setSubmittedGuesses] = useState([]); // words past rows
  const correctWord = "SPENT".toLowerCase();

  const onChange = (e) => {
    console.log(e.target.value);
    let inputVal = e.target.value;
    // ensure input never goes past 5
    if (inputVal.length <= 5) {
      let wordGuessLowerCase = e.target.value.toLowerCase();
      setWordGuess(wordGuessLowerCase);
    }
  };

  const onClickHandler = (e) => {
    if (lost || won) return;

    if (wordGuess.length === 5) {
      const futureGuesses = [...submittedGuesses, wordGuess];
      setSubmittedGuesses(futureGuesses);

      if (wordGuess === correctWord) {
        setWon(true);
      } else if (futureGuesses.length === 5) {
        setLost(true);
      }

      setWordGuess("");
    }
  };

  return (
    <div className="App">
      <h1>Guess The Word</h1>
      {lost && <h3>You've Lost </h3>}
      {won && <h3>You've Won</h3>}
      <Grid submittedGuesses={submittedGuesses} correctWord={correctWord} />
      <div className="input-container">
        <Input wordGuess={wordGuess} onChange={onChange} />
        <SubmitButton onClick={onClickHandler} won={won} lost={lost} />
      </div>
    </div>
  );
}
