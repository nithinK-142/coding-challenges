import { useEffect, useState } from "react";

type TrafficLight = "stop" | "slow" | "go";
type Props = {
  STOP_DELAY?: number;
  SLOW_DELAY?: number;
  GO_DELAY?: number;
  initial_state?: TrafficLight;
};
const TrafficLight: React.FC<Props> = (props) => {
  const {
    STOP_DELAY = 3000,
    SLOW_DELAY = 2000,
    GO_DELAY = 4000,
    initial_state = "stop",
  } = props;
  const [state, setState] = useState(initial_state);

  useEffect(() => {
    if (state === "stop") {
      setTimeout(() => setState("go"), STOP_DELAY);
    } else if (state === "go") {
      setTimeout(() => setState("slow"), GO_DELAY);
    } else {
      setTimeout(() => setState("stop"), SLOW_DELAY);
    }
  }, [GO_DELAY, SLOW_DELAY, STOP_DELAY, state]);

  const getLightClass = (light: TrafficLight) => {
    return state === light ? "opacity-100" : "opacity-40";
  };
  return (
    <div className="flex flex-col p-3 space-y-2 border rounded-lg">
      <div
        className={`${getLightClass(
          "stop"
        )} w-32 h-32 rounded-full bg-red-500 `}
      ></div>

      <div
        className={`${getLightClass(
          "slow"
        )} w-32 h-32 rounded-full bg-yellow-500`}
      ></div>

      <div
        className={`${getLightClass("go")} w-32 h-32 rounded-full bg-green-500`}
      ></div>
    </div>
  );
};

const TrafficLights = () => {
  return (
    <div className="flex justify-center space-x-4">
      <TrafficLight />
      <TrafficLight
        STOP_DELAY={3500}
        SLOW_DELAY={2500}
        GO_DELAY={4500}
        initial_state="slow"
      />
      <TrafficLight
        STOP_DELAY={2000}
        SLOW_DELAY={1000}
        GO_DELAY={3000}
        initial_state="go"
      />
      <TrafficLight />
    </div>
  );
};

export default TrafficLights;
