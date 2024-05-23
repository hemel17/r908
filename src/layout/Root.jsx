import { Outlet } from "react-router-dom";
import NavbarSimple from "../components/Navbar/NavbarSimple";

const Root = () => {
  return (
    <>
      <NavbarSimple />
      <Outlet />
    </>
  );
};
export default Root;
