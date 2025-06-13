import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {

    const [name, setname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

const navigate=useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !password || !phone) {
            toast.error("Please fill all the fields");
            return;
        }

        const payload = { name, email, password, phone };

        try {
            const res = await axios.post("http://localhost:8080/user/", payload);

            if (res.status === 201) {
                toast.success(res.data?.message || "Registration Successful");

                // Reset fields
                setname("");
                setEmail("");
                setPassword("");
                setPhone("");

                navigate("/login")
            } else {
                toast.error(res.data?.message || "Registration Failed");
            }
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.message || "Registration failed. Try again.");
        }
    };



    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 mt-10">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-semibold text-center text-blue-600 mb-6">
                    Create an Account
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setname(e.target.value)}
                            placeholder="John Doe"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Phone</label>
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+1 123 456 7890"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Phone */}


                    {/* Submit */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300 text-base sm:text-lg font-medium"
                        >
                            Register
                        </button>
                    </div>
                </form>
                <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    theme="colored"
                />
            </div>
        </div>
    );
};

export default Register;
