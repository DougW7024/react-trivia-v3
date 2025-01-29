export default function ScoreDisplay({ score, totalQuestions }) {
  return (
    <div className="text-center py-8">
      <div className="text-2xl font-semibold mb-4">
        You scored {score} correct answers out of {totalQuestions}
      </div>
    </div>
  );
}
