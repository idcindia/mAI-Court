"use client"; // Add this at the top to make it a client component

import Image from "next/image";
import Link from "next/link"; // Import the Link component
import Features from "./BigImage";
import ReviewCard from "@/app/components/common/ReviewCard";
import Header from "../common/Header";
import SearchBar from "./search/searchbar";
import { motion } from "framer-motion"; // Import framer-motion

const ImageSlider = () => {
  const sections = [
    { title: "Tax matters", icon: "🏛️", path: "/tax-matters" },
    { title: "Right to Information", icon: "⚖️", path: "/right-to-information" },
    { title: "Case Status", icon: "💻", path: "https://www.sci.gov.in/case-status-case-no/" },
    { title: "Judgments", icon: "⚖️", path: "https://www.livelaw.in/top-stories" },
    { title: "Bank and finance", icon: "💼", path: "/bank-and-finance" },
  ];

  return (
    <div className="maincontainer flex flex-col w-screen items-center justify-center">
      <div>
        <Header />
      </div>
      <div>
        <SearchBar />
      </div>

      <div className="boxes w-full px-4 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
          {sections.map((section, index) => (
            <div key={index}>
              {section.path.startsWith("http") ? (
                // For external links
                <motion.div
                  onClick={() => window.open(section.path, "_blank")}
                  whileHover={{
                    scale: 1.05, // Scale the card on hover
                    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)", // Increase shadow on hover
                    backgroundColor: "#FBBF24", // Change background to yellow on hover
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-gray-100 h-[14rem] shadow-[0px_0px_7px_0px_#718096] hover:bg-yellow-500 text-center rounded-md transition-colors flex flex-col justify-center items-center p-4 cursor-pointer"
                >
                  <div className="text-[4rem] sm:text-[5rem] md:text-[6rem] mb-2">
                    {section.icon}
                  </div>
                  <div className="font-bold text-base sm:text-lg md:text-xl">
                    {section.title}
                  </div>
                </motion.div>
              ) : (
                // For internal links
                <Link href={section.path}>
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
                      backgroundColor: "#FBBF24",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-gray-100 h-[14rem] shadow-[0px_0px_7px_0px_#718096] hover:bg-yellow-500 text-center rounded-md transition-colors flex flex-col justify-center items-center p-4 cursor-pointer"
                  >
                    <div className="text-[4rem] sm:text-[5rem] md:text-[6rem] mb-2">
                      {section.icon}
                    </div>
                    <div className="font-bold text-base sm:text-lg md:text-xl">
                      {section.title}
                    </div>
                  </motion.div>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* images div */}
      <div>
        <Features />
      </div>

      {/* testimonials */}
      <div className="flex flex-col items-center justify-center shadow-xl mb-5">
        <h1 className="text-[#E59520] font-bold text-3xl">
          <span className="text-3xl font-bold">What Our Clients Say</span>
        </h1>
        <ReviewCard />
      </div>
    </div>
  );
};

export default ImageSlider;
