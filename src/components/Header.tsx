import { Menu } from "lucide-react";
import logo from "../assets/logo.png";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";

function Header() {
  
  const links = [
    
    { text: "Contact Us", path: "/contactus" },
    { text: "SignUp", path: "/signup" },
    { text: " SignIn", path: "/signin" },
  ];
  return (
    <div className=" border-b-2 shadow fixed z-50 bg-background top-0 left-0 right-0 ">
      <div className="w-11/12  max-w-7xl mx-auto py-6 flex justify-between gap-x-4 items-center">
        <Link to="/">
        <div className="flex items-center gap-x-2 ">
          <img className="w-10" src={logo} />
          <div className="text-3xl font-semibold flex items-center gap-x-0.5 tracking-wider">
            <span className="text-primary ">Mind</span>
            <span>Scape</span>
          </div>
        </div></Link>

        <div className="flex items-center gap-x-4">
          <div className="md:flex items-center gap-x-4 hidden">
            {links.map((link, index) => (
              <Button variant={"outline"} key={index}>
                <Link to={link.path}> {link.text}</Link>
              </Button>
            ))}
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <Button size={"icon"} variant={"outline"}>
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex items-center flex-col gap-y-2 ">
                      <img className="w-10" src={logo} />
                      <div className="text-3xl font-semibold flex items-center gap-x-0.5 tracking-wider">
                        <span className="text-primary">Mind</span>
                        <span>Scape</span>
                      </div>
                    </div>
                  </SheetTitle>
                  <SheetDescription>
                    At Mindscape, we are dedicated to supporting mental
                    well-being by providing accessible, compassionate, and
                    evidence-based resources. Our mission is to empower
                    individuals with the knowledge and tools they need to
                    navigate life's challenges, foster resilience, and cultivate
                    a balanced, fulfilling life.
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col gap-y-2.5 pt-4">
                  {links.map((link, index) => (
                    <Button
                      className="w-full"
                      variant={"secondary"}
                      key={index}
                    >
                     <Link to={link.path}> {link.text}</Link>
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <ModeToggle></ModeToggle>
        </div>
      </div>
    </div>
  );
}

export default Header;
