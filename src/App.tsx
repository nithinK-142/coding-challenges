// import Quiz from "@/components/Quiz";
// import { quizData } from "@/data/game-data";
import CountryCapitalGame from "@/components/CountryCapital";
import { countryCapitalData } from "@/data/game-data";

function App() {
  return (
    <main>
      {/* <h1 className="text-center">Quiz App</h1>
      <Quiz questions={quizData} /> */}

      <h1 className="text-center">Country Capital Matching Game</h1>
      <CountryCapitalGame data={countryCapitalData} />
    </main>
  );
}

export default App;
