"use client";

import Image from 'next/image';

const LoginPage = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/Assests/law3.jpeg')" }}>
      <div className="bg-black bg-opacity-10 p-8 rounded-lg shadow-lg backdrop-blur-md mt-20">
        <h2 className="text-3xl font-bold mb-4 text-white text-center">Login</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="username@gmail.com"
              className="w-full px-4 py-2 rounded-md bg-gray-800 bg-opacity-40 text-white outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded-md bg-gray-800 bg-opacity-40 text-white outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex justify-between items-center">
            <label className="text-sm text-white">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="#" className="text-sm text-blue-400">Forgot Password?</a>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-lg transition duration-300"
          >
            Sign in
          </button>
        </form>
        <div className="text-center text-white mt-4">or continue with</div>
        <button className="w-full py-2 mt-2 bg-white text-black flex items-center justify-center rounded-md hover:bg-gray-100 transition duration-300">
          <Image
            src="/images/google-logo.png"
            alt="Google Logo"
            width={20}
            height={20}
            className="mr-2"
          />
          Google
        </button>
        <div className="text-center mt-4 text-white">
          Don’t have an account? <a href="#" className="text-blue-400">Register for free</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
