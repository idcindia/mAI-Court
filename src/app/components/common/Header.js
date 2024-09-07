"use client";
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true); // State for triggering animation

  // Background images array and corresponding titles/descriptions
  const images = [
    {
      src: "/Assests/web1.jpg",
      title: "Welcome to Our University",
      description: "Discover the future with us",
    },
    {
      src: "/Assests/web2.jpg",
      title: "Excellence in Education",
      description: "Shaping minds for a brighter tomorrow",
    },
    {
      src: "/Assests/web3.jpg",
      title: "Innovation and Research",
      description: "Pushing the boundaries of knowledge",
    }
  ];

  // Scroll effect to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Carousel effect for background images with left-to-right and fade-in animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false); // Start fade out
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length); // Change image
        setIsAnimating(true); // Start animation for fade-in
      }, 500); // Wait for the fade-out effect to complete
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <header>
      {/* Navbar Section (Fixed and Doesn't Change) */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-lg h-20' : 'bg-transparent h-20'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-1">
          {/* Logo */}
          <div className="font-bold text-2xl text-black">
            <img src="/Assests/logo.png" alt="Logo" className="h-[5rem] w-[9rem]" />
          </div>

          {/* Navbar Links */}
          <ul className="flex space-x-8 text-black">
            <li className="hover:text-gray-600 transition duration-200">
              <a href="#academics">Academics</a>
            </li>
            <li className="hover:text-gray-600 transition duration-200">
              <a href="#admission">Admission</a>
            </li>
            <li className="hover:text-gray-600 transition duration-200">
              <a href="#research">Research</a>
            </li>
            <li className="hover:text-gray-600 transition duration-200">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Background Image and Title Section with left-to-right and fade-in animation */}
      <div
        className={`relative w-full h-[600px] bg-cover bg-center transition-all duration-1000 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundImage: `url(${images[currentImage].src})`,
        }}
      >
        {/* Title and Description with left-to-right animation */}
        <div className={`absolute left-10 inset-0 flex flex-col  justify-center text-red-500  transition-all duration-1000 transform ${isAnimating ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
          <h1 className="text-5xl font-bold mb-4">{images[currentImage].title}</h1>
         
          <p className="text-lg">{images[currentImage].description}</p>
        </div>
      </div>
    </header>
  );
}
