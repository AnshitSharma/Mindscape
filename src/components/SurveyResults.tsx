// In the SurveyResults component
import React from "react";


interface SurveyResultsProps {
  totalScore: number;
}

const SurveyResults: React.FC<SurveyResultsProps> = ({ totalScore }) => {
  let emoji, recommendation;
  if (totalScore < 15) {
    emoji = "Terrible";
    recommendation = (
      <div className="mt-6 p-4 bg-red-100 rounded-lg flex flex-col items-start space-y-2">
        <h3 className="text-lg font-semibold dark:text-black">Recommendation:</h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-700">
          <li>• Practice daily meditation for at least 10 minutes</li>
          <li>• Engage in regular physical exercise like walking, jogging, or yoga</li>
          <li>• Prioritize getting enough quality sleep (7-9 hours per night)</li>
          <li>• Consider speaking with a mental health professional</li>
          <li>• Identify and address the root causes of your stress</li>
        </ul>
      </div>
    );
  } else if (totalScore < 30) {
    emoji = "Bad";
    recommendation = (
      <div className="mt-6 p-4 bg-orange-100 rounded-lg flex flex-col items-start space-y-2">
        <h3 className="text-lg font-semibold dark:text-black">Recommendation:</h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-700">
          <li>• Incorporate regular exercise into your routine</li>
          <li>• Practice stress-reducing techniques like deep breathing or journaling</li>
          <li>• Identify and address the primary sources of stress in your life</li>
          <li>• Consider seeking support from friends, family, or a counselor</li>
          <li>• Develop healthy coping mechanisms to manage your stress levels</li>
        </ul>
      </div>
    );
  } else if (totalScore < 45) {
    emoji = "Okay";
    recommendation = (
      <div className="mt-6 p-4 bg-yellow-100 rounded-lg flex flex-col items-start space-y-2">
        <h3 className="text-lg font-semibold dark:text-black">Recommendation:</h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-700">
          <li>• Consider incorporating more relaxation techniques into your routine</li>
          <li>• Evaluate your work-life balance and make adjustments as needed</li>
          <li>• Engage in regular physical activity, even if it's just a daily walk</li>
          <li>• Prioritize self-care activities that help you unwind and recharge</li>
          <li>• Explore ways to better manage your time and reduce unnecessary stress</li>
        </ul>
      </div>
    );
  } else if (totalScore < 60) {
    emoji = "Good";
    recommendation = (
      <div className="mt-6 p-4 bg-green-100 rounded-lg flex flex-col items-start space-y-2">
        <h3 className="text-lg font-semibold dark:text-black">Recommendation:</h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-700">
          <li>• Keep up the great work in managing your stress levels</li>
          <li>• Consider adding regular yoga or meditation to your routine</li>
          <li>• Ensure you're getting enough quality sleep and downtime</li>
          <li>• Continue to identify and address any sources of stress in your life</li>
          <li>• Celebrate your progress and find ways to maintain a healthy work-life balance</li>
        </ul>
      </div>
    );
  } else {
    emoji = "Great";
    recommendation = (
      <div className="mt-6 p-4 bg-blue-100 rounded-lg flex flex-col items-start space-y-2">
        <h3 className="text-lg font-semibold dark:text-black">Recommendation:</h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-700">
          <li>• Excellent job in maintaining a healthy stress management routine</li>
          <li>• Keep up the consistent practice of stress-reducing techniques</li>
          <li>• Consider incorporating mindfulness or meditation practices</li>
          <li>• Explore new ways to unwind and recharge, such as trying a new hobby</li>
          <li>• Continue to prioritize your overall well-being and self-care</li>
        </ul>
      </div>
    );
  }

  return (
    <>
      <div className="mt-6 p-4 bg-white rounded-lg flex items-center justify-center space-x-2 h-40">
        <img
          src={`src/assets/${emoji.toLowerCase()}.png`}
          alt="emoji.svg"
          className="h-full w-auto max-h-40 object-contain" 
        />
      </div>
      <div className="mt-6 p-4 bg-green-100 rounded-lg flex items-center space-x-2">
        <p className="text-lg font-semibold dark:text-black">
          Total Score: {totalScore}
        </p>
      </div>
      {recommendation}
    </>
  );
};

export default SurveyResults;