import { useState, useEffect } from "react";

const useAllRestaurantsInfo = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    console.log("Fetching restaurants...");
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.836010552259113&lng=80.22676896303892&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurants =
      // json.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      // json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
      json.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setAllRestaurants(restaurants || []);
    console.log("resttt ", restaurants);
  };

  return allRestaurants;
};

export default useAllRestaurantsInfo;
