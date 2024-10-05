import Image from "next/image";
import Link from "next/link";
import { FaUserCircle, FaSearch, FaBell } from "react-icons/fa";

const AdminHeader = () => {
  return (
    <header className="bg-gradient-to-r from-[#F09819] to-[#9e5d02]  text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-2xl text-white">
          <Link href="/">
            <Image
              src="/Assests/logo.png"
              alt="Logo"
              className="h-[3rem] w-[8rem]"
              width={120}
              height={70}
            />
          </Link>
        </div>

        {/* Search Bar
                <div className="flex-1 mx-8">
                    <div className="relative">
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            className="w-full p-2 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                        <FaSearch className="absolute left-3 top-3 text-gray-400" />
                    </div>
                </div> */}

        {/* Icons and Profile */}
        <div className="flex items-center space-x-6">
          <button className="relative">
            <FaBell className="text-2xl" />
            <span className="absolute top-0 right-0 h-3 w-3 bg-red-600 rounded-full"></span>
          </button>
          <div className="flex items-center space-x-2">
            <FaUserCircle className="text-3xl" />
            <span>Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
