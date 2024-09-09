"use client";
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // For mobile toggle icons

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const [activeSubmenu, setActiveSubmenu] = useState(null); // State to manage active submenus in mobile view

  const images = [
    {
      src: "/Assests/web1.jpg",
      title: "Your Legal Companion",
      description: "Powered by AI",
    },
    {
      src: "/Assests/web2.jpg",
      title:"Justice prevails through",
      description: "righteousness alone.",
    },
    {
      src: "/Assests/web3.jpg",
      title:"।। धर्मेणैव जयते न्यायः।।"
      //description: "Pushing the boundaries of knowledge",
    },
  ];

  const navItems = [
    {
      name: "Legal Aid",
      submenus: ["Court Cases", "Legal Advice", "Consultations", "Reports"],
    },
    {
      name: "Partners",
      submenus: ["Corporate Partners", "NGOs", "Collaborations", "Government"],
    },
    {
      name: "Resources",
      submenus: ["Legal Articles", "Guides", "Templates", "E-Books"],
    },
    {
      name: "Blogs",
      submenus: ["Latest Posts", "Trending", "Categories", "Archives"],
    },
    {
      name: "About Us",
      submenus: ["Our Mission", "Our Team", "Careers", "Contact Us", "Support", "FAQ", "Customer Service", "Reach Us"],
    },
    {
      name: "Join Us",
      submenus: ["LogIn", "SignUp", "Premium Services"],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false); // Start fade out
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length); // Change image
        setIsAnimating(true); // Start fade-in
      }, 500); // Fade-out duration
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const toggleSubmenu = (idx) => {
    setActiveSubmenu(activeSubmenu === idx ? null : idx); // Toggle the active submenu
  };

  return (
    <header>
      {/* Navbar Section */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg h-[5.5rem]" : "bg-transparent h-20"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-1">
          {/* Logo */}
          <div className="font-bold text-2xl text-white">
            <img
              src="/Assests/logo.png"
              alt="Logo"
              className="h-[5rem] w-[9rem]"
            />
          </div>

          {/* Toggle Button for Mobile View */}
          <div className="md:hidden">
            {isMenuOpen ? (
              <AiOutlineClose
                className="text-red-500 text-3xl cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              />
            ) : (
              <AiOutlineMenu
                className="text-black text-3xl cursor-pointer"
                onClick={() => setIsMenuOpen(true)}
              />
            )}
          </div>

          {/* Navbar Links for Desktop */}
          <ul className="hidden md:flex space-x-1 text-black">
            {navItems.map((item, idx) => (
              <li key={idx} className="relative group">
                <a
                  href={`#${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="hover:text-white hover:bg-slate-500 px-4 py-2 rounded-lg text-lg font-semibold transition"
                >
                  {item.name}
                </a>

                {/* Dropdown Menu for Desktop */}
                <div className="absolute hidden group-hover:block lg:bg-white bg-gray-600 shadow-lg rounded-lg mt-2 w-48 z-50">
                  {item.submenus.map((submenu, subIdx) => (
                    <a
                      key={subIdx}
                      href={`#${submenu.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block px-4 py-2 lg:text-gray-700  text--300  hover:bg-gray-200"
                    >
                      {submenu}
                    </a>
                  ))}
                </div>
              </li>
            ))}

            {/* Premium Button */}
            <li className="ml-5 -mt-[6px]">
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-6 py-2 rounded-lg">
                Premium Services
              </button>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden bg-white text-center absolute w-full z-50 py-6`}
        >
          <ul className="space-y-6 text-lg font-semibold">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <a
                  href={`#${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block text-gray-700 hover:text-yellow-600 transition"
                  onClick={() => toggleSubmenu(idx)} // Toggle the submenu in mobile view
                >
                  {item.name}
                </a>

                {/* Dropdown Submenu for Mobile */}
                {activeSubmenu === idx && (
                  <ul className="mt-2 space-y-2 bg-gray-300">
                    {item.submenus.map((submenu, subIdx) => (
                      <li key={subIdx}>
                        <a
                          href={`#${submenu.toLowerCase().replace(/\s+/g, "-")}`}
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                        >
                          {submenu}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            <li>
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-6 py-2 rounded-lg w-full">
                Premium Services
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Background Image and Title Section */}
      <div
        className={`relative w-full h-[600px] bg-cover bg-center transition-all duration-1000 ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `url(${images[currentImage].src})`,
        }}
      >
        {/* Title and Description */}
        <div
          className={`absolute left-10 inset-0 flex flex-col justify-center text-red-500 transition-all duration-1000 transform ${
            isAnimating ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <h1 className="text-5xl font-bold mb-4">{images[currentImage].title}</h1>
          <p className="text-lg">{images[currentImage].description}</p>
        </div>
      </div>
    </header>
  );
}
