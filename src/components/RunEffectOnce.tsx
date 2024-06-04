import { useState, useEffect, useRef } from "react";

const RunOnce = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(true);

  useEffect(() => {
    if (countRef.current) {
      countRef.current = false;
      setCount((prev) => prev + 1);
    }
  });

  return <div>{count}</div>;
};

export default RunOnce;
