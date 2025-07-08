import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
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

  // Inside your Body component:
  const location = useLocation();

  useEffect(() => {
    // Reset everything when navigated to "/"
    if (location.pathname === "/") {
      setSearchText("");
      setFilteredRestaurants(allRestaurants); // restore all data
      setVisibleCount(9); // reset visible items
    }
  }, [location.pathname]);

  // 1. Set filteredRestaurants when allRestaurants loads
  useEffect(() => {
    if (allRestaurants.length > 0) {
      setFilteredRestaurants(allRestaurants);
      setDisplayedRestaurants(allRestaurants.slice(0, visibleCount));
    }
  }, [allRestaurants]);

  // 2. Load more on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCount((prev) => prev + 9);
        }
      },
      { rootMargin: "100px" }
    );
    const currentRef = loaderRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  // 3. Update displayedRestaurants when visibleCount or filteredRestaurants changes
  useEffect(() => {
    setDisplayedRestaurants(filteredRestaurants.slice(0, visibleCount));
  }, [filteredRestaurants, visibleCount]);

  // 4. Search logic
  const handleSearch = () => {
    const data = filterData(searchText, allRestaurants);
    setFilteredRestaurants(data);
    setVisibleCount(9);
  };

  if (!isOnline)
    return <h1 className="text-center text-red-500">🚫 You are offline</h1>;
  if (allRestaurants.length === 0) return <Shimmer />;

  return (
    <>
      {/* 🔍 Search */}
      <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-white shadow-md">
        <h1 className="text-xl md:text-3xl font-medium mb-2 md:mb-0">
          {filteredRestaurants.length} Restaurants for you!!
        </h1>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="sm:w-30 sm:p-2 md:w-96 h-10 p-2 border border-gray-300 rounded-md"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="p-2 mx-3 bg-blue-500 hover:bg-blue-600 rounded-md w-28 text-white font-medium"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      {/* 🧾 Cards */}
      <div className="flex flex-wrap justify-center p-5 gap-9">
        {displayedRestaurants.length === 0 ? (
          <h1 className="text-xl text-gray-500">No data!!</h1>
        ) : (
          displayedRestaurants.map((restaurant) => (
            <Link
              key={restaurant?.info?.id}
              to={"/restaurant/" + restaurant?.info?.id}
            >
              <RestaurantCard user={user} {...restaurant?.info} />
            </Link>
          ))
        )}
      </div>

      <div ref={loaderRef} className="w-full h-10" />
    </>
  );
};

export default Body;
