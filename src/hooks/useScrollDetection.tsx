import { useEffect, useRef, useState } from "react";

const useScrollDetection = () => {
  const [scrollDirection, setScrollDirection] = useState("START");
  const scrollY = useRef(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    window.scrollY === 0
      ? setScrollDirection("START")
      : scrollY.current > window.scrollY
      ? setScrollDirection("UP 👆")
      : setScrollDirection("DOWN 👇");

    scrollY.current = window.scrollY;
  };

  return scrollDirection;
};

export default useScrollDetection;
