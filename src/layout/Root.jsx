import { Outlet } from "react-router-dom";
import NavbarSimple from "../components/Navbar/NavbarSimple";

const Root = () => {
  return (
    <section className="w-full max-w-[90%] mx-auto">
      <NavbarSimple />
      <Outlet />
    </section>
  );
};
export default Root;
