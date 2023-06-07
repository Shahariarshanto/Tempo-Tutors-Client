import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col-reverse md:flex-col lg:flex-row items-center justify-center space-y-16 lg:space-y-0 space-x-8 2xl:space-x-0">
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center">
        <p className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-gray-300">
          404
        </p>
        <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-gray-300 mt-2">
          Page Not Found
        </p>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-500 my-12">
          Sorry, the page you are looking for could not be found.
        </p>
        <Link
          to="/"
          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded transition duration-150"
          title="Return Home"
        >
          <FaArrowLeft className="h-5 w-5" />
          <span>Return Home</span>
        </Link>
      </div>
      <div className="w-1/2 lg:h-full flex lg:items-end justify-center p-4">
        <div className="w-full h-full flex items-center justify-center rounded-lg">
          <img
            src="https://cdn.pixabay.com/photo/2021/07/21/12/49/error-6482984_1280.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
