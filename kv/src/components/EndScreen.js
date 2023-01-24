import React, { useState, useContext } from "react";
import { questions } from "../contexts/Questions";
import { QuizContext } from "../contexts/Contexts";
import "./EndScreen.css"

const EndScreen = () => {
  const {score, setScore,setGameState}= useContext(QuizContext);
  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  }
  return (
    <div className="endScreen">
      <h1>Quiz Bitti</h1>
      <h3> {score} / {questions.length} </h3>
      <button className="end-btn" onClick={restartQuiz}>Yeniden Dene</button>
    </div>
  )
}

export default EndScreen
