import { useEffect, useState } from "react";

type Match = {
  name: string;
  country: string;
  year: number;
  winner: string;
  runnerup: string;
};

const Football = () => {
  const [selectedYear, setselectedYear] = useState(2017);
  const [matches, setMatches] = useState<Match[]>([]);

  const years = [2012, 2013, 2014, 2015, 2016, 2017];

  const fetchMatches = async () => {
    const response = await fetch(
      `https://jsonmock.hackerrank.com/api/football_competitions?year=${selectedYear}`
    );
    const result = await response.json();
    setMatches(result.data);
  };

  useEffect(() => {
    fetchMatches();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedYear]);

  return (
    <div className="flex justify-center space-x-10">
      <ul className="flex flex-col space-y-2">
        {years.map((year) => (
          <li
            key={year}
            className="px-4 py-2 text-xl font-medium bg-gray-600 rounded-md cursor-pointer"
            onClick={() => setselectedYear(year)}
          >
            {year}
          </li>
        ))}
      </ul>
      <div>
        {matches.length > 0 ? (
          <>
            <h2 className="mb-1 text-2xl">Total Matches {matches.length}</h2>
            {matches.map(({ name, country, runnerup, year, winner }) => (
              <div key={name} className="p-2 mb-2 bg-gray-600 rounded-md">
                <p>
                  {name} {year}
                </p>
                {country && <p>country : {country}</p>}
                <p>winner : {winner}</p>
                <p>runnerup : {runnerup}</p>
              </div>
            ))}
          </>
        ) : (
          <p>No matches found</p>
        )}
      </div>
    </div>
  );
};

export default Football;
