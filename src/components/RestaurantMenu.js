import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import MenuItem from "./MenuItem";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getMenuCardsData();
  }, []);

  async function getMenuCardsData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=16.5061743&lng=80.6480153&menuId=" +
        id
    );
    const json = await data.json();
    console.log(json?.data);
    setRestaurant(json?.data);
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div className="header-menu">
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <div className="item-details">
          <h2 className="restaurant-name">{restaurant?.name}</h2>
          <div>{restaurant?.cuisines?.join(", ")}</div>
          <div>
            {restaurant?.locality}, {restaurant?.area}
          </div>
          <span>Rating: {restaurant?.avgRating} | </span>
          <span>{restaurant?.costForTwoMsg}</span>
        </div>
      </div>
      <div className="menu-items">
        {Object.values(restaurant?.menu?.items).map((restaurant, index) => {
          return <MenuItem {...restaurant} key={restaurant.id} />;
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
