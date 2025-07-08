import { useContext } from "react";
import { IMG_CDN_URL } from "../config";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  avgRating,
  costForTwo,
  totalRatingsString,
  sla,
}) => {
  const { user } = useContext(UserContext);

  console.log("coul", cloudinaryImageId);
  return (
    <div className="w-56 h-full bg-white shadow-lg rounded-xl p-4 flex flex-col justify-between border border-gray-100 hover:shadow-xl hover:scale-[1.02] transition-all duration-200 ease-in-out">
      <img
        alt="restaurant"
        src={IMG_CDN_URL + cloudinaryImageId}
        className="w-full h-36 object-cover rounded-md mb-3"
      />

      <div className="flex-grow">
        {/* 🍽️ Restaurant Name */}
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>

        {/* ⭐ Rating + Total Ratings */}
        <div className="flex items-center justify-between mt-1 mb-1">
          <span
            className={`text-xs font-semibold text-white px-2 py-[2px] rounded ${
              avgRating >= 4
                ? "bg-green-500"
                : avgRating >= 3
                ? "bg-yellow-500"
                : "bg-red-500"
            }`}
          >
            ⭐ {avgRating}
          </span>
          <span className="text-[11px] text-gray-500">
            {totalRatingsString}
          </span>
        </div>

        {/* 🥗 Cuisines */}
        <h3
          className="text-sm text-gray-600 line-clamp-2"
          title={cuisines?.join(", ")}
        >
          {cuisines?.join(", ")}
        </h3>

        {/* 📍 Distance */}
        <h4 className="text-sm text-gray-500 mt-1">{lastMileTravelString}</h4>

        {/* 💸 Cost + 🚚 Delivery Time */}
        <div className="flex items-center justify-between text-sm text-gray-700 font-medium mt-1">
          <span>{costForTwo}</span>
          <span className="text-gray-500 text-xs">
            {sla?.deliveryTime} mins
          </span>
        </div>
      </div>

      {/* 👤 User Info */}
      <div className="pt-2 text-xs font-semibold text-orange-500">
        {user.name} · {user.email}
      </div>
    </div>
  );
};

export default RestaurantCard;
