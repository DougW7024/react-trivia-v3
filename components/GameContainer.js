import { useState } from "react";
import QuestionDisplay from "@/components/QuestionDisplay";
import AnswerOptions from "@/components/AnswerOptions";
import NavigationButtons from "@/components/NavigationButtons";
import ScoreDisplay from "@/components/ScoreDisplay";
import ResetButton from "@/components/ResetButton";
import Image from "next/image";

export default function GameContainer({
  categoryName,
  categoryImage,
  questions,
}) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      setScore((prevScore) => prevScore + 1);

      // Add green background for correct answer
      document.body.style.backgroundColor = "#90EE90";
    } else {
      // Add red background for incorrect answer
      document.body.style.backgroundColor = "#FFB6C1";
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowScore(true);
    }
  };

  const handlePrevQuestion = () => {
    const prevQuestionIndex = currentQuestionIndex - 1;
    if (prevQuestionIndex >= 0) {
      setCurrentQuestionIndex(prevQuestionIndex);
      setScore((prevScore) => prevScore - 1);
    }
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption("");
    setShowScore(false);
    setResultState({
      style: "",
      text: "",
    });
  };

  return (
    <div className="text-gray-100 w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="w-full max-w-4xl mx-auto p-6">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700 p-8">
          <h1 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Trivia Challenge
          </h1>
          <div>
            <ResetButton onReset={handleReset} />
          </div>
          <div className="flex items-center justify-center gap-4 mb-8">
            <h2 className="text-xl text-gray-300">{categoryName}</h2>
            <div className="relative w-16 h-16">
              <Image
                src={categoryImage}
                alt={categoryName}
                fill
                sizes="64px"
                className="rounded-full object-cover border-2 border-gray-600"
                quality={100}
              />
            </div>
          </div>

          {showScore ? (
            <ScoreDisplay score={score} totalQuestions={questions.length} />
          ) : (
            <>
              <QuestionDisplay
                currentQuestionIndex={currentQuestionIndex}
                totalQuestions={questions.length}
                question={questions[currentQuestionIndex]?.question}
              />
              <AnswerOptions
                options={questions[currentQuestionIndex]?.options}
                // selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                correctAnswer={questions[currentQuestionIndex]?.correctAnswer}
              />
              <NavigationButtons
                currentQuestionIndex={currentQuestionIndex}
                selectedOption={selectedOption}
                handlePrevQuestion={handlePrevQuestion}
                handleNextQuestion={handleNextQuestion}
                score={score}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
