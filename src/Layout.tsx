import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";


function Layout() {
  return (
    <div className="w-full min-h-screen font-rubik relative overflow-x-hidden overflow-y-auto">
      <Header />
      <Outlet />
      <Footer />
      <Copyright/>
    </div>
  );
}

export default Layout;
