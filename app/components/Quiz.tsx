"use client";
import { useState } from "react";
import { QuizProps } from "../data/quiz";

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];
  return (
    <div className="quiz">
      <form onSubmit={(e) => e.preventDefault()}>
        <p>{currentQuestion.question}</p>
        <div className="answers">
          {currentQuestion.answers.map((answer) => {
            return (
              <label key={answer}>
                <input type="radio" name="answer"></input>
                {answer}
              </label>
            );
          })}
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Quiz;
