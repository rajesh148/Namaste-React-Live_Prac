import React, { useState, useEffect } from "react";

const useAllRestaurantsInfo = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    //API CALLS
    getRestaurants();
  }, []);
  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8459348&lng=80.22652289999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(
      "jsonnnn ",
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // debugger;
    setAllRestaurants(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // setAllRestaurants(json.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  return [allRestaurants, filteredRestaurants, searchText];
};

export default useAllRestaurantsInfo;
