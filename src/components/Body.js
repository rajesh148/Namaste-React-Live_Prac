import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}
const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    //API CALLS
    console.log("useEffect()");
    getRestaurants();
  }, []);
  console.log("render()");
  console.log(filteredRestaurants);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.5061743&lng=80.6480153&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json.data?.cards[2]?.data?.data?.cards);
    console.log(json);
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
