"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [isAnimating, setIsAnimating] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const [scrolled, setScrolled] = useState(false); // Add the scrolled state here

  const images = [
    {
      src: "/Assests/newlaw.jpeg",
      title: "Your Legal Companion ",
      highlight: "Powered by AI",
      description:
        "Simplifying legal complexities with AI-powered solutions, providing personalized guidance and efficient support for your needs.",
    },
    {
      src: "/Assests/web2.jpg",
      title: "Justice prevails through",
      highlight: "righteousness alone.",
      description:
        "Justice thrives when righteousness leads, ensuring fairness, truth, and integrity in every action, fostering a just society.",
    },
    {
      src: "/Assests/web3.jpg",
      title: "।। धर्मेणैव जयते न्यायः।।",
      description:
        "Exploring new horizons through innovation and wisdom, committed to advancing knowledge with integrity and purpose for all.",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Use setScrolled here
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        setIsAnimating(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <header>
      {/* Navbar Section */}
      {/* <Navbar scrolled={scrolled} /> You can pass scrolled state to Navbar if needed */}

      {/* Background Image and Title Section */}
      <div
        className={`relative w-screen h-[600px] bg-cover bg-no-repeat bg-center transition-all duration-1000 ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `url(${images[currentImage].src})`,
        }}
      >
        ` `{/* Title and Description */}
        <div
          className={`absolute left-10  mt-[11rem] lg:w-[40%] w-[60%] h-[17rem] inset-0 flex flex-col justify-center items-center text-center transition-all duration-1000 transform ${
            isAnimating
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
        >
          <h1 className="lg:text-5xl text-[2rem] font-bold mb-8 p-4 bg-gradient-to-r from-[#F09819] to-[#9e5d02] bg-clip-text text-transparent font-times">
            {images[currentImage].title}
          </h1>
          <h2 className="lg:text-5xl text-[2rem] font-bold mb-4 text-[#414040] font-times">
            {images[currentImage].highlight}
          </h2>
          <p className="lg:text-xl text-lg font-semibold text-gray-700 font-times">
            {images[currentImage].description}
          </p>
        </div>
      </div>
    </header>
  );
}
