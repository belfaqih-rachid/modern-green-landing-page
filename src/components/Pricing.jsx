import React from "react";
import PriceCard from "./PriceCard";

const Pricing = ({ pricingapi: { title, text, btn1, btn2, plans } }) => {
  return (
    <div>
      <div className="herocontainer">
        <div className="text-center">
          <h1 className="text-5xl lg:text-5xl md:text-3xl font-bold drop-shadow-lg text-slate-800">
            {title}
          </h1>
          <p className="text-base my-5 sm:text-sm text-gray-600">{text}</p>
          <div className="mt-10 flex justify-center items-center ">
            <div className="py-3 px-6 drop-shadow-xl bg-slate-100 ring-1 ring-slate-200 flex justify-center items-center gap-3 rounded-full">
              <button type="button" className="button-emerald sm:w-auto">
                {btn1}
              </button>
              <button type="button" className="button-light2 shadow-gray-400 ring-1 ring-slate-200 sm:w-auto">
                {btn2}
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-12 xl:gap-8 mt-20 lg:flex-col">
          {plans.map((plan, id) => (
            <PriceCard plan={plan} id={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
