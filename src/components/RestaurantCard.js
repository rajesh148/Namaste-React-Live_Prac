import { useContext } from "react";
import { IMG_CDN_URL } from "../config";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  const { user } = useContext(UserContext);
  return (
    <div className="w-56 p-2 bg-orange-200 shadow-md">
      <img alt="card!" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="text-lg font-semibold">{name}</h2>
      <h3>{cuisines?.join(", ")}</h3>
      <h4>{lastMileTravelString}</h4>
      <h4 className="font-bold">
        {user.name} - {user.email}
      </h4>
    </div>
  );
};

export default RestaurantCard;
