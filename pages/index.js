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
    if (userAnswer.trim().toLowerCase() === allQuestions[currentQuestion].answer.toLowerCase()) {
      setScore(score + 1);
    }
    setUserAnswer("");
    nextQuestion();
  };

  const nextQuestion = () => {
    if (currentQuestion < allQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      {!showResult ? (
        <div>
          <h2>{allQuestions[currentQuestion].question}</h2>
          {allQuestions[currentQuestion].type === "multiple-choice" ? (
            allQuestions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)} style={{ margin: "5px", padding: "10px" }}>
                {option}
              </button>
            ))
          ) : (
            <div>
              <input type="text" value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} />
              <button onClick={handleTextAnswer}>Submit</button>
            </div>
          )}
        </div>
      ) : (
        <div>
          <h2>Quiz Finished!</h2>
          <p>Your score: {score} / {allQuestions.length}</p>
          <button onClick={() => window.location.reload()}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
}
