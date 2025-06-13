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

  // Add to Cart handler
  const handleAddToCart = async (productId) => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You need to login first!");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:8080/cart/add",
        { productId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (res.status === 200) {
        toast.success("Added to cart!");
      } else {
        toast.error("Failed to add to cart");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to add to cart");
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-12">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-700 mb-10 text-center">
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out overflow-hidden flex flex-col"
          >
            <img
              src={
                item.image?.startsWith("http")
                  ? item.image
                  : `http://localhost:8080${item.image}`
              }
              alt={item.name}
              className="w-full h-80 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-lg font-semibold text-gray-800 mb-1 truncate">
                {item.name}
              </h2>

              <p className="text-sm text-gray-500 mb-2 line-clamp-2">
                {item.description}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-blue-600 font-bold text-base">
                  ₹{item.price}
                </span>
                <button 
                 onClick={() => handleAddToCart(item._id)}
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1.5 rounded-md transition">
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
