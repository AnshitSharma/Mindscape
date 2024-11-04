import logo from "../assets/logo.png";

function Footer() {
  return (
    <div className="flex justify-between flex-col md:flex-row gap-6 w-11/12 max-w-7xl mx-auto  py-16    ">
      <div className="w-full md:w-1/3">
        <div className="flex items-center gap-x-2 ">
          <img className="w-10" src={logo} />
          <div className="text-3xl font-semibold flex items-center gap-x-0.5 tracking-wider">
            <span className="text-primary ">Mind</span>
            <span>Scape</span>
          </div>
        </div>
        <div className="py-6">
          Our mission is to empower individuals with the knowledge and tools
          they need to navigate life's challenges, foster resilience, and
          cultivate a balanced, fulfilling life.
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full md:w-2/3 gap-4">
        <div className="flex flex-col items-center">
          <div className="hover:text-blue-800 cursor-pointer">About Us</div>
          <div className="hover:text-blue-800 cursor-pointer">Home</div>
          <div className="hover:text-blue-800 cursor-pointer">Services</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="hover:text-blue-800 cursor-pointer">Email</div>
          <div className="hover:text-blue-800 cursor-pointer">Whatsapp</div>
          <div className="hover:text-blue-800 cursor-pointer">
            Contact Number
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="hover:text-blue-800 cursor-pointer">Twiter</div>
          <div className="hover:text-blue-800 cursor-pointer">Instagram</div>
          <div className="hover:text-blue-800 cursor-pointer">Facebook</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="hover:text-blue-800 cursor-pointer">
            Privacy Policy
          </div>
          <div className="hover:text-blue-800 cursor-pointer">
            Terms & Conditions
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
