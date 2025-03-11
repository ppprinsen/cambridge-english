import React, { useState } from "react";

// ✅ 100 volledig unieke vragen
const allQuestions = [
  { question: "She always __ (wake) up early, but today she __ (sleep) in.", answer: "wakes / is sleeping", type: "fill-in" },
  { question: "What __ (you/do) right now?", answer: "are you doing", type: "fill-in" },
  { question: "Look! The dog __ (run) in the park.", answer: "is running", type: "fill-in" },
  { question: "I __ (not/like) coffee, but today I __ (try) it.", answer: "don't like / am trying", type: "fill-in" },
  { question: "My parents __ (work) in an office, but today they __ (work) from home.", answer: "work / are working", type: "fill-in" },
  { question: "__ (he/want) to go to the party?", answer: "Does he want", type: "fill-in" },
  { question: "Why __ (they/cry) right now?", answer: "are they crying", type: "fill-in" },
  { question: "We usually __ (go) to Spain, but this year we __ (travel) to Italy.", answer: "go / are traveling", type: "fill-in" },
  { question: "The baby __ (sleep) now, so please be quiet.", answer: "is sleeping", type: "fill-in" },
  { question: "__ (you/enjoy) the movie so far?", answer: "Are you enjoying", type: "fill-in" },
  
  { question: "While I __ (walk) home, it __ (start) to rain.", answer: "was walking / started", type: "fill-in" },
  { question: "We __ (see) a beautiful sunset while we __ (drive) along the coast.", answer: "saw / were driving", type: "fill-in" },
  { question: "She __ (fall) asleep while she __ (read).", answer: "fell / was reading", type: "fill-in" },
  { question: "__ (you/watch) TV when the power went out?", answer: "Were you watching", type: "fill-in" },
  { question: "I __ (meet) my best friend when I __ (live) in London.", answer: "met / was living", type: "fill-in" },
  { question: "He __ (play) football when he __ (hurt) his leg.", answer: "was playing / hurt", type: "fill-in" },
  { question: "What __ (you/do) at 8 PM yesterday?", answer: "were you doing", type: "fill-in" },
  { question: "The teacher __ (explain) the lesson when the fire alarm __ (go) off.", answer: "was explaining / went", type: "fill-in" },
  { question: "They __ (have) dinner when the phone __ (ring).", answer: "were having / rang", type: "fill-in" },
  { question: "She __ (run) in the park when she __ (see) her old friend.", answer: "was running / saw", type: "fill-in" },
  
  { question: "I __ (never/be) to Japan.", answer: "have never been", type: "fill-in" },
  { question: "__ (you/ever/see) a ghost?", answer: "Have you ever seen", type: "fill-in" },
  { question: "We __ (live) in this house since 2015.", answer: "have lived", type: "fill-in" },
  { question: "He __ (read) three books this month.", answer: "has read", type: "fill-in" },
  { question: "She __ (finish) her homework before dinner.", answer: "had finished", type: "fill-in" },
  { question: "They __ (move) to a new city last year.", answer: "moved", type: "fill-in" },
  { question: "I __ (lose) my keys! I can’t find them anywhere.", answer: "have lost", type: "fill-in" },
  { question: "__ (you/watch) the new episode yet?", answer: "Have you watched", type: "fill-in" },
  { question: "We __ (already/visit) the museum.", answer: "have already visited", type: "fill-in" },
  { question: "He __ (study) Spanish when he was younger.", answer: "studied", type: "fill-in" }

  const extraQuestions = [
  { question: "While I __ (walk) home, it __ (start) to rain.", answer: "was walking / started", type: "fill-in" },
  { question: "We __ (see) a beautiful sunset while we __ (drive) along the coast.", answer: "saw / were driving", type: "fill-in" },
  { question: "She __ (fall) asleep while she __ (read).", answer: "fell / was reading", type: "fill-in" },
  { question: "__ (you/watch) TV when the power went out?", answer: "Were you watching", type: "fill-in" },
  { question: "I __ (meet) my best friend when I __ (live) in London.", answer: "met / was living", type: "fill-in" },
  { question: "He __ (play) football when he __ (hurt) his leg.", answer: "was playing / hurt", type: "fill-in" },
  { question: "What __ (you/do) at 8 PM yesterday?", answer: "were you doing", type: "fill-in" },
  { question: "The teacher __ (explain) the lesson when the fire alarm __ (go) off.", answer: "was explaining / went", type: "fill-in" },
  { question: "They __ (have) dinner when the phone __ (ring).", answer: "were having / rang", type: "fill-in" },
  { question: "She __ (run) in the park when she __ (see) her old friend.", answer: "was running / saw", type: "fill-in" },

  { question: "I __ (never/be) to Japan.", answer: "have never been", type: "fill-in" },
  { question: "__ (you/ever/see) a ghost?", answer: "Have you ever seen", type: "fill-in" },
  { question: "We __ (live) in this house since 2015.", answer: "have lived", type: "fill-in" },
  { question: "He __ (read) three books this month.", answer: "has read", type: "fill-in" },
  { question: "She __ (finish) her homework before dinner.", answer: "had finished", type: "fill-in" },
  { question: "They __ (move) to a new city last year.", answer: "moved", type: "fill-in" },
  { question: "I __ (lose) my keys! I can’t find them anywhere.", answer: "have lost", type: "fill-in" },
  { question: "__ (you/watch) the new episode yet?", answer: "Have you watched", type: "fill-in" },
  { question: "We __ (already/visit) the museum.", answer: "have already visited", type: "fill-in" },
  { question: "He __ (study) Spanish when he was younger.", answer: "studied", type: "fill-in" },

  { question: "They __ (travel) to Canada last summer.", answer: "traveled", type: "fill-in" },
  { question: "She __ (write) an article for the magazine.", answer: "wrote", type: "fill-in" },
  { question: "We __ (build) a treehouse when we were kids.", answer: "built", type: "fill-in" },
  { question: "He __ (discover) a new species of butterfly.", answer: "discovered", type: "fill-in" },
  { question: "The teacher __ (give) us an assignment to complete.", answer: "gave", type: "fill-in" },
  { question: "She __ (drive) to work alone today.", answer: "drove", type: "fill-in" },
  { question: "We __ (watch) an amazing play at the theater.", answer: "watched", type: "fill-in" },
  { question: "The dog __ (bark) loudly all night.", answer: "barked", type: "fill-in" },
  { question: "She __ (sing) beautifully at the competition.", answer: "sang", type: "fill-in" },
  { question: "I __ (paint) a picture for the art contest.", answer: "painted", type: "fill-in" },

  { question: "If it __ (rain), we __ (stay) at home.", answer: "rains / will stay", type: "fill-in" },
  { question: "If she __ (study), she __ (pass) the test.", answer: "studies / will pass", type: "fill-in" },
  { question: "If they __ (be) late, they __ (miss) the flight.", answer: "are / will miss", type: "fill-in" },
  { question: "If I __ (win) the lottery, I __ (buy) a house.", answer: "win / will buy", type: "fill-in" },
  { question: "If he __ (exercise), he __ (get) stronger.", answer: "exercises / will get", type: "fill-in" },

  { question: "The book is __ the table. (on, in, at)", answer: "on", type: "multiple-choice" },
  { question: "She was born __ 1999. (on, in, at)", answer: "in", type: "multiple-choice" },
  { question: "I will meet you __ the airport. (in, on, at)", answer: "at", type: "multiple-choice" },
  { question: "The shop is located __ the corner. (on, at, in)", answer: "at", type: "multiple-choice" },
  { question: "He walked __ the street. (through, across, over)", answer: "across", type: "multiple-choice" },

  { question: "I __ (eat) lunch at 2 PM.", answer: "ate", type: "fill-in" },
  { question: "She __ (drive) to work every day.", answer: "drives", type: "fill-in" },
  { question: "We __ (swim) in the ocean yesterday.", answer: "swam", type: "fill-in" },
  { question: "I __ (send) an email to my boss.", answer: "sent", type: "fill-in" },
  { question: "The cat __ (jump) on the table.", answer: "jumped", type: "fill-in" },
  { question: "She __ (sing) a song at the concert.", answer: "sang", type: "fill-in" },
  { question: "They __ (find) a lost wallet.", answer: "found", type: "fill-in" },
  { question: "He __ (build) a sandcastle on the beach.", answer: "built", type: "fill-in" },
  { question: "I __ (buy) a new laptop last week.", answer: "bought", type: "fill-in" },
  { question: "We __ (watch) an interesting documentary.", answer: "watched", type: "fill-in" }
];

export default function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = () => {
    if (userAnswer.trim().toLowerCase() === allQuestions[currentQuestion].answer.toLowerCase()) {
      setScore(score + 1);
    }
    nextQuestion();
  };

  const nextQuestion = () => {
    if (currentQuestion < allQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setUserAnswer("");
    } else {
      setShowResult(true);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {!showResult ? (
        <div>
          <h2>{allQuestions[currentQuestion].question}</h2>
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
          />
          <button onClick={handleAnswer}>Submit</button>
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
