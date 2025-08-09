import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import useAllRestaurantsInfo from "../utils/useAllRestaurantsInfo";
import useOnline from "../utils/useOnline";

const Body = ({ user }) => {
  const allRestaurants = useAllRestaurantsInfo();
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [displayedRestaurants, setDisplayedRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [visibleCount, setVisibleCount] = useState(9);
  const loaderRef = useRef(null);
  const isOnline = useOnline();
  const location = useLocation();

  // Reset when navigated to "/"
  useEffect(() => {
    if (location.pathname === "/" && allRestaurants.length > 0) {
      setSearchText("");
      setFilteredRestaurants(allRestaurants);
      setVisibleCount(9);
    }
  }, [location.pathname, allRestaurants]);

  // Infinite scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCount((prev) => prev + 9);
        }
      },
      { rootMargin: "100px" }
    );

    const current = loaderRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  // Update displayedRestaurants
  useEffect(() => {
    setDisplayedRestaurants(filteredRestaurants.slice(0, visibleCount));
  }, [filteredRestaurants, visibleCount]);

  const handleSearch = () => {
    const data = filterData(searchText, allRestaurants);
    setFilteredRestaurants(data);
    setVisibleCount(9);
  };

  // Offline check
  if (!isOnline)
    return (
      <h1 className="text-center text-red-500 text-xl mt-8">
        🚫 You are offline
      </h1>
    );

  // Initial loading
  if (allRestaurants.length === 0) return <Shimmer />;

  return (
    <>
      {/* 🔍 Search Bar */}
      <div className="max-w-7xl mx-auto px-5 py-4 flex flex-col md:flex-row justify-between items-center gap-4 bg-white shadow-sm sticky top-[60px] z-40">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          {filteredRestaurants.length} Restaurants for you!
        </h2>

        <div className="flex w-full md:w-auto items-center gap-3">
          <input
            type="text"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full md:w-80 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
          >
            Search
          </button>
        </div>
      </div>

      {/* 🧾 Restaurant Cards */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 p-6">
        {displayedRestaurants.length === 0 ? (
          <h1 className="text-xl text-gray-500 text-center mt-10">
            😕 No matching restaurants found.
          </h1>
        ) : (
          displayedRestaurants.map((restaurant) => (
            <Link
              key={restaurant?.info?.id}
              to={`/restaurant/${restaurant?.info?.id}`}
              className="hover:scale-105 transition-transform duration-200"
            >
              <RestaurantCard user={user} {...restaurant?.info} />
            </Link>
          ))
        )}
      </div>

      {/* 👇 Scroll loader indicator */}
      <div ref={loaderRef} className="h-10 text-center text-sm text-gray-400">
        {displayedRestaurants.length > 0 &&
        displayedRestaurants.length < filteredRestaurants.length
          ? "Loading more restaurants..."
          : ""}
      </div>
    </>
  );
};

export default Body;
