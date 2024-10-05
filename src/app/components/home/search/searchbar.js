import { motion } from 'framer-motion';

const SearchBar = () => {
  return (
    <div className="relative w-80 md:w-96 flex flex-row mt-10">
      <motion.input
        type="text"
        className="w-full p-4 pl-10 h-14 text-gray-900 bg-white border border-gray-300 rounded-full shadow-lg focus:ring-2 focus:ring-gray-400 focus:outline-none transition-all duration-300 ease-in-out"
        placeholder="Search for courses or topics..."
        initial={{ scale: 1 }}
        whileFocus={{ scale: 1.02 }}
      />
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-4 text-gray-400 hover:text-black transition-colors"
        aria-label="search icon"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"
          />
        </svg>
      </button>
      <motion.button
        className="absolute right-0 top-1/2 h-14 w-[8rem] transform -translate-y-1/2 bg-black text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-gray-800 transition-colors focus:outline-none"
      
      >
        Search
      </motion.button>
    </div>
  );
};

export default SearchBar;
