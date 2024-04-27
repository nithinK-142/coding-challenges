import { useState, useRef, useEffect } from "react";

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

const DetectScrollComponent = () => {
  const scrollDirection = useScrollDetection();
  return (
    <div className="flex flex-col items-center my-10 space-y-2">
      <h1>DetectScroll</h1>
      {scrollDirection}
    </div>
  );
};

const DetectScroll = () => {
  return (
    <>
      <DetectScrollComponent />
      <DetectScrollComponent />
      <DetectScrollComponent />
      <DetectScrollComponent />
      <DetectScrollComponent />
      <DetectScrollComponent />
      <DetectScrollComponent />
      <DetectScrollComponent />
      <DetectScrollComponent />
      <DetectScrollComponent />
    </>
  );
};

export default DetectScroll;
