import { Fragment, useEffect, useState } from "react";

type SearchData = {
  title: string;
  tags: string[];
  description: string;
};

type SearchProps = {
  data: SearchData[];
};

const Search: React.FC<SearchProps> = ({ data }) => {
  const [items, setItems] = useState(data);
  const [text, setText] = useState("");

  useEffect(() => {
    const filteredData = data.filter((item) => {
      const lowercaseText = text.toLowerCase();
      return (
        item.title.toLowerCase().includes(lowercaseText) ||
        item.tags.some((tag) => tag.toLowerCase().includes(lowercaseText)) ||
        item.description.toLowerCase().includes(lowercaseText)
      );
    });

    return text ? setItems(filteredData) : setItems(data);
    // setItems(filteredData);
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
        {items.map((item, index) => (
          <Fragment key={index}>
            <li>{item.title}</li>
            <li>
              {item.tags.map((tag, index) => (
                <span key={index}>{tag}, </span>
              ))}
            </li>
            <li>{item.description}</li>
          </Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Search;
