import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Banner = () => {
  // Sample data for the slider
  const sliderItems = [
    {
      title: "Discover the Beauty of Nature",
      description:
        "Explore breathtaking landscapes and stunning natural wonders.",
      image:
        "https://cdn.pixabay.com/photo/2015/11/10/08/31/banner-1036482_1280.jpg",
    },
    {
      title: "Experience Adventure Like Never Before",
      description:
        "Embark on thrilling journeys and adrenaline-pumping activities.",
      image:
        "https://cdn.pixabay.com/photo/2015/08/03/10/25/banner-873106_1280.jpg",
    },
    {
      title: "Relax and Unwind in Paradise",
      description:
        "Indulge in luxury and tranquility at the world's best resorts.",
      image:
        "https://cdn.pixabay.com/photo/2023/01/14/01/09/birds-7717268_1280.png",
    },
  ];

  // State to keep track of the active slide
  const [activeSlide, setActiveSlide] = React.useState(0);

  // Function to handle slide navigation
  const handleSlideChange = (direction) => {
    if (direction === "prev") {
      setActiveSlide(
        activeSlide === 0 ? sliderItems.length - 1 : activeSlide - 1
      );
    } else {
      setActiveSlide(
        activeSlide === sliderItems.length - 1 ? 0 : activeSlide + 1
      );
    }
  };

  return (
    <div className="w-full dark:bg-gray-800 py-10">
      <div className="container mx-auto">
        <div className="relative">
          {/* Slider */}
          <div className="flex">
            {/* Previous slide button */}
            <button
              className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-500 dark:bg-gray-700 text-white rounded-full shadow-lg z-10"
              onClick={() => handleSlideChange("prev")}
            >
              <FaArrowLeft />
            </button>

            {/* Slide */}
            <div className="w-full h-64 lg:h-96 relative overflow-hidden">
              {sliderItems.map((item, index) => (
                <div
                  key={index}
                  className={`w-full h-full absolute top-0 left-0 transition-opacity duration-500 ${
                    index === activeSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    className="w-full h-full object-cover"
                    src={item.image}
                    alt={item.title}
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
                  <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white p-6">
                    <h2 className="text-2xl lg:text-4xl font-bold mb-4">
                      {item.title}
                    </h2>
                    <p className="text-lg lg:text-xl mb-6">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Next slide button */}
            <button
              className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-500 dark:bg-gray-700 text-white rounded-full shadow-lg z-10"
              onClick={() => handleSlideChange("next")}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
