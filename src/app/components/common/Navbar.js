import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        {
            name: "Legal Aid",
            path: "/notfound", 
            submenus: [
                { title: "Court Cases", path: "/notfound/Page" },
                { title: "Legal Advice", path: "/notfound" },
                { title: "Consultations", path: "/notfound" },
                { title: "Reports", path: "/notfound" },
            ],
        },
        {
            name: "Partners",
            path: "/errorpage", // Redirect to the ErrorPage for Partners
            submenus: [
                { title: "Corporate Partners", path: "/errorpage" },
                { title: "NGOs", path: "/errorpage" },
                { title: "Collaborations", path: "/errorpage" },
                { title: "Government", path: "/errorpage" },
            ],
        },
        {
            name: "Resources",
            submenus: [
                { title: "Legal Articles", path: "/resources/legal-articles" },
                { title: "Guides", path: "/resources/guides" },
                { title: "Templates", path: "/resources/templates" },
                { title: "E-Books", path: "/resources/e-books" },
            ],
        },
        {
            name: "Updates",
            submenus: [
                { title: "Blogs", path: "/blog" },
                { title: "Events", path: "/events" },
            ],
        },
        {
            name: "About Us",
            submenus: [
                { title: "Our Mission & Vision", path: "/about" },
                { title: "Why mAICourt?", path: "/about#why-maicourt" },
                { title: "Contact Us", path: "/contact" },
                { title: "Support", path: "/contact" },
                { title: "FAQ", path: "/contact" },
                { title: "Customer Service", path: "/contact" },
                { title: "Reach Us", path: "/contact" },
            ],
        },
        {
            name: "Join Us",
            submenus: [
                { title: "LogIn", path: "/login" },
                { title: "SignUp", path: "/register" },
            ],
        },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white opacity-95 shadow-lg h-[5.5rem]" : "bg-transparent h-20"}`}>
            <div className="container mx-auto flex items-center justify-between px-6 py-1">
                {/* Logo */}
                <div className="font-bold text-2xl text-white">
                    <Link href="/">
                        <Image src="/Assests/logo.png" alt="Logo" className="h-[5rem] w-[9rem]" width={144} height={80} />
                    </Link>
                </div>

                {/* Toggle Button for Mobile View */}
                <div className="md:hidden">
                    {isMenuOpen ? (
                        <AiOutlineClose className="text-red-500 text-3xl cursor-pointer" onClick={() => setIsMenuOpen(false)} />
                    ) : (
                        <AiOutlineMenu className="text-black text-3xl cursor-pointer" onClick={() => setIsMenuOpen(true)} />
                    )}
                </div>

                {/* Navbar Links for Desktop */}
                <ul className="hidden md:flex space-x-4 text-black">
                    {navItems.map((item, idx) => (
                        <li key={idx} className="relative group">
                            <Link href={item.path || "#"} className="px-4 py-2 rounded-lg text-lg font-semibold transition hover:bg-gray-200">
                                {item.name}
                            </Link>

                            {/* Dropdown Menu for Desktop */}
                            {item.submenus && (
                                <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-48 z-50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    {item.submenus.map((submenu, subIdx) => (
                                        <Link key={subIdx} href={submenu.path} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                            {submenu.title}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </li>
                    ))}

                    {/* Premium Button */}
                    <li className="ml-5">
                        <button className="bg-gradient-to-r from-[#F09819] to-[#7e5b2b] hover:from-[#b96c00] hover:to-[#3f2706] text-white font-semibold px-6 py-2 rounded-lg">
                            Premium Services
                        </button>
                    </li>
                </ul>
            </div>

            {/* Mobile Menu */}
            <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden bg-white text-center absolute w-full z-50 py-6`}>
                <ul className="space-y-6 text-lg font-semibold">
                    {navItems.map((item, idx) => (
                        <li key={idx}>
                            <Link href={item.path || "#"} className="block text-gray-700 hover:text-yellow-600 transition">
                                {item.name}
                            </Link>

                            {/* Dropdown Submenu for Mobile */}
                            {item.submenus && (
                                <ul className="mt-2 space-y-2 bg-gray-300 rounded-lg">
                                    {item.submenus.map((submenu, subIdx) => (
                                        <li key={subIdx}>
                                            <Link href={submenu.path} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-lg">
                                                {submenu.title}
                                            </Link>
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
    );
};

export default Navbar;
