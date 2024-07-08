import { useState } from "react";
import { HeartHandshake, History,LogOut,MessageSquareText,AlignJustify,X } from "lucide-react";
import { Link } from "react-router-dom";
import { useFirebase } from "../Firebase/Firebase";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const { Logout, isLoggedIn } = useFirebase();

  return (
    <div className="max-w-[100vw] sticky z-50 bg-orange-200/50 backdrop-blur-md top-0 mx-auto flex justify-between font-mono items-center p-4 box-border">
      {/* LEFT SIDE */}
      <div className="flex items-center">
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer text-orange-700"
        >
          <AlignJustify className=" h-8 w-8"/>
        </div>
        <Link to="/">
          <button className="text-2xl sm:text-3xl font-mono lg:text-4xl px-2 ml-6 font-bold bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            Scribble!
          </button>
        </Link>
      </div>
      {isLoggedIn && (
        <Link to="/chat">
          <button className="text-orange-700">
            <MessageSquareText className="h-8 w-8"/>
          </button>
        </Link>
      )}
      {/* MOBILE MENU */}

      {/* OVERLAY */}

      {nav ? (
        <div className="bg-black/80 fixed w-full rounded-none h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* SIDE DRAWER MENU */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[250px] h-screen z-10 bg-gradient-to-l  from-[#F1F8E8] to bg-[#D8EFD3] shadow-lg duration-300"
            : "fixed top-0 left-[-100%] w-[250px] h-screen z-10  duration-300"
        }
      >
        <X
          onClick={() => setNav(!nav)}
          className="absolute right-4 top-3 h-8 w-8 text-orange-700 cursor-pointer"
        />
        <h2 className="text-3xl cursor-default py-3 pl-2 font-mono font-bold bg-gradient-to-r from-orange-600 to-red-900 text-transparent bg-clip-text ">
          Scribble!
        </h2>
        <nav>
          <ul className="flex flex-col space-y-3 mt-4 ml-3">
            {isLoggedIn && (
              <Link to="/history">
                <button onClick={() => setNav(!nav)}>
                  <li className="text-2xl py-2 font-medium font-mono flex">
                    <div className="mr-4">
                      {/* <HistoryToggleOffIcon
                        style={{ fontSize: "2rem" }}
                        className="mr-4"
                      /> */}
                      <History className="h-8 w-8 text-orange-600" />
                    </div>
                    History
                  </li>
                </button>
              </Link>
            )}
            <a href="https://telemanas.mohfw.gov.in/#/home">
              <button>
                <li className="text-2xl py-2 font-medium font-mono flex">
                  <div className="mr-4">
                    <HeartHandshake className=" h-8 w-8 text-green-700 " />
                  </div>
                  HelpLine
                </li>
              </button>
            </a>
            {isLoggedIn && (
              <a href="/">
                <button onClick={Logout} className="w-2/3">
                  <li className="text-2xl py-2 font-medium font-mono flex">
                    <LogOut className="h-8 w-8 text-red-600 mr-4" />
                    LogOut
                  </li>
                </button>
              </a>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
