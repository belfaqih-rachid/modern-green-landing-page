import React from "react";
import { placesAPI } from "../data/TravelData";

const Explore = ({ placesAPI, title }) => {
  return (
    <div className="relative my-11 md:mt-3">
      <div className="herocontainer">
        <div className="flex justify-center items-center my-20 md:mb-7">
          <h1 className="font-bold text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl filter drop-shadow-lg text-slate-900">
            {title}
          </h1>
        </div>
        <div className=" grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6">
          {placesAPI.map((place, id) => (
            <div
              key={id}
              className="flex gap-4 hover:scale-105 cursor-pointer sm:gap-3 rounded-lg hover:bg-emerald-300 items-center"
            >
              <div className="drop-shadow-lg">
                <img
                  src={place.placeImg}
                  alt=""
                  className="rounded-lg h-[80px] w-[80px] sm:h-[60px] sm:w-[60px]"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-[1.5rem] font-semibold sm:text-[1rem]">
                  {place.location}
                </h1>
                <p className="md:text-sm">{place.distance}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
