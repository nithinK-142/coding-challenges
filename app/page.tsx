import Quiz from "./components/Quiz";
import { questions } from "./data/quiz"

export default function Home() {
  return (
    <main>
      <h1>Quiz App</h1>
      <Quiz questions={questions} />
    </main>
  )
}
