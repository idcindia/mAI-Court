// components/Features.js
import { FaHandshake, FaShieldAlt, FaGem, FaUsers } from 'react-icons/fa';

const Features = () => {
  return (
    <div className="relative flex flex-col lg:mb-[10rem]  items-center lg:w-full h-auto mt-12 mb-16 px-4">
      {/* Background Image */}
      <div className="relative lg:w-[50rem] h-[15rem] sm:h-[20rem] md:w-[30rem] md:h-[25rem] rounded-lg overflow-hidden">
        <img
          src="/Assests/web2.jpg"
          alt="City at Night"
          className="object-cover w-full h-full rounded-lg border border-slate-200"
        />
      </div>

      {/* Text and Icons Section */}
      <div className="absolute top-1/2 lg:mt-[12rem] transform -translate-y-1/2 text-center bg-gray-200 lg:w-[70%] md:w-[80%] border border-yellow-500 rounded-2xl p-4 md:p-6 shadow-lg">
        <h1 className="text-lg md:text-xl font-semibold text-black mb-4">
          We are Trying to make Everyday Life Easier.
        </h1>

        {/* Clickable Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {/* Trust */}
          <a href="#trust" className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
            <FaHandshake className="text-yellow-500 h-10 w-10 mb-2" />
            <p className="font-semibold text-yellow-500 text-sm">Trust</p>
          </a>

          {/* Safety */}
          <a href="#safety" className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
            <FaShieldAlt className="text-pink-500 h-10 w-10 mb-2" />
            <p className="font-semibold text-pink-500 text-sm">Safety</p>
          </a>

          {/* Quality */}
          <a href="#quality" className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
            <FaGem className="text-green-500 h-10 w-10 mb-2" />
            <p className="font-semibold text-green-500 text-sm">Quality</p>
          </a>

          {/* Community */}
          <a href="#community" className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
            <FaUsers className="text-blue-500 h-10 w-10 mb-2" />
            <p className="font-semibold text-blue-500 text-sm">Community</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Features;
