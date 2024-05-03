import { useEffect, useState } from "react";

type SearchProps = {
  data: string[];
};

const SearchFruits: React.FC<SearchProps> = ({ data }) => {
  const [text, setText] = useState("");
  const [fruits, SetFruits] = useState(data);

  useEffect(() => {
    const filteredFruits = data.filter((fruit) =>
      fruit.toLowerCase().includes(text.toLowerCase())
    );

    SetFruits(filteredFruits);
  }, [data, text]);
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
      <ul>
        {fruits.map((fruit) => (
          <li>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFruits;
