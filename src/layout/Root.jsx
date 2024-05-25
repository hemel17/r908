import { Outlet } from "react-router-dom";
import NavbarSimple from "../components/Navbar/NavbarSimple";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  return (
    <section className="w-full max-w-[90%] mx-auto">
      <ToastContainer />
      <NavbarSimple />
      <Outlet />
    </section>
  );
};
export default Root;
