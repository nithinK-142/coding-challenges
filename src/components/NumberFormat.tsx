import { ChangeEvent, useState } from "react";

const NumberFormat = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const MAX_LENGTH = 8;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const numericValue = value.replace(/\D/g, "");

    if (numericValue.length <= MAX_LENGTH) {
      let formattedValue = numericValue;

      if (numericValue.length >= 4) {
        formattedValue = `(${numericValue.slice(0, 3)})${numericValue.slice(
          3
        )}`;
      }

      if (numericValue.length >= 7) {
        formattedValue = `(${formattedValue.slice(1, 4)}${formattedValue.slice(
          4,
          8
        )}-${formattedValue.slice(8)}`;
      }

      setPhoneNumber(formattedValue);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <input
        type="text"
        className="w-[20rem] px-2 text-xl font-medium outline-gray-50 h-10 text-black rounded-md"
        value={phoneNumber}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default NumberFormat;
