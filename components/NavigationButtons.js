import { FaArrowRotateLeft } from "react-icons/fa6";
import { TbArrowBigRightLineFilled } from "react-icons/tb";

export default function NavigationButtons({
  currentQuestionIndex,
  selectedOption,
  handlePrevQuestion,
  handleNextQuestion,
  score,
}) {

  return (
    <div className="flex justify-around items-center gap-4">
      <button
        onClick={handlePrevQuestion}
        disabled={currentQuestionIndex === 0}
        className="flex items-center gap-2 px-6 py-3 text-gray-300 bg-gray-700/50 rounded-lg font-medium hover:bg-gray-600/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors border border-gray-600"
      >
        <FaArrowRotateLeft className="h-8 w-6" />
        {/* Previous */}
      </button>
      <div className="px-4 py-2 bg-gray-700/30 rounded-lg border border-gray-600">
        Score: {score}
      </div>
      <button
        onClick={handleNextQuestion}
        disabled={!selectedOption}
        className="flex items-center gap-2 px-6 py-3 text-white bg-blue-600/80 rounded-lg font-medium hover:bg-blue-500/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {/* Next */}
        <TbArrowBigRightLineFilled className="h-8 w-6" />
      </button>
    </div>
  );
}
