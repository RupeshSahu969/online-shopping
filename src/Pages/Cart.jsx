import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const [cartItem, setCartItems] = useState([]);

  useEffect(() => {
    getCartData();
  }, []);

  const getCartData = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Login required!");
      return;
    }

    try {
      const res = await axios.get("http://localhost:8080/cart", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.status === 200 && Array.isArray(res.data.items)) {
        setCartItems(res.data.items);
      } else {
        toast.error("Failed to load cart.");
      }
    } catch (error) {
      toast.error("Error fetching cart.");
    }
  };

  const updateQuantity = async (productId, quantity) => {
    const token = localStorage.getItem("token");
    try {
      await axios.patch(
        "http://localhost:8080/cart/update",
        { productId, quantity },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      getCartData();
    } catch (error) {
      toast.error("Failed to update quantity");
    }
  };

  const removeItem = async (productId) => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete("http://localhost:8080/cart/remove", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data: { productId },
      });
      getCartData();
    } catch (error) {
      toast.error("Failed to remove item");
    }
  };

  const handleOrder = () => {
    toast.success("Order placed successfully!");
    // TODO: add real order logic
  };

  const totalAmount = cartItem.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const totalQty = cartItem.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🛒 Your Cart</h1>

      {cartItem.length === 0 ? (
        <p className="text-center text-gray-500">No items in cart.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Side: Cart Items */}
          <div className="md:col-span-2 space-y-4">
            {cartItem.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between p-4
                 bg-white rounded-lg shadow-md transition hover:shadow-lg"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-25 h-20 object-cover rounded-md"
                />

                <div className="flex-1 ml-4">
                  <h4 className="text-lg font-semibold">{item.product.name}</h4>
                  <p className="text-gray-600">₹{item.product.price}</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      updateQuantity(item.product._id, item.quantity - 1)
                    }
                    disabled={item.quantity === 1}
                    className="px-2 py-1 bg-black-100 rounded hover:bg-gray-200"
                  >
                    −
                  </button>
                  <span className="text-md">{item.quantity}</span>
                  <button
                    onClick={() =>
                      updateQuantity(item.product._id, item.quantity + 1)
                    }
                    className="px-2 py-1 bg-black-100 rounded hover:bg-gray-200"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeItem(item.product._id)}
                  className="ml-4 text-white bg-red-800  hover:bg-red font-semibold"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Right Side: Summary */}
          <div className="bg-white p-6 rounded-lg shadow-lg h-fit sticky top-20">
            <h2 className="text-xl font-semibold mb-4">🧾 Order Summary</h2>
            <p className="mb-2">Total Items: <strong>{totalQty}</strong></p>
            <p className="mb-4">Total Price: <strong>₹{totalAmount}</strong></p>
            <button
              onClick={handleOrder}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Place Order
            </button>
          </div>
        </div>
      )}

      <ToastContainer position="top-center" autoClose={3000} theme="colored" />
    </div>
  );
};

export default Cart;
