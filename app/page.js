"use client";

import { useState } from "react";
import { categoryList } from "../helpers/categoryList.js";
import shuffleArray from "../helpers/shuffleArray.js";
import LoadingScreen from "../components/LoadingScreen";
import GameContainer from "../components/GameContainer";
import Image from "next/image";

export default function TriviaGame() {
  const [isLoading, setIsLoading] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [categoryImage, setCategoryImage] = useState("");
  const [questions, setQuestions] = useState([]);

  const startGame = async (category) => {
    setIsLoading(true);
    try {
      const fileContent = await import(`../${category.file}.js`);
      const dataFile = fileContent.default;
      const shuffledQuestions = shuffleArray(dataFile).slice(0, 15);
      setCategoryName(category.name);
      setCategoryImage(category.image);
      setQuestions(shuffledQuestions);
      setGameStarted(true);
    } catch (error) {
      console.error("Error loading questions:", error);
    }
    setIsLoading(false);
  };

  if (isLoading) return <LoadingScreen />;
  if (gameStarted) {
    return (
      <GameContainer
        categoryName={categoryName}
        categoryImage={categoryImage}
        questions={questions}
      />
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Choose Your Trivia Category
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categoryList.map((category) => (
            <button
              key={category.name}
              onClick={() => startGame(category)}
              className="group relative overflow-hidden rounded-xl bg-gray-800/50 hover:bg-gray-700/50 p-4 transition-all duration-300 hover:scale-105 border border-gray-700 hover:border-gray-600 backdrop-blur-sm"
            >
              <div className="relative h-40 w-full mb-3">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover rounded-lg group-hover:opacity-90 transition-opacity"
                />
              </div>
              <h2 className="text-lg font-medium text-gray-100 text-center">
                {category.name}
              </h2>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
