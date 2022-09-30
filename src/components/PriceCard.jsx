import React from "react";

const PriceCard = ({
  plan: { planicon, title, text, plantype, plancontent, buttonText },
}) => {
  return (
    <div>
      <div className="hover:scale-105  cursor-pointer rounded-lg ring-slate-200 ring-1 px-5 py-5 lg:w-[60vw] sm:w-[90vw] md:w-[80vw]">
        <div className="flex justify-between md:gap-0 gap-16 items-center ">
          <div className="flex  items-center gap-6">
            <div className="grid items-center">
              <img
                src={planicon}
                alt=""
                className="h-16 lg:h-16 md:h-10 xl:h-12"
              />
            </div>
            <div className="grid items-center">
              <h1 className="text-xl font-semibold sm:text-md xl:text-base">
                {title}
              </h1>
              <p className="text-sm">{text}</p>
            </div>
          </div>
          <div className="text-right items-center">
            <h1 className="font-bold text-md">{plantype}</h1>
          </div>
        </div>
        <div className="h-[0.1vh] my-8 bg-slate-200"></div>
        <div className="flex flex-col items-center gap-4">
          {plancontent.map((plan, id) => (
            <div
              className="flex justify-start items-center gap-6 w-full ml-12"
              key={id}
            >
              <img src={plan.iconbox} alt="" />
              <p>{plan.text}</p>
            </div>
          ))}
          <button className="m-5 button-emerald">{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
