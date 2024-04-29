import { useState } from "react";
import { FaAngleDoubleUp, FaAngleDoubleDown } from "react-icons/fa";

type NavigationProps = {
  data: string[];
};

const LocationSwap: React.FC<NavigationProps> = ({ data }) => {
  const [locations, setLocations] = useState(data);

  const handleMove = (index: number, direction: "up" | "down") => {
    if (
      (direction === "up" && index === 0) ||
      (direction === "down" && index === locations.length - 1)
    ) {
      return;
    }

    const newLocations = [...locations];
    const temp = newLocations[index];
    newLocations[index] = newLocations[index + (direction === "up" ? -1 : 1)];
    newLocations[index + (direction === "up" ? -1 : 1)] = temp;
    setLocations(newLocations);
  };

  return (
    <div className="w-[20rem] mx-auto border">
      {locations.map((location, index) => (
        <div key={index} className="flex items-center justify-between p-2">
          <p>{location}</p>
          <div className="flex items-center">
            {index !== locations.length - 1 && (
              <FaAngleDoubleDown
                className="w-10 h-10 cursor-pointer"
                onClick={() => handleMove(index, "down")}
              />
            )}
            {index !== 0 && (
              <FaAngleDoubleUp
                className="w-10 h-10 cursor-pointer"
                onClick={() => handleMove(index, "up")}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LocationSwap;
