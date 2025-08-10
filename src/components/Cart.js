import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../config";
import { clearCart, removeItem, addItem } from "../utils/store/cartSlice";
import commonImage from "../assets/images/commonFood.jpg"; // ✅ fallback image
import { toast } from "react-toastify";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const fallbackImgUrl =
    typeof commonImage === "string" ? commonImage : commonImage.default;

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + (item.price ? (item.price / 100) * item.quantity : 0),
    0
  );

  const handleClear = () => {
    dispatch(clearCart());
    toast.success("Items cleared successfully!");
  };
  const handleIncrease = (item) => dispatch(addItem(item));
  const handleDecrease = (id) => dispatch(removeItem(id));

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center text-gray-600">
        <p className="text-2xl mb-2">🛒 Your cart is empty</p>
        <p className="text-md">Looks like you haven't added anything yet.</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">🛍️ Your Cart</h2>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
          >
            <div className="flex items-center gap-4">
              <img
                src={
                  item.cloudinaryImageId
                    ? IMG_CDN_URL + item.cloudinaryImageId
                    : fallbackImgUrl
                }
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md"
                onError={(e) => {
                  e.target.onerror = null; // prevent infinite loop
                  e.target.src = fallbackImgUrl;
                }}
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {item.category || item.cuisines?.join(", ")}
                </p>
                <p className="text-sm text-orange-500 font-medium">
                  ₹{(item.price ? item.price / 100 : 0).toFixed(2)} ×{" "}
                  {item.quantity}
                </p>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-2">
              <button onClick={() => dispatch(removeItem(item.id))}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(addItem(item))}>+</button>
            </div>
          </div>
        ))}
      </div>

      {/* Total & Actions */}
      <div className="mt-8 p-4 bg-gray-100 rounded-lg flex flex-col md:flex-row justify-between items-center">
        <div className="text-lg font-semibold text-gray-700 mb-4 md:mb-0">
          Total: ₹{totalAmount.toFixed(2)}
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleClear}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Clear Cart
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
