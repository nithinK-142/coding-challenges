import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

type Props = {
  question: string;
  answer: string;
};
const AccordionComponent: React.FC<Props> = ({ question, answer }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="border rounded-md w-[500px] p-4">
      <div>
        <div
          onClick={() => setCollapsed((prev) => !prev)}
          className="flex justify-between cursor-pointer"
        >
          <h2>{question}</h2>
          {collapsed ? <FaAngleDown /> : <FaAngleUp />}
        </div>
        <div
          className={`overflow-hidden transition-all duration-[0.3s] ease-[ease-in-out] box-border ${
            collapsed ? "max-h-[150px] text-[18pt]" : "max-h-0 text-[0pt]"
          }`}
        >
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

const Accordion = () => {
  const data = [
    {
      question: "Question number one",
      answer: "answer for one",
    },
    {
      question: "Question number two",
      answer: "answer for three",
    },
    {
      question: "Question number three",
      answer: "answer for three",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center space-y-10">
      {data.map(({ question, answer }, index) => (
        <AccordionComponent key={index} question={question} answer={answer} />
      ))}
    </div>
  );
};
export default Accordion;
