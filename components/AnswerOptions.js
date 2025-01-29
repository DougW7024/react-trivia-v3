import { useEffect, useState } from "react";
import shuffleArray from "../helpers/shuffleArray.js";
import "animate.css";

export default function AnswerOptions({
  options,
  // selectedOption,
  setSelectedOption,
  correctAnswer,
}) {
  // console.log("selectedOption", selectedOption)
  // const [selectedOption, setSelectedOption] = useState("");
  const [randomOptions, setRandomOptions] = useState([]);
  // const [flippedState, setFlippedState] = useState("");
  const [animatingOption, setAnimatingOption] = useState(null);
  // const [resultState, setResultState] = useState({
  //   style: "",
  //   text: ""
  // });

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
    // setFlippedState("");
  }, [options]);

  const handleOptionClick = async (option) => {
    let resultStyle = "";
    let resultText = "";
    setSelectedOption(option);

    if (animatingOption) return; // Prevent clicking during animation
    // console.log("option", option)

    // setAnimatingOption(option);
    // setSelectedOption(option);

    if (option === correctAnswer) {
      resultStyle = RESULT_STATES.correct.style;
      resultText = RESULT_STATES.correct.text;
      setAnimatingOption(resultText);
      // setFlippedState(resultText);

      // Wait for 1 second then revert
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // setFlippedState((prev) => ({ ...prev, [option]: false }));
      // setFlippedState(null);
      setAnimatingOption(null);
      // setResultState(resultState.correct);
      // setSelectedOption(resultState.correct.text);

      console.log("resultText", resultText);
      console.log("resultStyle", resultStyle);
    } else {
      resultStyle = RESULT_STATES.incorrect.style;
      resultText = RESULT_STATES.incorrect.text;
      // setResultState(resultState.incorrect);
      // setSelectedOption(resultState.incorrect.text);

      console.log("resultText", resultText);
      console.log("resultStyle", resultStyle);
    }

    // console.log("selectedOption", selectedOption)

    // setAnimatingOption(null);
    // setFlippedState((prev) => ({ ...prev, [option]: true }));
    // setAnimatingOption(resultText);
    // setFlippedState(resultText);

    // // Wait for 1 second then revert
    // await new Promise((resolve) => setTimeout(resolve, 1000));

    // setFlippedState((prev) => ({ ...prev, [option]: false }));
    // setAnimatingOption(null);
    // setSelectedOption((prev) => prev === option ? null : prev);
    // console.log(option, correctAnswer, resultState);
  };

  return (
    <div className="grid grid-cols-1 gap-4 mb-8">
      {randomOptions?.map((option) => (
        <div
          key={option}
          className="relative h-16 cursor-pointer perspective-1000"
          onClick={() => handleOptionClick(option)}
        >
          <div
            className={`w-full h-full transition-transform duration-500 transform-style-preserve-3d`}
          >
            <div
              className={`absolute w-full h-full backface-hidden flex items-center justify-center p-4 text-lg font-medium rounded-lg ${
                animatingOption === RESULT_STATES.correct.text &&
                option === correctAnswer
                  ? RESULT_STATES.correct.style
                  : animatingOption === RESULT_STATES.incorrect.text &&
                    option === correctAnswer
                  ? "bg-gray-700/50"
                  : animatingOption && option === correctAnswer
                  ? "bg-green-500/80"
                  : "bg-gray-700/50 border border-gray-600 hover:bg-gray-600/50"
              } transition-colors`}
            >
              {option}
            </div>

            {/* TODO: Add result state */}
            {/* <div
              className={`absolute w-full h-full backface-hidden flex items-center justify-center p-4 text-lg font-medium rounded-lg`}
            >
              {setSelectedOption}
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
}
