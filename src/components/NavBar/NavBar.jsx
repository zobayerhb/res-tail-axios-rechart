import { useState } from "react";
import Links from "../Links/Links";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Profile", path: "/profile" },
  ];

  return (
    <nav>
      <div
        className="text-2xl md:hidden bg-yellow-300"
        onClick={() => setOpen(!open)}
      >
        {open === true ? (
          <AiOutlineClose></AiOutlineClose>
        ) : (
          <AiOutlineMenu></AiOutlineMenu>
        )}
      </div>

      <ul
        className={`md:flex gap-4 bg-yellow-100 absolute md:static ${
          open ? "top-6 left-0" : "-left-40"
        } duration-1000`}
      >
        {routes.map((route) => (
          <Links key={route.id} route={route}></Links>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
