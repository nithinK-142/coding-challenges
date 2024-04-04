import { useState } from "react";
import Quiz from "@/components/Quiz";
import { quizData } from "@/data/game-data";
import CountryCapitalGame from "@/components/CountryCapital";
import { countryCapitalData } from "@/data/game-data";
import DetectScroll from "./components/DetectScroll";

type GameType = "quiz" | "countryCapital";

function App() {
  const [selectedGame, setSelectedGame] = useState<GameType | "">("");

  const handleGameChange = (gameType: GameType) => {
    setSelectedGame(gameType);
  };

  return (
    <main>
      {/* <h1 className="text-center">Game Selector</h1> */}
      <DetectScroll />
      <DetectScroll />
      <DetectScroll />
      <DetectScroll />
      <DetectScroll />
      <DetectScroll />
      <DetectScroll />
      <DetectScroll />
      <DetectScroll />
      <DetectScroll />
      <DetectScroll />
      {/* <div className="mb-4 space-x-2 text-center">
        <button onClick={() => handleGameChange("quiz")}>Quiz</button>
        <button onClick={() => handleGameChange("countryCapital")}>
          Country Capital
        </button>
      </div>

      {selectedGame === "quiz" && (
        <>
          <h1 className="text-center">Quiz App</h1>
          <Quiz questions={quizData} />
        </>
      )}

      {selectedGame === "countryCapital" && (
        <>
          <h1 className="text-center">Country Capital Matching Game</h1>
          <CountryCapitalGame data={countryCapitalData} />
        </>
      )} */}
    </main>
  );
}

export default App;
