import React, { useState, useMemo } from "react";

interface Data {
  cities: Record<string, { state: string; country: string }>;
  states: Record<string, { country: string }>;
  countries: Record<string, unknown>;
}

type DropdownProps = {
  data: Data;
};

const Dropdown: React.FC<DropdownProps> = ({ data }) => {
  const { cities, states, countries } = data;
  const [countryState, setCountryState] = useState("");
  const [stateState, setStateState] = useState("");
  const [, setCityState] = useState("");

  const stateArray = useMemo(
    () =>
      countryState
        ? Object.keys(states).filter(
            (state) => states[state].country === countryState
          )
        : [],
    [countryState, states]
  );

  const cityArray = useMemo(
    () =>
      countryState && stateState
        ? Object.keys(cities).filter(
            (city) =>
              cities[city].country === countryState &&
              cities[city].state === stateState
          )
        : [],
    [countryState, stateState, cities]
  );

  return (
    <div className="flex flex-col items-center justify-center text-black">
      <select
        className="p-2 mb-4 rounded-md"
        onChange={(e) => setCountryState(e.target.value)}
      >
        <option value="" hidden>
          select country
        </option>
        {Object.keys(countries).map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
      <select
        className="p-2 mb-4 rounded-md"
        onChange={(e) => setStateState(e.target.value)}
      >
        <option value="" hidden>
          select state
        </option>
        {stateArray.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
      <select
        className="p-2 mb-4 rounded-md"
        onChange={(e) => setCityState(e.target.value)}
      >
        <option value="" hidden>
          select city
        </option>
        {cityArray.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
