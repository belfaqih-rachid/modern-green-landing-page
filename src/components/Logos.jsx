import React from "react";

const Logos = ({ brands }) => {
  return (
    <div className="relative herocontainer g my-36 lg:my-28 ">
      <div className="makescroll ">
        <div className=" mt-20 whitespace-nowrap flex justify-center items-center cursor-pointer xl:gap-20 gap-28 ">
          {brands?.map((logo, id) => (
            <img
              src={logo.iconSrc}
              alt=""
              className="opacity-70 grayscale h-auto object-fill xl:w-36 w-36 lg:w-28 hover:scale-105"
            />
          ))}
          {brands?.map((logo, id) => (
            <img
              src={logo.iconSrc}
              alt=""
              className="opacity-70 grayscale h-auto object-fill xl:w-36 w-36 lg:w-28  hover:scale-105"
            />
          ))}
          {brands?.map((logo, id) => (
            <img
              src={logo.iconSrc}
              alt=""
              className="opacity-70 grayscale h-auto object-fill xl:w-36 w-36 lg:w-28 hover:scale-105"
            />
          ))}
        </div>
      </div>
      <div className="absolute top-0 bottom-0 xl:right-[-20px] md:right-[-10px] right-[-100px] bg-gradient-to-l from-[#ffffff] h-15 w-1/12 z-99" />
      <div className="absolute top-0 bottom-0 xl:left-[-20px] md:left-[-10px] left-[-100px] bg-gradient-to-r from-[#ffffff] h-15 w-1/12 z-99" />
    </div>
  );
};

export default Logos;
