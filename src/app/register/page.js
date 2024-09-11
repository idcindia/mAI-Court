"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const { username, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess("Registration successful!");
      } else {
        setError(data.message || "Something went wrong.");
      }
    } catch (error) {
      setError("Failed to register. Please try again later.");
    }
  };

  return (
    <div
      className="relative h-screen w-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url('/Assests/ntwater.jpeg')` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative lg:w-[900px] mt-10 h-[500px] bg-black bg-opacity-70 flex rounded-lg overflow-hidden shadow-lg">
        {/* Image section with scales icon */}
        <div className="w-1/2 flex items-center justify-center p-8 border-r-2 border-gray-500">
        <p className="absolute top-20 text-4xl text-yellow-600 font-semibold">
            धर्मोऽपि जायते न्यायः
          </p>
          <div className=" flex mt-20 items-center justify-center">
          <img
            src="/Assests/scales.png" 
            alt="Scales of Justice"
            className=" lg:w-[16rem] "
          />
          </div>
        
        </div>

        {/* Form section */}
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-2xl font-bold text-center text-white">Create Account</h1>
          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && <p className="text-green-500 text-center">{success}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-400"
              >
                Full Name:
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-400"
              >
                Email:
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-400"
              >
                Password:
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-400"
              >
                Confirm Password:
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Terms and Conditions Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                required
                className="mr-2"
              />
              <label
                htmlFor="terms"
                className="text-sm text-gray-400"
              >
                I have read and agreed to the{" "}
                <a href="/privacy-policy" className="text-blue-500">
                  Terms of Service and Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700"
            >
              Create Account
            </button>
          </form>

          {/* Social signup buttons */}
          {/* <div className="mt-4 flex items-center justify-between">
            <button className="flex items-center w-1/2 justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm">
              <img src="/Assests/google-icon.png" alt="Google" className="w-5 h-5 mr-2" />
              Signup with Google
            </button>
            <button className="flex items-center w-1/2 justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm">
              <img src="/Assests/facebook-icon.png" alt="Facebook" className="w-5 h-5 mr-2" />
              Signup with Facebook
            </button>
          </div> */}

          {/* Login link */}
          <p className="text-center mt-2 text-gray-400">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
