import { useState } from "react";

type BlockUpdate = {
  top: { y: number };
  right: { x: number };
  bottom: { y: number };
  left: { x: number };
};

const MovingBlock = () => {
  const [block, setBlock] = useState({ x: 0, y: 0 });

  const updateBlock = (direction: keyof BlockUpdate) => {
    // const containerWidth = 480; // Assuming container width of 480px (30rem)
    // const containerHeight = 480; // Assuming container height of 480px (30rem)
    // const blockSize = 20; // Assuming block size of 20px

    // const blockUpdates = {
    //   top: { y: Math.max(block.y - 20, 0) },
    //   right: { x: Math.min(block.x + 20, containerWidth - blockSize) },
    //   bottom: { y: Math.min(block.y + 20, containerHeight - blockSize) },
    //   left: { x: Math.max(block.x - 20, 0) },
    // };

    const blockUpdates = {
      top: { y: block.y - 20 },
      right: { x: block.x + 20 },
      bottom: { y: block.y + 20 },
      left: { x: block.x - 20 },
    };

    setBlock((prevBlock) => ({
      ...prevBlock,
      ...blockUpdates[direction],
    }));
  };

  return (
    <div className="mx-auto w-[60rem]">
      <div className="flex flex-col justify-between">
        <div
          className="flex justify-center w-full bg-red-500 border"
          onClick={() => updateBlock("top")}
        >
          <button className="px-4 py-2 font-semibold rounded-md">TOP</button>
        </div>
        <div className="flex justify-between h-full">
          <div
            className="flex items-center w-auto bg-red-500 border"
            onClick={() => updateBlock("left")}
          >
            <button className="px-4 py-2 font-semibold rounded-md">LEFT</button>
          </div>
          <div className="w-[30rem] h-[30rem] relative">
            <div
              className="absolute w-20 h-20 bg-yellow-400"
              style={{ left: block.x, top: block.y }}
            >
              block
            </div>
          </div>
          <div
            className="flex items-center w-auto bg-red-500 border"
            onClick={() => updateBlock("right")}
          >
            <button className="px-4 py-2 font-semibold rounded-md">
              RIGHT
            </button>
          </div>
        </div>
        <div
          className="flex justify-center w-full bg-red-500 border"
          onClick={() => updateBlock("bottom")}
        >
          <button className="px-4 py-2 font-semibold rounded-md">BOTTOM</button>
        </div>
      </div>
    </div>
  );
};

export default MovingBlock;
