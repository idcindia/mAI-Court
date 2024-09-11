"use client";
import { useState } from "react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "general", // Default role
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

    const { username, email, phone, password, confirmPassword, role } = formData;

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

   
  };

  return (
    <div
      className="relative h-[52rem] w-[100%] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url('/Assests/ntwater.jpeg')` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative lg:w-[900px] mt-20 bg-black bg-opacity-70 flex rounded-lg overflow-hidden shadow-lg">
        
        <div className="w-1/2 flex items-center justify-center p-8 border-r-2 border-gray-500">
          <p className="absolute top-[10rem] text-4xl text-yellow-600 font-semibold">
            धर्मोऽपि जायते न्यायः
          </p>
          <div className="flex mt-20 items-center justify-center">
            <img src="/Assests/scales.png" alt="Scales of Justice" className="lg:w-[16rem]" />
          </div>
        </div>

        {/* Form Section */}
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-2xl font-bold text-center text-white">Create Account</h1>
          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && <p className="text-green-500 text-center">{success}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name Input */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-400">
                Full Name:
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                placeholder="Enter your full name"
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                Email:
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Enter your email"
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>

            {/* Phone Number Input */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-400">
                Phone Number:
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                placeholder="Enter your phone number"
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-400">
                Password:
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                placeholder="Enter your password"
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>

            {/* Confirm Password Input */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-400">
                Confirm Password:
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                placeholder="Re-enter your password"
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>

            {/* Role Selection Dropdown */}
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-400">
                Role:
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              >
                <option value="general">General</option>
                <option value="legalProfessional">Legal Professional</option>
                <option value="corporateClient">Corporate Client</option>
                <option value="partnerInstitution">Partner Institution</option>
               
              </select>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center">
              <input type="checkbox" id="terms" required className="mr-2" />
              <label htmlFor="terms" className="text-sm text-gray-400">
                I have read and agree to the{" "}
                <a href="/privacy-policy" className="text-blue-500">
                  Terms of Service and Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-yellow-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-yellow-700">
              Create Account
            </button>
          </form>

          {/* Social Signup Buttons */}
          <div className="mt-4">
            <button className="flex items-center w-full justify-center py-2 px-4 border border-gray-300 text-white hover:bg-slate-700 rounded-md shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" className="w-5 h-5 mr-2">
                {/* Google SVG Icon */}
              </svg>
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
