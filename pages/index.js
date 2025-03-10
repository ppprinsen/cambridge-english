import React, { useState } from "react";

const allQuestions = [
  // Present Simple vs Present Continuous
  {
    question: "She usually __ to school by bus, but today she __.",
    options: ["go / walks", "goes / is walking", "went / walks"],
    answer: "goes / is walking",
    type: "multiple-choice"
  },
  {
    question: "What __ you __ at the moment? You look busy.",
    answer: "are doing",
    type: "fill-in"
  },
];

export default function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    if (option === allQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }
    nextQuestion();
  };

  const handleTextAnswer = () => {
    if (userAnswer.t
