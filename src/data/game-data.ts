type QuestionType = {
  question: string;
  correctAnswer: string;
  answers: string[];
};

export type QuizProps = {
  questions: QuestionType[];
};

export const quizData = [
  {
    question: "What color is the sky?",
    correctAnswer: "Blue",
    answers: ["Red", "Green", "Pink", "Blue"],
  },
  {
    question: "What is the capital of France?",
    correctAnswer: "Paris",
    answers: ["London", "Berlin", "Madrid", "Paris"],
  },
  {
    question: "What is 2 + 2?",
    correctAnswer: "4",
    answers: ["3", "4", "5", "6"],
  },
  {
    question: "Which planet is known as the Red Planet?",
    correctAnswer: "Mars",
    answers: ["Venus", "Mars", "Jupiter", "Saturn"],
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    correctAnswer: "William Shakespeare",
    answers: [
      "Charles Dickens",
      "Jane Austen",
      "William Shakespeare",
      "Mark Twain",
    ],
  },
];
