import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:8080/product/");
      if (res.status === 200) {
        setData(res.data.products);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch products");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-3 sm:px-6 lg:px-10">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-6 text-center">
        Our Products
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {data.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 overflow-hidden"
          >
            <img
              src={
                item.image?.startsWith("http")
                  ? item.image
                  : `http://localhost:8080${item.image}`
              }
              alt={item.name}
              className="w-full h-40 sm:h-48 object-cover"
            />
            <div className="p-3 sm:p-4">
              <h2 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-1 truncate">
                {item.name}
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mb-2 truncate">
                {item.description}
              </p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-blue-600 font-bold text-sm sm:text-base">
                  ₹{item.price}
                </span>
                <button className="bg-blue-600 hover:bg-blue-700 text-white hover:text-white text-xs sm:text-sm px-2 py-1 rounded transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ToastContainer position="top-center" autoClose={3000} theme="colored" />
    </div>
  );
};

export default Home;
