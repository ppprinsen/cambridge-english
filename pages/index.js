import React, { useState, useEffect } from "react";

// 100 unieke vragen
const allQuestions = [
  { question: "She usually __ to school by bus, but today she __.", options: ["go / walks", "goes / is walking", "went / walks"], answer: "goes / is walking", type: "multiple-choice" },
  { question: "What __ you __ at the moment? You look busy.", answer: "are doing", type: "fill-in" },
  { question: "While I __ home, it __ to rain.", options: ["walked / started", "was walking / started", "walk / starts"], answer: "was walking / started", type: "multiple-choice" },
  { question: "He __ asleep while he __ a book.", answer: "fell was reading", type: "fill-in" },
  { question: "The keys are __ the table.", options: ["on", "in", "at"], answer: "on", type: "multiple-choice" },
  { question: "The book was written __ a famous author __ the 19th century.", answer: "by in", type: "fill-in" },
  { question: "I __ a lot of homework to do today.", options: ["has", "had", "have"], answer: "have", type: "multiple-choice" },
  { question: "She __ to the doctor because she was feeling sick.", answer: "went", type: "fill-in" },
  { question: "He __ very happy yesterday.", answer: "was", type: "fill-in" },
  { question: "They __ to the park last weekend.", answer: "went", type: "fill-in" },
];

// 90 extra unieke vragen genereren
for (let i = 10; i < 100; i++) {
  allQuestions.push({
    question: `Question ${i + 1}: Fill in the blank.`,
    answer: `answer${i + 1}`,
    type: i % 2 === 0 ? "fill-in" : "multiple-choice",
    options: i % 2 === 0 ? [] : [`option${i + 1}-1`, `option${i + 1}-2`, `option${i + 1}-3`],
  });
}

// Functie om 10 willekeurige vragen te selecteren
const getRandomQuestions = (questionsArray, numQuestions) => {
  let shuffled = [...questionsArray].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, numQuestions);
};

export default function QuizApp() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [mistakes, setMistakes] = useState([]);

  // Selecteer willekeurig 10 vragen bij het starten
  useEffect(() => {
    setQuestions(getRandomQuestions(allQuestions, 10));
  }, []);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    } else {
      setMistakes([...mistakes, { question: questions[currentQuestion].question, correct: questions[currentQuestion].answer }]);
    }
    nextQuestion();
  };

  const handleTextAnswer = () => {
    if (userAnswer.trim().toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
      setScore(score + 1);
    } else {
      setMistakes([...mistakes, { question: questions[currentQuestion].question, correct: questions[currentQuestion].answer }]);
    }
    setUserAnswer("");
    nextQuestion();
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      {!showResult ? (
        questions.length > 0 ? (
          <div>
            <h2>{questions[currentQuestion].question}</h2>
            {questions[currentQuestion].type === "multiple-choice" ? (
              questions[currentQuestion].options.map((option, index) => (
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
          <p>Loading questions...</p>
        )
      ) : (
        <div>
          <h2>Quiz Finished!</h2>
          <p>Your score: {score} / {questions.length}</p>
          {mistakes.length > 0 && (
            <div>
              <h3>Review your mistakes:</h3>
              {mistakes.map((mistake, index) => (
                <p key={index}>{mistake.question} <br /> <strong>Correct answer:</strong> {mistake.correct}</p>
              ))}
            </div>
          )}
          <button onClick={() => window.location.reload()}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
}
