export default function QuestionDisplay({
  currentQuestionIndex,
  totalQuestions,
  question,
}) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <span className="text-lg font-medium">
          Question {currentQuestionIndex + 1}/{totalQuestions}
        </span>
      </div>
      <div className="min-h-20 max-h-20 text-xl font-medium mb-6">
        {question}
      </div>
    </div>
  );
}
