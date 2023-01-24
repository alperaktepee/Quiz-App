import React, { useState, useContext } from "react";
import { questions } from "../contexts/Questions";
import { QuizContext } from "../contexts/Contexts";

import "./Quiz.css";
const Quiz = () => {
  const { score, setScore, setGameState } = useContext(QuizContext);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const nextQuestion = () => {
    if (questions[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setCurrQuestion(currQuestion + 1);
  };
  const finishQuiz = () => {
    if (questions[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setGameState("endScreen");
  }
  return (
    <div className="quiz">
      <h1 className="questions">{questions[currQuestion].question}</h1>
      <div className="options">
        <button className="question-btn" onClick={() => setOptionChosen("A")}>
          {questions[currQuestion].optionA}
        </button>
        <button className="question-btn " onClick={() => setOptionChosen("B")}>
          {questions[currQuestion].optionB}
        </button>
        <button  className="question-btn" onClick={() => setOptionChosen("C")}>
          {questions[currQuestion].optionC}
        </button>
        <button  className="question-btn" onClick={() => setOptionChosen("D")}>
          {questions[currQuestion].optionD}
        </button>
      </div>
      <div className="selection-btns">
      {currQuestion === questions.length - 1 ? (
        <button className="menu-btns" onClick={finishQuiz}>Bitir</button>
      ) : (
        <button className="menu-btns" onClick={nextQuestion}>Sıradaki Soru</button>
      )}
      </div>
    </div>
  );
};

export default Quiz;
