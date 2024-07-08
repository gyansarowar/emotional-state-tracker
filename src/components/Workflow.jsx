import { CheckCircle2 } from "lucide-react";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="pt-20 font-mono  bg-gradient-to-t from-[#F1F8E8] to bg-[#D8EFD3]">
      <div className=" text-center">
        <span className="bg-orange-200 text-orange-600 rounded-full h-6 text-lg font-medium px-2 py-1 uppercase">
          WorkFlow
        </span>
      </div>
      <div className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Enhance Your{" "}
        <div>
          <span className=" bg-gradient-to-l from-orange-600 to-red-800 text-transparent bg-clip-text">
            Scribbling
          </span>
          <span className=" bg-gradient-to-r from-orange-600 to-red-800 text-transparent bg-clip-text">
            {" "}
            Experience.
          </span>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-orange-600 mx-6 bg-orange-200 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
