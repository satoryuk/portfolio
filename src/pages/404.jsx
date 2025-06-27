import { notfound } from "../assets/Image";
import { ArrowLeftCircle } from "lucide-react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-gray-900 w-full min-h-screen">
      <NavLink to="/">
        <button className="text-white text-base sm:text-lg flex items-center justify-center gap-2 px-4 pt-6 sm:pl-4 md:pl-12 hover:text-yellow-600 transition-all">
          <ArrowLeftCircle className="w-4 h-4" />
          Back to Home!
        </button>
      </NavLink>
      <div className="flex flex-col items-center justify-center px-4 mt-20">
        <img
          src={notfound}
          alt="not found page"
          className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
        />
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center">
          Page Not Found! 404
        </h2>
      </div>
    </div>
  );
};

export default NotFound;
