import React from "react";

const MiddelSection = ({
  memory: { title, text, subtitle, img, experience },
}) => {
  return (
    <div className="relative my-16 md:mb-6">
      <div className="herocontainer flex justify-between items-center gap-16 xl:gap-9 lg:flex-col-reverse">
        <div className="flex items-center justify-start max-w-sm lg:justify-center w-full">
          <img src={img} alt="image" className="w-auto h-[55vh] object-fill" />
        </div>
        <div className=" grid text-center items-center w-full  max-w-4xl lg:text-center ">
          <h1 className="text-5xl lg:text-5xl md:text-3xl font-bold drop-shadow-lg">
            {title}
          </h1>
          <h1 className="text-5xl lg:text-5xl md:text-3xl font-bold drop-shadow-lg">
            {subtitle}
          </h1>
          <p className="text-base my-5 sm:text-sm">{text}</p>
          <div className="grid items-center grid-cols-3 gap-7 xl:gap-3">
            {experience?.map((exp, id) => (
              <div
                key={id}
                className="rounded-lg bg-gradient-to-b from-emerald-300 to-green-300 shadow-emerald-200 
                w-auto h-auto flex items-center justify-center text-center flex-col py-7 px-4 xl:p-4
                text-slate-900 filter drop-shadow-lg hover:scale-105 cursor-pointer"
              >
                <h1 className="text-3xl font-bold xl:text-2xl sm:text-xl">{exp.number}</h1>
                <p className="text-lg xl:text-base">{exp.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddelSection;
