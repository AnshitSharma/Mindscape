import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function SurveySection() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16 mt-24 mb-24">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 dark:text-white">
          We Value Your Feedback
        </h2>
        <p className="text-xl mb-14 dark:text-gray-300">
          Help us improve our services by taking our customer survey.
        </p>
        <Link to="/survey">
          <Button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300">
            Take Survey
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default SurveySection;