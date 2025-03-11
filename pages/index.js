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

  { question: "They __ (travel) to Australia last year.", answer: "traveled", type: "fill-in" },
  { question: "She __ (win) a gold medal in the competition.", answer: "won", type: "fill-in" },
  { question: "He __ (bring) his friend to the party.", answer: "brought", type: "fill-in" },
  { question: "We __ (see) dolphins while we __ (sail).", answer: "saw / were sailing", type: "fill-in" },
  { question: "I __ (write) my thesis when my laptop __ (crash).", answer: "was writing / crashed", type: "fill-in" },
  { question: "They __ (leave) before I __ (arrive).", answer: "had left / arrived", type: "fill-in" },
  { question: "She __ (forget) her keys at home.", answer: "forgot", type: "fill-in" },
  { question: "He __ (lend) me his book yesterday.", answer: "lent", type: "fill-in" },
  { question: "We __ (plan) a trip before the lockdown __ (start).", answer: "had planned / started", type: "fill-in" },
  { question: "They __ (run) a marathon last weekend.", answer: "ran", type: "fill-in" },

  { question: "The cake __ (bake) for 30 minutes before I took it out.", answer: "had baked", type: "fill-in" },
  { question: "She __ (fly) to New York three times this year.", answer: "has flown", type: "fill-in" },
  { question: "I __ (not/see) this movie yet.", answer: "have not seen", type: "fill-in" },
  { question: "He __ (send) me a postcard from Italy.", answer: "sent", type: "fill-in" },
  { question: "We __ (decorate) the house for the party.", answer: "decorated", type: "fill-in" },
  { question: "They __ (study) for their exams all night.", answer: "studied", type: "fill-in" },
  { question: "She __ (buy) a new car last month.", answer: "bought", type: "fill-in" },
  { question: "He __ (not/speak) to me since last week.", answer: "has not spoken", type: "fill-in" },
  { question: "I __ (eat) sushi for the first time last night.", answer: "ate", type: "fill-in" },
  { question: "We __ (walk) 10 kilometers before we __ (take) a break.", answer: "had walked / took", type: "fill-in" },

  { question: "They __ (discuss) the project before they __ (agree) on a plan.", answer: "had discussed / agreed", type: "fill-in" },
  { question: "She __ (finish) her assignment before the deadline.", answer: "had finished", type: "fill-in" },
  { question: "We __ (never/visit) Greece before our last trip.", answer: "had never visited", type: "fill-in" },
  { question: "He __ (not/play) football for two years.", answer: "has not played", type: "fill-in" },
  { question: "I __ (lose) my phone at the concert.", answer: "lost", type: "fill-in" },
  { question: "They __ (travel) across Europe last summer.", answer: "traveled", type: "fill-in" },
  { question: "She __ (read) three books last month.", answer: "read", type: "fill-in" },
  { question: "He __ (drive) all night to reach the destination.", answer: "drove", type: "fill-in" },
  { question: "We __ (spend) our holiday in Spain.", answer: "spent", type: "fill-in" },
  { question: "I __ (wake) up early to catch my flight.", answer: "woke", type: "fill-in" },

  { question: "The sun __ (shine) brightly when we arrived.", answer: "was shining", type: "fill-in" },
  { question: "She __ (study) English for three years.", answer: "has studied", type: "fill-in" },
  { question: "They __ (move) to a new apartment recently.", answer: "have moved", type: "fill-in" },
  { question: "I __ (visit) my grandparents last weekend.", answer: "visited", type: "fill-in" },
  { question: "We __ (paint) the house last summer.", answer: "painted", type: "fill-in" },
  { question: "He __ (break) his phone screen yesterday.", answer: "broke", type: "fill-in" },
  { question: "She __ (watch) a documentary last night.", answer: "watched", type: "fill-in" },
  { question: "They __ (learn) a new language.", answer: "are learning", type: "fill-in" },
  { question: "I __ (listen) to music while studying.", answer: "was listening", type: "fill-in" },
  { question: "We __ (celebrate) my birthday last week.", answer: "celebrated", type: "fill-in" }

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
