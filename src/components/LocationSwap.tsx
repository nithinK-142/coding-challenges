import { useState } from "react";
import { FaAngleDoubleUp, FaAngleDoubleDown } from "react-icons/fa";

type NavigationProps = {
  data: string[];
};

const LocationSwap: React.FC<NavigationProps> = ({ data }) => {
  const [locations, setLocations] = useState(data);

  const handleMoveUp = (index: number) => {
    if (index < 0) return;
    const newLocations = [...locations];
    const temp = newLocations[index];
    newLocations[index] = newLocations[index - 1];
    newLocations[index - 1] = temp;
    setLocations(newLocations);
  };
  const handleMoveDown = (index: number) => {
    if (index >= locations.length) return;
    const newLocations = [...locations];
    const temp = newLocations[index];
    newLocations[index] = newLocations[index + 1];
    newLocations[index + 1] = temp;
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
                onClick={() => handleMoveDown(index)}
              />
            )}
            {index !== 0 && (
              <FaAngleDoubleUp
                className="w-10 h-10 cursor-pointer"
                onClick={() => handleMoveUp(index)}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LocationSwap;
