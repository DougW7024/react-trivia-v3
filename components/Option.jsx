import { useState } from "react";

const Option = ({ option, correctAnswer, onSelect, isDisabled }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const isCorrect = option === correctAnswer;
  const correctSound = new Audio("/correct.mp3");
  const incorrectSound = new Audio("/incorrect.mp3");

  const handleClick = () => {
    if (isDisabled) return;
    setIsFlipped(true);
    if (option === correctAnswer) {
      correctSound.play();
    } else {
      incorrectSound.play();
    }
    onSelect(option);
  };

  const variants = {
    correct: {
      background: "bg-gradient-to-r from-green-400 to-green-600",
      text: "Excellent! 🎉",
    },
    incorrect: {
      background: "bg-gradient-to-r from-red-400 to-red-600",
      text: "Try Again! 💪",
    },
  };

  return (
    <div
      className={`relative h-24 w-full perspective-1000 ${
        isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
      onClick={handleClick}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? "rotate-x-180" : ""
        }`}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden bg-white rounded-lg shadow-md p-4 flex items-center justify-center cursor-pointer hover:bg-gray-50">
          <span className="text-lg">{option}</span>
        </div>

        {/* Back of card */}
        <div
          className={`absolute w-full h-full backface-hidden rotate-x-180 rounded-lg shadow-md p-4 flex items-center justify-center ${
            isCorrect
              ? variants.correct.background
              : variants.incorrect.background
          }`}
        >
          <span className="text-white text-lg">
            {isCorrect ? variants.correct.text : variants.incorrect.text}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Option;
