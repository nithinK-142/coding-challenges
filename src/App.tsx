import Quiz from "@/components/Quiz";
import { quizData } from "@/data/game-data";

function App() {
  return (
    <main>
      <h1>Quiz App</h1>
      <Quiz questions={quizData} />
    </main>
  );
}

export default App;
