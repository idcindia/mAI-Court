"use client";

const LoginPage = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/Assests/web1.jpg')" }}>
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
              className="w-full px-4 py-2 rounded-md bg-slate-5 bg-opacity-40 text-white outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
              Phone Numer 
            </label>
            <input
              type="phone number"
              id="phone numer"
              placeholder="phone number"
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
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" className="mr-2">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
          </svg>
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
