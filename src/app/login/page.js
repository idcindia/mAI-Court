"use client";
import Link from "next/link";
import { useState } from "react";
import IsLoadingHOC from "../components/common/isLoadingHOC";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import { saveUser, setAccessToken } from '../Redux/Reducers/authSlice'; 
import { useDispatch } from "react-redux";


const LoginPage = (props) => {
  const { setLoading } = props;
  const router = useRouter();
  const dispatch = useDispatch(); 

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { email, password } = formData;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      setLoading(false);
      console.log("Submitting login data to:", process.env.NEXT_PUBLIC_API_URL);


      if (response.ok) {
        toast.success("Login successful!");
        dispatch(saveUser(data.user));
        dispatch(setAccessToken(data.token)); 
        router.push("/"); 
      } else {
        toast.error(data.message || "Invalid credentials");
      }
    } catch (err) {
      setLoading(false);
      toast.error("Something went wrong! Please try again later.");
    }
  };

  return (
    <div className="h-[45rem] flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/Assests/web4.jpg')" }}>
      <div className="bg-black bg-opacity-50 lg:w-[40%] p-8 rounded-lg shadow-lg backdrop-blur-md">
        <h2 className="text-3xl font-bold mb-4 text-white text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Form fields */}
          <div>
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="username@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-slate-5 bg-opacity-40 text-black outline-none focus:ring-2 focus:ring-blue-400"
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
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-slate-5 bg-opacity-40 text-black outline-none focus:ring-2 focus:ring-blue-400"
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
          <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 48 48"
                className="w-5 h-5 mr-2"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.746,2.105-2.024,3.91-3.685,5.236c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.943,38.76,44,33.416,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
          Google
        </button>

        <div className="text-center mt-4 text-white">
          Don’t have an account?
         
            <Link href="/register" className="text-blue-300 hover:text-yellow-500 ml-2">Register</Link>  
           
        </div>
      </div>
    </div>
  );
};

export default IsLoadingHOC(LoginPage);
