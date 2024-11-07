import React from "react";

interface AnxietyResultsProps {
    totalScore: number;
}
const AnxietyResults: React.FC<AnxietyResultsProps> = ({ totalScore }) => {
    let emoji, recommendation;
    if (totalScore < 15) {
        emoji = "Terrible";
        recommendation = (
            <div className="mt-6 p-4 bg-red-100 rounded-lg flex flex-col items-start space-y-2">
                <h3 className="text-lg font-semibold dark:text-black">Recommendation:</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-700">
                    <li><strong>• Grounding Techniques</strong> - Use the “5-4-3-2-1” method: Name 5 things you see, 4 things you feel, 3 things you hear, 2 things you smell, and 1 thing you taste.</li>
                    <li><strong>• Breathing Exercises</strong> - Try slow, deep breathing exercises. Inhale for 4 counts, hold for 4, and exhale for 4. Repeat until you feel more centered.</li>
                    <li><strong>• Seek Immediate Support</strong> - Reach out to a close friend, family member, or mental health hotline for support.</li>
                    <li><strong>• Small Movements</strong> - If big actions feel too overwhelming, try small movements like stretching your hands, neck, or shoulders.</li>
                    <li><strong>• Repeat a Calming Mantra</strong> - Something as simple as “I am safe” can help soothe intense anxiety.</li>
                    <li><strong>• Use a Comfort Item</strong> - Hold or touch something that brings you comfort, like a blanket, pillow, or pet.</li>
                    <li><strong>•Limit Stimulation</strong> - Find a quiet space away from screens, loud sounds, or crowds to help calm your mind.</li>
                </ul>
            </div>
        );
    } else if (totalScore < 30) {
        emoji = "Bad";
        recommendation = (
            <div className="mt-6 p-4 bg-orange-100 rounded-lg flex flex-col items-start space-y-2">
                <h3 className="text-lg font-semibold dark:text-black">Recommendation:</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-700">
                    <li><strong>• Journaling</strong> - Write down what’s triggering your anxiety; identifying the source can lessen its power.</li>
                    <li><strong>• Engage in Physical Activity</strong> - A quick walk, stretching, or light exercise can help reduce anxiety and release tension.</li>
                    <li><strong>• Practice Visualization</strong> - Imagine a calming place or situation, like a beach or forest, to mentally escape anxiety.</li>
                    <li><strong>• Body Scan</strong> - Relax each body part from head to toe, releasing any tension you feel.</li>
                    <li><strong>• Use Calming Scents</strong> - Essential oils like lavender or chamomile can create a calming environment.</li>
                    <li><strong>• Limit Caffeine</strong> - Avoid stimulants like caffeine that can heighten anxiety symptoms.</li>
                    <li><strong>• Take Breaks</strong> - If you’re working or studying, break up tasks to avoid feeling overwhelmed.</li>
                </ul>
            </div>
        );
    } else if (totalScore < 45) {
        emoji = "Okay";
        recommendation = (
            <div className="mt-6 p-4 bg-yellow-100 rounded-lg flex flex-col items-start space-y-2">
                <h3 className="text-lg font-semibold dark:text-black">Recommendation:</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-700">
                    <li><strong>• Plan Your Day</strong> - Organizing tasks can help manage anxiety by reducing uncertainties.</li>
                    <li><strong>• Positive Affirmations</strong> - Remind yourself that you’re capable of handling challenges as they come.</li>
                    <li><strong>• Practice Gratitude</strong> - List a few things you’re grateful for to shift your focus from stress to positivity.</li>
                    <li><strong>• Limit Social Media</strong> - Disconnect if social media is triggering your anxiety; use that time for something enjoyable.</li>
                    <li><strong>• Stay Hydrated and Eat Well</strong> - Physical health affects mental health, so stay hydrated and eat regular, balanced meals.</li>
                    <li><strong>• Mindful Distractions</strong> - Read a book, listen to calming music, or do a creative activity like drawing or coloring.</li>
                    <li><strong>• Plan Relaxation Time</strong> - Schedule regular time for activities that help you relax, like hobbies or nature walks.</li>
                </ul>
            </div>
        );
    } else if (totalScore < 60) {
        emoji = "Good";
        recommendation = (
            <div className="mt-6 p-4 bg-green-100 rounded-lg flex flex-col items-start space-y-2">
                <h3 className="text-lg font-semibold dark:text-black">Recommendation:</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-700">
                    <li><strong>• Mindfulness Practice</strong> - Continue mindfulness or meditation exercises to stay grounded.</li>
                    <li><strong>• Create a "Joy List"</strong> - List things that bring you joy, and incorporate them into your routine.</li>
                    <li><strong>• Social Connection</strong> - Spend time with supportive friends or loved ones who make you feel comfortable.</li>
                    <li><strong>• Set Small Goals</strong> - Work toward achievable goals that give you a sense of purpose and accomplishment.</li>
                    <li><strong>• Stay Consistent with Self-Care</strong> - Maintain healthy habits like sleep, exercise, and balanced nutrition.</li>
                    <li><strong>• Engage in Purposeful Work</strong> - Find projects or activities that make you feel engaged and productive.</li>
                    <li><strong>• Celebrate Small Wins</strong> - Recognize and reward your progress in managing anxiety.</li>
                </ul>
            </div>
        );
    } else {
        emoji = "Great";
        recommendation = (
            <div className="mt-6 p-4 bg-blue-100 rounded-lg flex flex-col items-start space-y-2">
                <h3 className="text-lg font-semibold dark:text-black">Recommendation:</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-700">
                    <li><strong>• Practice Preventive Mindfulness</strong> - Continue regular mindfulness, meditation, or relaxation practices to maintain calmness.</li>
                    <li><strong>• Help Others</strong> - Volunteering or supporting friends can boost your mood and foster connections.</li>
                    <li><strong>• Embrace New Experiences</strong> - Step out of your comfort zone; small challenges can keep you engaged and resilient.</li>
                    <li><strong>• Reflect on Growth</strong> - Journal about your progress in managing anxiety and celebrate how far you’ve come.</li>
                    <li><strong>• Set New Personal Goals</strong> - With anxiety under control, explore goals that bring growth and fulfillment.</li>
                    <li><strong>• Practice Compassion</strong> - Be kind to yourself and others, reinforcing a positive mindset.</li>
                    <li><strong>• Share Your Techniques</strong> - Help others by sharing what has worked for you; it reinforces your progress and builds community.</li>
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



export default AnxietyResults