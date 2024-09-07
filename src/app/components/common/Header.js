"use client";
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg h-20' : 'bg-[url("/Assests/one.jpeg")] bg-cover h-[600px]'
      }`}
    >
      <div className={`container mx-auto flex items-center justify-between px-6 ${scrolled ? 'py-4' : 'py-6'}`}>
        {/* Logo */}
        <div className={`font-bold text-2xl transition duration-300 ${scrolled ? 'text-black' : 'text-white'}`}>
          <img src="/images/logo.png" alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Navbar Links */}
        <ul className={`flex space-x-8 transition duration-300 ${scrolled ? 'text-black' : 'text-white'}`}>
          <li className="hover:text-gray-300 transition duration-200">
            <a href="#academics">Academics</a>
          </li>
          <li className="hover:text-gray-300 transition duration-200">
            <a href="#admission">Admission</a>
          </li>
          <li className="hover:text-gray-300 transition duration-200">
            <a href="#research">Research</a>
          </li>
          <li className="hover:text-gray-300 transition duration-200">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
