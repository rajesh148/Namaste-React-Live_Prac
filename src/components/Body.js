import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import useAllRestaurantsInfo from "../utils/useAllRestaurantsInfo";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [allRestaurants, filteredRestaurants, searchText] =
    useAllRestaurantsInfo();

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1> You are offline</h1>;
  }

  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <h1>{filteredRestaurants.length} Restaurants for you!!</h1>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="search-input"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              //need to filter the data
              const data = filterData(searchText, allRestaurants);
              console.log("Data " + data);
              setFilteredRestaurants(data);
              // update the state - restaurants
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.length === 0 ? (
          <h1>No data!!</h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link
                key={restaurant?.data?.id}
                to={"/restaurant/" + restaurant?.data?.id}
              >
                <RestaurantCard {...restaurant?.data} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
