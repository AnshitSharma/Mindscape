import { Facebook, Instagram, Twitter } from "lucide-react";
import landingphoto from "../assets/landingphoto.png";
import "./Landing.css";
import { Button } from "./ui/button";
function Landing() {
  return (
    <div className="container relative pt-40">
      <div className="absolute left-1/2 top-72 sm:top-0 xl:-top-6 -z-10 -translate-x-1/2 blur-2xl sm:blur-3xl">
        <div
          className="w-screen xl:w-[72.1875rem] aspect-[1155/620] bg-gradient-to-tr dark:from-blue-500 dark:to-teal-500 from-yellow-500 to-pink-500 opacity-30 overflow-hidden"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
      <div className="  w-full max-w-7xl mx-auto flex md:w-11/12 items-center gap-6 flex-col sm:flex-row">
        <div className="flex items-start flex-col w-full gap-y-3">
          <div className="font-bold text-6xl">MENTAL</div>
          <div className="font-bold text-6xl text-primary">HEALTH</div>
          <div>
            At MindScape, we are dedicated to supporting mental well-being by
            providing accessible, compassionate, and evidence-based resources.
            Our mission is to empower individuals with the knowledge and tools
            they need to navigate life's challenges, foster resilience, and
            cultivate a balanced, fulfilling life.
          </div>
          <Button className="text-base mt-2 tracking-wider">Read More</Button>
          <div className="flex gap-6 items-center py-4">
            <a className="hover:text-primary cursor-pointer transition-colors duration-300">
              <Instagram size={30} />
            </a>
            <a className="hover:text-primary cursor-pointer transition-colors duration-300">
              <Twitter size={32} />
            </a>
            <a className="hover:text-primary cursor-pointer transition-colors duration-300">
              <Facebook size={30} />
            </a>
          </div>
        </div>

        <div className="w-full">
          <img src={landingphoto} />
        </div>
      </div>
    </div>
  );
}

export default Landing;
