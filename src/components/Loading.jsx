import React from "react";
import { Loader } from "lucide-react";
const Loading = () => {
  return (
    <div className="">
      <Loader className="h-6 w-6  md:h-12 md:w-12 text-red-700  animate-spin" />
    </div>
  );
};

export default Loading;
