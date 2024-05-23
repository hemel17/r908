import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const NavList = () => {
  return (
    <ul className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" color="white" className="p-1">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center transition-colors text-amber-400 "
              : "flex items-center transition-colors"
          }
        >
          Home
        </NavLink>
      </Typography>
      <Typography as="li" color="white" className="p-1">
        <NavLink
          to={"/listedBooks"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center transition-colors text-amber-400 "
              : "flex items-center transition-colors"
          }
        >
          Listed Books
        </NavLink>
      </Typography>
      <Typography as="li" color="white" className="p-1">
        <NavLink
          to={"/pagesToRead"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center transition-colors text-amber-400 "
              : "flex items-center transition-colors"
          }
        >
          Pages to Read
        </NavLink>
      </Typography>
      <Typography as="li" color="white" className="p-1">
        <NavLink
          to={"/latestBooks"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center transition-colors text-amber-400 "
              : "flex items-center transition-colors"
          }
        >
          Latest Books
        </NavLink>
      </Typography>
      <Typography as="li" color="white" className="p-1">
        <NavLink
          to={"/suggestedBooks"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center transition-colors text-amber-400 "
              : "flex items-center transition-colors"
          }
        >
          Suggested Books
        </NavLink>
      </Typography>
    </ul>
  );
};

const NavbarSimple = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="px-6 py-3 border-none shadow-none outline-none bg-blue-gray-800">
      <div className="flex items-center justify-between text-white">
        <Typography
          as="a"
          href="/"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 text-xl"
        >
          Book<span className="text-amber-400">Hub</span>
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>

        <div className="hidden gap-4 lg:flex">
          <Typography
            as="a"
            href="/"
            variant="small"
            color="white"
            className="p-1 font-medium"
          >
            Sign In
          </Typography>
          <Typography
            as="a"
            href="/"
            variant="small"
            color="white"
            className="p-1 font-medium"
          >
            Sign Up
          </Typography>
        </div>

        <IconButton
          variant="text"
          className="w-6 h-6 ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="w-6 h-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="w-6 h-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex flex-col ">
          <Typography as="a" href="/" color="white" className="p-1 font-medium">
            Sign In
          </Typography>
          <Typography as="a" href="/" color="white" className="p-1 font-medium">
            Sign Up
          </Typography>
        </div>
      </Collapse>
    </Navbar>
  );
};

export default NavbarSimple;
