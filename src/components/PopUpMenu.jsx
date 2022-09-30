import { React, useState } from "react";
import { NavLink } from "react-router-dom";

const PopUpMenu = ({ navlinks, menustate }) => {
  return (
    <nav
      className={`opacity-[97%] rounded-2xl drop-shadow-lg hidden gap-10 z-50 xsm:mr-[-2.5rem]
      sm:mr-[-5.5rem] md:mr-[-16rem] lg:mr-[-25.5rem] bg-white lg:flex flex-col
      items-center h-[85vh] sm:w-[70vw] md:w-[50vw] lg:w-[40vw] xsm:w-[80vw] bottom-0
      fixed  ${
        menustate ? "lg:opacity1 lg:visible" : "lg:opacity-0 lg:hidden"
      }`}
    >
      <ul className="mt-10 gap-10 flex flex-col items-center ">
        {navlinks?.map((val, id) => (
          <div className="py-2 px-12 rounded-full hover:bg-emerald-50 ">
            <li key={id} className="navlinks-style ">
              <NavLink to={"#"}>{val.link}</NavLink>
            </li>
          </div>
        ))}
      </ul>
      <div className="flex justify-center items-center">
        <button type="button" className="button-emerald text-sm px-6">
          JOIN US
        </button>
      </div>
    </nav>
  );
};

export default PopUpMenu;
