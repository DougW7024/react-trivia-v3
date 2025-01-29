import { RotateCcw } from "lucide-react";
// import { useState } from "react";

export default function ResetButton() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [gameStarted, setGameStarted] = useState(false);
  // const [categoryName, setCategoryName] = useState("");
  // const [categoryImage, setCategoryImage] = useState("");
  // const [questions, setQuestions] = useState([]);

  const handleReset = () => {
    setIsLoading(false);
    setGameStarted(false);
    setCategoryName("");
    setCategoryImage("");
    setQuestions([]);
  };

  return (
    <button
      onClick={handleReset}
      className="fixed top-4 right-4 inline-flex items-center gap-2 px-4 py-2 
        bg-red-500/80 hover:bg-red-600/80 text-white rounded-lg 
        font-medium shadow-lg transition-all duration-200 
        hover:scale-105 active:scale-95"
    >
      <RotateCcw className="h-4 w-4" />
      Reset Game
    </button>
  );
}
