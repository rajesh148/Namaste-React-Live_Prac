import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../config";
import useRestaurentInfo from "../utils/useRestaurentInfo";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/store/cartSlice";
import { toast } from "react-toastify";

const RestaurantMenu = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const restaurantData = useRestaurentInfo(id);
  const dispatch = useDispatch();

  if (!restaurantData) return <Shimmer />;

  const { info, menu } = restaurantData;

  const handleAddToCart = (item) => {
    console.log(item);

    dispatch(addItem(item));
    toast.success("Item added successfully");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 mt-6">
      {/* Header Section */}
      <div className="flex items-center gap-4 border-b pb-4">
        <img
          className="w-40 h-32 rounded-lg object-cover"
          src={IMG_CDN_URL + info?.cloudinaryImageId}
          alt={info?.name}
        />
        <div>
          <h2 className="text-2xl font-bold">{info?.name}</h2>
          <p className="text-gray-500">{info?.cuisines?.join(", ")}</p>
          <p className="text-sm">{info?.areaName}</p>
          <p className="text-sm">
            ⭐ {info?.avgRating} | {info?.costForTwoMessage}
          </p>
        </div>
        <div>
          <button
            onClick={() => navigate("/")}
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-white bg-orange-600 hover:bg-orange-700 font-medium rounded-md focus:outline-none"
          >
            Go to Home
          </button>
        </div>
      </div>

      <div className="menu-items mt-6 space-y-4">
        <h3 className="text-2xl font-semibold mb-4">Menu</h3>

        {menu.map((item, index) => (
          <div
            key={`${item.id}-${index}}`}
            className="flex justify-between items-start gap-4 border rounded-lg p-4 shadow-sm hover:shadow-md"
          >
            {/* Left: Info */}
            <div className="flex-1">
              <h4 className="font-medium text-base">{item.name}</h4>
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              <p className="text-sm font-semibold mt-2">
                ₹{(item.price || item.defaultPrice) / 100}
              </p>

              {/* ✅ ADD Button */}
              <button
                className="mt-2 px-4 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600"
                onClick={() => handleAddToCart(item)}
              >
                ADD
              </button>
            </div>

            {/* Right: Image */}
            {item.imageId && (
              <img
                src={IMG_CDN_URL + item.imageId}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-md"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
