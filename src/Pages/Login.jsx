import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("please fill all the fields");
      return;
    }

    const payload = {
      email, password,
    }

    try {
      const res = await axios.post("http://localhost:8080/user/login", payload);
      if (res.status === 200) {
        toast.success(res.data?.message)
      }
      else {
        toast.error(res.data?.message || "Login Failed");
      }

    }
    catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Login failed. Try again.");
    }

  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center px-4">
      <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-2xl p-8 sm:p-10 w-full max-w-md transition-all duration-300">

        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-700 mb-8">
          Welcome Back 👋
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg text-lg font-semibold shadow-md transition duration-200"
            >
              Log In
            </button>
          </div>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <a
              href="/register"
              className="text-blue-600 hover:underline font-medium"
            >
              Register
            </a>
          </p>
        </form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        theme="colored"
      />
    </div>
  );
};

export default Login;
