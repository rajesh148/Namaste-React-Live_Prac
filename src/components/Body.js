import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import useAllRestaurantsInfo from "../utils/useAllRestaurantsInfo";
import useOnline from "../utils/useOnline";

const Body = ({ user }) => {
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
      <div className="flex justify-evenly p-4 bg-white-100 shadow-md">
        <h1 className="sm:text-xl  md:text-3xl font-medium">
          {filteredRestaurants.length} Restaurants for you!!
        </h1>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="sm:w-30 sm:p-2 md:w-96 h-10 p-2 hover:bg-gray-50"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="p-2 mx-5 bg-blue-400 rounded-md w-28 text-white text-md font-medium"
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
      <div className=" flex flex-wrap p-5 gap-9">
        {filteredRestaurants.length === 0 ? (
          <h1>No data!!</h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link
                key={restaurant?.data?.id}
                to={"/restaurant/" + restaurant?.data?.id}
              >
                <RestaurantCard user={user} {...restaurant?.data} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
