"use client";

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex items-center justify-center h-64 w-64">
        <h1 className="absolute text-3xl font-bold text-gray-800">Coming Soon</h1>
        {/* <svg
          className="animate-spin h-full w-full text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.96 7.96 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg> */}
      </div>
      <p className="text-lg text-gray-600 mb-8 mt-2">
        We are working hard to bring this event page to you. Stay tuned!
      </p>
      <button
        onClick={() => (window.location.href = "/")}
        className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg text-lg shadow hover:bg-blue-600"
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default ComingSoon;
