import { useEffect, useState } from "react";

const useDebounce = (text: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(text), delay);

    return () => clearInterval(timer);
  }, [delay, text]);
  return debouncedValue;
};

const Debouncing = () => {
  const [text, setText] = useState("");
  const debouncedText = useDebounce(text, 2000);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="">
        <input
          type="text"
          className="w-[20rem] px-2 text-xl font-medium outline-gray-50 h-10 text-black rounded-md"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <p>
        <span className="text-xl">Debounced value : </span>
        {debouncedText}
      </p>
    </div>
  );
};

export default Debouncing;
