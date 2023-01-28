import React, { useEffect, useState } from "react";
import { FETCH_RESTAURENT_MENU_ITEM_URL } from "../config";

const useRestaurantInfo = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getMenuCardsData();
  }, []);

  async function getMenuCardsData() {
    const data = await fetch(FETCH_RESTAURENT_MENU_ITEM_URL + id);

    const json = await data.json();
    console.log(json?.data);
    setRestaurant(json?.data);
  }

  return restaurant;
};

export default useRestaurantInfo;
