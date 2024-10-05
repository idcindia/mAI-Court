"use client"; // Add this at the top to make it a client component

import Image from "next/image";
import Features from "./BigImage";
import ReviewCard from "@/app/components/common/ReviewCard";
import Header from "../common/Header";
import SearchBar from "./search/searchbar";

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
   <div>
    <Header/>
   </div>
     <div>
      <SearchBar/>
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
    <div className=" flex flex-col items-center justify-center shadow-xl mb-5 ">
    <h1 className="text-[#E59520] font-bold text-3xl  ">
    <span className="text-3xl font-bold">What Our Clients Say</span>
    </h1>
    <ReviewCard/>
    </div>
   </div>
  );
};

export default ImageSlider;
