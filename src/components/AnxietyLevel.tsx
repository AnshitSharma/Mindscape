import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import SurveyResults from "./SurveyResults";
import AnxietyResults from "./AnxietyResults";

interface Question {
  id: number;
  text: string;
  score: number;
}


const AnxietyLevel = () => {
  const navigate = useNavigate();
  
 
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: 1,
      text: "Do you want to run away to some distant place having got tired of your problems?",
      score: 0,
    },
    {
      id: 2,
      text: "Do you generally commit such errors which are difficult to correct?",
      score: 0,
    },
    {
      id: 3,
      text: "Do you think that you have committed certain error because of which you are very restless?",
      score: 0,
    },
    {
      id: 4,
      text: "Are you afraid of going to high places?",
      score: 0,
    },
    {
      id: 5,
      text: "Do you generally feel physical weakness?",
      score: 0,
    },
    {
      id: 6,
      text: "Do you generally think that life will remain sad?",
      score: 0,
    },
    {
      id: 7,
      text: "Do you shed tears at the time of your troubles by the little sympathy of others?",
      score: 0,
    },
    {
      id: 8,
      text: "Do you generally feel that you are helpless?",
      score: 0,
    },
    {
      id: 9,
      text: "Do you generally get lost in yourself?",
      score: 0,
    },
    {
      id: 10,
      text: "Do you generally work under the condition of strain?",
      score: 0,
    },
    {
      id: 11,
      text: "Do you generally remain in anxiety?",
      score: 0,
    },
    {
      id: 12,
      text: "Do you generally have mental tensions?",
      score: 0,
    },
    {
      id: 13,
      text: "Do you generally feel suffocation because of fear?",
      score: 0,
    },
    {
      id: 14,
      text: "Do you become very sad by the contradiction of your own statement?",
      score: 0,
    },
    {
      id: 15,
      text: "Do you feel that your life is in dark?",
      score: 0,
    },
  ]);

  const [totalScore, setTotalScore] = useState<number | null>(null);

  const handleScoreChange = (id: number, score: number) => {
    setQuestions(questions.map((q) => (q.id === id ? { ...q, score } : q)));
  };

  const handleSubmit = () => {
    const score = questions.reduce((sum, q) => sum + q.score, 0);
    setTotalScore(score);
  };

  const handleReturnHome = () => {
    navigate('/');
  };

  const isAllQuestionsAnswered = questions.every((q) => q.score !== 0);

  return (
    <div className="max-w-4xl mx-auto p-10 bg-white rounded-lg shadow-md mt-32 dark:bg-gray-900">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold">CUSTOMER SURVEY</h1>
        <Button
          onClick={handleReturnHome}
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        >
          Return to Homepage
        </Button>
      </div>
      <p className="mb-6 font-semibold">
        Thank you for connecting with us! Please take a few minutes to rate us
        so we can serve you better.
      </p>

      {questions.map((question) => (
        <div key={question.id} className="mb-4">
          <p className="mb-2">{question.text}</p>
          <div className="flex justify-between">
            {["Very Bad", "Bad", "Neutral", "Good", "Excellent"].map(
              (label, index) => (
                <label key={label} className="flex flex-col items-center">
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={index + 1}
                    checked={question.score === index + 1}
                    onChange={() => handleScoreChange(question.id, index + 1)}
                    className="mb-1"
                  />
                  <span className="text-sm">{label}</span>
                </label>
              )
            )}
          </div>
        </div>
      ))}

      <Button
        onClick={handleSubmit}
        disabled={!isAllQuestionsAnswered}
        className={`mt-6 ${isAllQuestionsAnswered
            ? "bg-blue-500 hover:bg-blue-600"
            : "bg-gray-300"
          } text-white font-bold py-2 px-4 rounded`}
      >
        Submit
      </Button>

      {totalScore !== null && (
        <AnxietyResults totalScore={totalScore} />
      )}
    </div>
  );
};

export default AnxietyLevel;