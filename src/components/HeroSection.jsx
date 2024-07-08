import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFirebase } from "../Firebase/Firebase";
import TermsModal from "./TermsModal";

const HeroSection = () => {
  const { signInWithGoogle, isLoggedIn } = useFirebase();
  const [showModal, setShowModal] = useState(false);

  const handleLogin = () => {
    setShowModal(true);
  };

  const handleAccept = () => {
    setShowModal(false);
    signInWithGoogle();
  };

  const handleReject = () => {
    setShowModal(false);
  };

  return (
    <div className=" flex flex-col flex-wrap space-y-5 bg-gradient-to-t min-h-[100vh] from-[#F1F8E8] to bg-[#D8EFD3] justify-center box-border  items-center">
      <span className=" text-5xl sm:text-7xl lg:text-8xl text-center tracking-wide bg-gradient-to-b from-orange-500 to-red-800 text-transparent bg-clip-text">
        Your
      </span>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
      <span className=" bg-gradient-to-t from-orange-600 to-red-800 text-transparent bg-clip-text">
              Personalized
            </span>
            <span className=" bg-gradient-to-t from-orange-600 to-red-800 text-transparent bg-clip-text">
              {" "}
              Diary
            </span>
      </h1>
      <p className="text-xl font-mono text-center text-neutral-600 max-w-4xl">
        Capture life's moments and reflections with ease. Seamlessly record
        thoughts, feelings, and experiences in a secure, intuitive platform
        designed for your convenience and privacy.
      </p>
      <div className=" flex flex-row">
        {isLoggedIn ? (
          <Link to="/chat">
            <div className="flex justify-center my-10">
              <button className="bg-gradient-to-r text-white  from-orange-500 to-red-800 font-mono text-xl font-semibold py-3 px-4 mx-3 rounded-md">
                Start for free
              </button>
            </div>
          </Link>
        ) : (
          <div className="flex justify-center my-10">
            <button
              className="bg-gradient-to-r text-white font-mono text-xl font-semibold from-orange-500 to-red-800 py-3 px-4 mx-3 rounded-md"
              onClick={handleLogin}
            >
              Signin
            </button>
          </div>
        )}
        {!isLoggedIn && (
          <Link to="/chat">
            <div className="flex justify-center my-10">
              <button className="bg-gradient-to-l text-white from-orange-500 to-red-800 font-mono text-xl font-semibold py-3 px-4 mx-3 rounded-md">
                Free Demo
              </button>
            </div>
          </Link>
        )}
      </div>
      <TermsModal
        showModal={showModal}
        onAccept={handleAccept}
        onReject={handleReject}
      />
    </div>
  );
};

export default HeroSection;
