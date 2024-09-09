"use client"; // Add this at the top to make it a client component

import Image from "next/image";
import Features from "./BigImage";
import Testimonial from "../common/Testimonial";

const ImageSlider = () => {
  
  
  const sections = [
    { title: "Tax matters", icon: "🏛️" },
    { title: "Right to Information", icon: "⚖️" },
    { title: "Case Status", icon: "💻" },
    { title: "Judgments", icon: "⚖️" },
    { title: "Bank and finance", icon: "💼" },
  ];

  return (
   <div className="maincontainer flex flex-col w-screen  items-center justify-center ">
     <div className="relative w-80 md:w-96 flex flex-row  mt-10">
        <input
          type="text"
          className="w-full p-4 pl-10 h-14 text-gray-900 bg-white border border-gray-300 rounded-full shadow-lg focus:ring-2 focus:ring-black focus:outline-none transition-all duration-300 ease-in-out"
          placeholder="Search for courses or topics..."
        />
        <button
          className="absolute top-1/2 transform -translate-y-1/2 left-4 text-gray-400 hover:text-black transition-colors"
          aria-label="search icon"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"
            />
          </svg>
        </button>
        <button className="absolute right-0 top-1/2 h-14 w-[8rem] transform -translate-y-1/2 bg-black text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-gray-800 transition-colors focus:outline-none">
          Search
        </button>
      </div>

      <div className="boxes w-full px-4 mt-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
    {sections.map((section, index) => (
      <div
        key={index}
        className="bg-gray-100 h-[14rem] shadow-[0px_0px_7px_0px_#718096] hover:bg-yellow-500 text-center rounded-md transition-colors flex flex-col justify-center items-center p-4"
      >
        <div className="text-[4rem] sm:text-[5rem] md:text-[6rem] mb-2">{section.icon}</div>
        <div className="font-bold text-base sm:text-lg md:text-xl">{section.title}</div>
      </div>
    ))}
  </div>
</div>

    

    {/* images div */}
    <div>
    <Features/>
    </div>
    {/* testionials */}
    <Testimonial/>
   </div>
  );
};

export default ImageSlider;
