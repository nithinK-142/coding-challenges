import { useState } from "react";

type ButtonState = "DEFAULT" | "SELECTED" | "WRONG";
type Option = {
  value: string;
  state: ButtonState;
};

function randomize() {
  return Math.random() - 0.6;
}

function getCountries(data: Record<string, string>) {
  return Object.keys(data);
}

function getCapitls(data: Record<string, string>) {
  return Object.values(data);
}

function getButtonClass(option: Option) {
  if (option.state === "SELECTED") return "bg-blue-500";
  else if (option.state === "WRONG") return "bg-red-500";
  else return "";
}

export default function CountryCapital({
  data,
}: {
  data: Record<string, string>;
}) {
  const [options, setOptions] = useState<Option[]>(
    [...getCountries(data), ...getCapitls(data)]
      .sort(randomize)
      .map((value) => ({
        value,
        state: "DEFAULT",
      }))
  );

  const [selected, setSelected] = useState<Option>();

  const isGameOver = options.length === 0;

  function handleButtonClick(option: Option) {
    if (!selected) {
      setSelected(option);
      setOptions(
        options.map((opt) => ({
          ...opt,
          state: opt === option ? "SELECTED" : "DEFAULT",
        }))
      );
    } else {
      if (
        selected.value === data[option.value] ||
        data[selected.value] == option.value
      ) {
        setOptions(
          options.filter((opt) => !isPartofPair(opt, selected, option))
        );
      } else {
        setOptions(
          options.map((opt) => ({
            ...opt,
            state: isPartofPair(opt, selected, option) ? "WRONG" : opt.state,
          }))
        );
      }
      setSelected(undefined);
    }
  }

  function isPartofPair(opt: Option, selected: Option, option: Option) {
    return opt.value === selected.value || opt.value === option.value;
  }

  return (
    <div className="quiz flex-center">
      {options.map((option) => (
        <button
          key={option.value}
          className={getButtonClass(option)}
          onClick={() => handleButtonClick(option)}
        >
          {option.value}
        </button>
      ))}
      {isGameOver && <h2>Congratulations</h2>}
    </div>
  );
}
