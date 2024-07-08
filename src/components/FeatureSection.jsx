import { features } from "../constants";
const FeatureSection = () => {
  return (
    <div className="bg-gradient-to-b from-[#F1F8E8] to bg-[#D8EFD3]">
      <div className="text-center font-mono">
        <span className=" bg-orange-200 text-orange-600 rounded-full h-6 text-lg font-medium px-2 py-1 uppercase">
          Features
        </span>
        <div className="text-3xl sm:text-5xl lg:text-6xl mt-10">
          Easily improve your{" "}
          <div>
            <span className=" bg-gradient-to-l from-orange-600 to-red-800 text-transparent bg-clip-text">
              Self
            </span>
            <span className=" bg-gradient-to-r from-orange-600 to-red-800 text-transparent bg-clip-text">
              {" "}
              Understanding
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-orange-200 text-orange-600 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
