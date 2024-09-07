"use client"; // Add this at the top to make it a client component

import Image from "next/image";

const ImageSlider = () => {
  const imageUrl = "/one.jpeg"; // Static background image

  return (
    <div
      className="relative w-full h-[600px] bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Optional: Add overlay or text content over the background image */}
      <div className="absolute inset-0 bg-black opacity-30"></div> {/* Dark overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Welcome to Our Website</h1>
      </div>
    </div>
  );
};

export default ImageSlider;
