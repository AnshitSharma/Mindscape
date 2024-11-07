import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import SurveyResults from "./SurveyResults";

interface Question {
  id: number;
  text: string;
  score: number;
}

const CustomerSurvey = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: 1,
      text: "Do you feel that you are punished without any crime?",
      score: 0,
    },
    {
      id: 2,
      text: "Do you lose the balance of your mind even under ordinary pressure of circumstances?",
      score: 0,
    },
    { id: 3, text: "Do you generally have unsteady mind?", score: 0 },
    {
      id: 4,
      text: "Do you generally stutter while taking to strangers?",
      score: 0,
    },
    {
      id: 5,
      text: "Do you sometimes feel that your life is useless?",
      score: 0,
    },
    { id: 6, text: "Do you weep very easily?", score: 0 },
    {
      id: 7,
      text: "Do you generally have the conflict of sin and righteousness in your mind?",
      score: 0,
    },
    {
      id: 8,
      text: "Do you get very much excited of the just rememberance of the bitter experiences of your life?",
      score: 0,
    },
    {
      id: 9,
      text: "Do you generally feel that you would lose your presence of mind?",
      score: 0,
    },
    {
      id: 10,
      text: "Do you feel so scared that your tongue gets dried up?",
      score: 0,
    },
    {
      id: 11,
      text: "Do you think yourself to be the sinner without any reason?",
      score: 0,
    },
    {
      id: 12,
      text: "Do you constantly have the strain in your nervous system?",
      score: 0,
    },
    {
      id: 13,
      text: "Do you occasionally have fear while going out that you may miss your train?",
      score: 0,
    },
    { id: 14, text: "Do you feel the lack of sleep?", score: 0 },
    {
      id: 15,
      text: "Do you always get yourself busy in some work or other just to forget your problems?",
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
        <h1 className="text-2xl font-bold">Stress Assessment </h1>
        <Button
          onClick={handleReturnHome}
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        >
          Return to Homepage
        </Button>
      </div>
      <p className="mb-6 font-semibold">
        Thank you for connecting with us! 
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
        <SurveyResults totalScore={totalScore} />
      )}
    
    </div>

  );
};

export default CustomerSurvey;