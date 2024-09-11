"use client";
import Image from "next/image";
import { useState } from "react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    role: "general",
    bio: "", // For legalProfessional
    experience: "", // For legalProfessional
    companyName: "", // For corporateClient
    gstNumber: "", // For corporateClient
    institutionName: "", // For partnerInstitution
    institutionType: "", // For partnerInstitution
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

    const {
      name,
      email,
      phoneNumber,
      password,
      confirmPassword,
      role,
      bio,
      experience,
      companyName,
      gstNumber,
      institutionName,
      institutionType,
    } = formData;

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/user/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phoneNumber,
          password,
          confirmPassword,
          role,
          ...(role === "legalProfessional" && { bio, experience }),
          ...(role === "corporateClient" && { companyName, gstNumber }),
          ...(role === "partnerInstitution" && { institutionName, institutionType }),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Account created successfully!");
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          password: "",
          confirmPassword: "",
          role: "general",
          bio: "",
          experience: "",
          companyName: "",
          gstNumber: "",
          institutionName: "",
          institutionType: "",
        });
      } else {
        setError(data.message || "Failed to register user.");
      }
    } catch (err) {
      console.log(err, "errrrrrrrrrrr")
      setError("Something went wrong! Please try again later.");
    }
  };

  return (
    <div
      className="relative h-[45rem] w-[100%] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url('/Assests/ntwater.jpeg')` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative lg:w-[900px] mt-20 bg-black bg-opacity-70 flex rounded-lg overflow-hidden shadow-lg">
        <div className="w-1/2 flex items-center justify-center p-8 border-r-2 border-gray-500">
          <p className="absolute top-[10rem] text-4xl text-yellow-600 font-semibold">
            धर्मोऽपि जायते न्यायः
          </p>
          <div className="flex mt-20 items-center justify-center">
            <Image
              src="/Assests/scales.png"
              alt="Scales of Justice"
              width={256}
              height={256} // Adjusted width and height
              className="lg:w-[16rem]"
            />
          </div>
        </div>


        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-2xl font-bold text-center text-white">Create Account</h1>
          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && <p className="text-green-500 text-center">{success}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                Name:
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Enter your full name"
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>

        
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

            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-400">
                Phone Number:
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                placeholder="Enter your phone number"
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>

        
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

            {formData.role === "legalProfessional" && (
              <>
                <div>
                  <label htmlFor="bio" className="block text-sm font-medium text-gray-400">
                    Bio:
                  </label>
                  <input
                    type="text"
                    name="bio"
                    value={formData.bio}
                    placeholder="Enter your bio"
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-400">
                    Experience (years):
                  </label>
                  <input
                    type="number"
                    name="experience"
                    value={formData.experience}
                    placeholder="Enter your experience"
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  />
                </div>
              </>
            )}

            {formData.role === "corporateClient" && (
              <>
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-400">
                    Company Name:
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    placeholder="Enter your company name"
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div>
                  <label htmlFor="gstNumber" className="block text-sm font-medium text-gray-400">
                    GST Number:
                  </label>
                  <input
                    type="text"
                    name="gstNumber"
                    value={formData.gstNumber}
                    placeholder="Enter your GST number"
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  />
                </div>
              </>
            )}

  
            {formData.role === "partnerInstitution" && (
              <>
                <div>
                  <label htmlFor="institutionName" className="block text-sm font-medium text-gray-400">
                    Institution Name:
                  </label>
                  <input
                    type="text"
                    name="institutionName"
                    value={formData.institutionName}
                    placeholder="Enter your institution name"
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div>
                  <label htmlFor="institutionType" className="block text-sm font-medium text-gray-400">
                    Institution Type:
                  </label>
                  <input
                    type="text"
                    name="institutionType"
                    value={formData.institutionType}
                    placeholder="Enter the type of your institution"
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  />
                </div>
              </>
            )}

            <div>
              <button
                type="submit"
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-md shadow-lg"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
