"use client";
import { useState } from "react";
import { QuizProps } from "../data/quiz";

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  console.log(selectedAnswer);

  const currentQuestion = questions[currentQuestionIndex];
  const isGameOver = currentQuestionIndex >= questions.length;
  const wrongAnswers = questions.length - score;

  const handleRetry = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
  };

  return (
    <div className="quiz">
      {isGameOver ? (
        <>
          <div className="game-over flex">
            <h2>Game Over</h2>
            <h3>
              Your Score is <span>{score}</span> and wrong answers{" "}
              <span>{wrongAnswers}</span>.
            </h3>
            <button className="retry" onClick={handleRetry}>
              Retry
            </button>
          </div>
        </>
      ) : (
        <form
          className="flex"
          onSubmit={(e) => {
            e.preventDefault();
            if (selectedAnswer === currentQuestion.correctAnswer)
              setScore(score + 1);
            setCurrentQuestionIndex(currentQuestionIndex + 1);
          }}
        >
          <p>{currentQuestion.question}</p>
          <div className="answers">
            {currentQuestion.answers.map((answer) => {
              return (
                <label key={answer}>
                  <input
                    onChange={() => setSelectedAnswer(answer)}
                    type="radio"
                    name="answer"
                  ></input>
                  {answer}
                </label>
              );
            })}
          </div>
          <button>Submit</button>
        </form>
      )}
    </div>
  );
};

export default Quiz;
