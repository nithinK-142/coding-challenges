import { useEffect, useRef, useState } from "react";

type Counting = "START" | "STOP" | "RESET";
const Timer = () => {
  const [counter1, setCounter1] = useState<number>(0);
  const [counter2, setCounter2] = useState<number>(0);
  const [isCounting, setIsCounting] = useState<Counting>("STOP");

  const intervalRef = useRef<NodeJS.Timeout>();

  // using effect
  useEffect(() => {
    if (isCounting === "START") {
      intervalRef.current = setInterval(
        () => setCounter1((prev) => prev + 1),
        1000
      );
    } else if (isCounting === "STOP") {
      clearInterval(intervalRef.current);
    } else {
      setCounter1(0);
      clearInterval(intervalRef.current);
    }
  }, [isCounting]);

  // using functions
  const handleStart = () => {
    intervalRef.current = setInterval(
      () => setCounter2((prev) => prev + 1),
      1000
    );
  };
  const handleStop = () => {
    clearInterval(intervalRef.current);
  };

  const handleReset = () => {
    setCounter2(0);
    clearInterval(intervalRef.current);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-6xl font-bold">{counter1}</h2>
      <div className="flex space-x-4">
        <button onClick={() => setIsCounting("START")}>start</button>
        <button onClick={() => setIsCounting("STOP")}>stop</button>
        <button onClick={() => setIsCounting("RESET")}>reset</button>
      </div>

      <h2 className="mt-10 text-6xl font-bold">{counter2}</h2>
      <div className="flex space-x-4">
        <button onClick={handleStart}>start</button>
        <button onClick={handleStop}>stop</button>
        <button onClick={handleReset}>reset</button>
      </div>
    </div>
  );
};

export default Timer;
