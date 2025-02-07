import { useEffect, useState } from "react";
import shuffleArray from "../helpers/shuffleArray.js";
import "animate.css";

export default function AnswerOptions({
  options,
  setSelectedOption,
  correctAnswer,
}) {
  const [randomOptions, setRandomOptions] = useState([]);
  const [animatingOption, setAnimatingOption] = useState(null);

  const RESULT_STATES = {
    correct: {
      style: "bg-green-500/80 animate__animated animate__pulse",
      text: "CORRECT!",
    },
    incorrect: {
      style: "bg-red-500/80 animate__animated animate__shakeX",
      text: "Incorrect",
    },
  };

  useEffect(() => {
    setRandomOptions(shuffleArray(options));
  }, [options]);

  const handleOptionClick = async (option) => {
    if (animatingOption) return;
    setSelectedOption(option);

    const isCorrect = option === correctAnswer;
    setAnimatingOption(RESULT_STATES[isCorrect ? "correct" : "incorrect"].text);

    if (isCorrect) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setAnimatingOption(null);
    }
  };

  const getOptionClassName = (option) => {
    const baseClasses =
      "absolute w-full h-full backface-hidden flex items-center justify-center p-4 text-lg font-medium rounded-lg transition-colors";
    const isCorrectAnswer = option === correctAnswer;

    if (animatingOption === RESULT_STATES.correct.text && isCorrectAnswer) {
      return `${baseClasses} ${RESULT_STATES.correct.style}`;
    }

    return `${baseClasses} bg-gray-700/50 border border-gray-600 hover:bg-gray-600/50`;
  };

  return (
    <div className="grid grid-cols-1 gap-4 mb-8">
      {randomOptions?.map((option) => (
        <div
          key={option}
          className="relative h-16 cursor-pointer perspective-1000"
          onClick={() => handleOptionClick(option)}
        >
          <div className="w-full h-full transition-transform duration-500 transform-style-preserve-3d">
            <div className={getOptionClassName(option)}>{option}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
