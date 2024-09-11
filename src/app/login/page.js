"use client";

import Link from "next/link";

const SignupForm = ({ userType }) => {
  return (
    <div className="h-[45rem] flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/Assests/signup-bg.jpg')" }}>
      <div className="bg-black bg-opacity-50 lg:w-[50%] p-8 rounded-lg shadow-lg backdrop-blur-md">
        <h2 className="text-3xl font-bold mb-4 text-white text-center">Sign Up for {userType}</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-md bg-slate-5 bg-opacity-40 text-white outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="username@gmail.com"
              className="w-full px-4 py-2 rounded-md bg-slate-5 bg-opacity-40 text-white outline-none focus:ring-2 focus:ring-blue-400"
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
              className="w-full px-4 py-2 rounded-md bg-slate-5 bg-opacity-40 text-white outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* User-specific form fields can be added here */}
          {userType === "Advocate" && (
            <div>
              <label className="block text-white text-sm font-bold mb-2" htmlFor="lawFirm">
                Law Firm
              </label>
              <input
                type="text"
                id="lawFirm"
                placeholder="Enter your law firm name"
                className="w-full px-4 py-2 rounded-md bg-slate-5 bg-opacity-40 text-white outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md text-lg transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

const LoginPage = () => {
  return (
    <div className="h-[45rem] flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/Assests/web4.jpg')" }}>
      <div className="bg-black bg-opacity-50 lg:w-[40%] p-8 rounded-lg shadow-lg backdrop-blur-md">
        <h2 className="text-3xl font-bold mb-4 text-white text-center">Login</h2>
        <form className="space-y-4">
          {/* Form fields */}
          <div>
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="username@gmail.com"
              className="w-full px-4 py-2 rounded-md bg-slate-5 bg-opacity-40 text-white outline-none focus:ring-2 focus:ring-blue-400"
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
              className="w-full px-4 py-2 rounded-md bg-slate-5 bg-opacity-40 text-white outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex justify-between items-center">
            <label className="text-sm text-white">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="#" className="text-sm text-blue-500 hover:text-yellow-500">Forgot Password?</a>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md text-lg transition duration-300"
          >
            Sign in
          </button>
        </form>

        <div className="text-center text-white mt-4">or continue with</div>
        <button className="w-full py-2 mt-2 bg-white hover:bg-slate-500 hover:text-white text-black flex items-center justify-center rounded-md  transition duration-300">
          {/* Google Button */}
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" className="mr-2">
            {/* SVG path */}
          </svg>
          Google
        </button>

        <div className="text-center mt-4 text-white">
          Don’t have an account?
          <div className="text-blue-500 flex gap-4 pt-4">
            <Link href="/general" className="hover:text-blue-800">General</Link>  
            <Link href="/advocate" className="hover:text-blue-800">Advocate</Link>  
            <Link href="/corporateClient" className="hover:text-blue-800">Corporate Client</Link>  
            <Link href="/legalProfessional" className="hover:text-blue-800">Legal Professional</Link>  
            <Link href="/partnerInstitution" className="hover:text-blue-800">Partner Institution</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
