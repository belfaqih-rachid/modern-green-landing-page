import { React, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import menu from "../images/menu.svg";
import PopUpMenu from "./PopUpMenu";

const Navbar = ({ navlinks }) => {
  const [menustate, setMenustate] = useState(false);
  const changeit = () => {
    setMenustate(!menustate);
  };

  const [navState, setNavState] = useState(false);

  const onNavScroll = () => {
    if (window.scrollY > 180) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  return (
    <header className={`nav-default ${navState && 'nav-sticky'}`}>
      <nav className=" h-[10vh] w-[90vw] m-auto justify-between flex items-center">
        <NavLink to={`/`} className="flex items-center">
          <img src={logo} alt="serbini" className=" w-22 object-contain h-10" />
        </NavLink>
        <ul className="lg:hidden gap-16 flex justify-center items-center">
          {navlinks?.map((val, id) => (
            <li key={id} className="hover:scale-105 hover:text-sky-900 navlinks-style">
              <NavLink to={"#"}>{val.link}</NavLink>
            </li>
          ))}
        </ul>
        <div className="lg:hidden flex justify-center items-center">
          <button type="button" className="button-emerald text-sm px-6">
            JOIN US
          </button>
        </div>
        <div className="z-99 hidden lg:flex active:scale-50 justify-center items-center">
          <button
            onClick={changeit}
            type="button"
            className="sh shadow-sm filter cursor-pointer"
          >
            <img src={menu} alt="menu" />
          </button>
        </div>
      </nav>
      <PopUpMenu navlinks={navlinks} menustate={menustate} />
    </header>
  );
};

export default Navbar;
