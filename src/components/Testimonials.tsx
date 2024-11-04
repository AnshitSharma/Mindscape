import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
// import dotted from "../assets/DOTBG.png";
import "../components/Testimonials.css";

function Testimonials() {
  const data = [
    {
      photo: "https://api.dicebear.com/9.x/personas/svg?seed=Chirag Gupta",
      name: "Chirag Gupta",
      review:
        "Mindscale has been a game-changer for me. The resources and guidance provided have helped me navigate through some of the toughest times in my life. ",
      location: "Mumbai, India",
    },
    {
      photo: "https://api.dicebear.com/9.x/personas/svg?seed=Anshit",
      name: "Anshit Sharma",
      review:
        "I can't express how grateful I am for Mindscale. The personalized approach and supportive community have been instrumental in improving my mental health. ",
      location: "London, UK",
    },
    {
      photo: "https://api.dicebear.com/9.x/personas/svg?seed=Ronak Sharma ",
      name: "Ronak Sharma",
      review:
        "Mindscale is a fantastic platform for anyone looking to improve their mental health. The tools and techniques I've learned here have made a significant difference in how I manage stress.",
      location: "Sydney, Australia",
    },
    {
      photo: "https://api.dicebear.com/9.x/personas/svg?seed=Amit Goel",
      name: "Amit Goel",
      review:
        "Mindscale has been a blessing. The insights and practices offered are practical and easy to incorporate into my daily routine. My mental clarity and focus have improved tremendously.",
      location: "Delhi, India",
    },
    {
      photo: "https://api.dicebear.com/9.x/personas/svg?seed=Parth Bansal",
      name: "Parth Bansal",
      review:
        "The holistic approach of Mindscale has made me more aware of my mental health. The meditation and mindfulness exercises have become an essential part of my life. Highly recommended!",
      location: "Rome, Italy",
    },
    {
      photo: "https://api.dicebear.com/9.x/personas/svg?seed=Nakul Gupta",
      name: "Nakul Gupta",
      review:
        "Mindscale offers an incredible range of resources that have helped me build resilience and cope better with life's challenges. It's a must-have for anyone serious about mental wellness.",
      location: "Dublin, Ireland",
    },
    {
      photo: "https://api.dicebear.com/9.x/personas/svg?seed=Mamta Sharma",
      name: "Mamta Sharma",
      review:
        "Mindscale has transformed my outlook on mental health. The easy-to-use platform and expert advice have made it easier for me to stay positive and motivated, even during tough times.",
      location: "New York, USA",
    },
  ];
  return (
    <div className="w-full h-full bg-[radial-gradient(circle,rgba(12,12,12,0.171)_2px,transparent_0)] dark:bg-[radial-gradient(circle,rgba(80,80,80,0.7)_2px,transparent_0)] bg-[length:30px_30px] bg-[position:-5px_-5px] mt-6">
    <div className="w-11/12 mx-auto py-12 max-w-7xl  ">
      <div className="text-4xl font-semibold text-center  text-orange-400 dark:text-orange-700 py-6">
        Testimonials
      </div>
      <Carousel
        // style={{
        //   backgroundImage: `url(${dotted})`,
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        //   width:"96rem"

        // }}
        className="w-full "
        plugins={[
          Autoplay({
            delay: 1500,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent >
          {data.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-2 ">
                <Card className="bg-gradient-to-tr  dark:from-blue-500 dark:to-teal-500 from-yellow-500 to-pink-500 p-0.5 rounded-lg">
                  <CardContent className="flex flex-col bg-background rounded-md items-center opacity-100 gap-y-4 justify-center p-6">
                    <img
                      className="w-16 rounded-full bg-purple-200  p-2"
                      src={item.photo}
                    />
                    <div className="text-sm opacity-70 text-center">
                      {item.review}
                    </div>
                    <div className="text-xl font-semibold text-orange-400 dark:text-orange-700">
                      {item.name}
                    </div>
                    <div className="text-sm opacity-50 text-center">
                      {item.location}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
    </div>
  );
}

export default Testimonials;
