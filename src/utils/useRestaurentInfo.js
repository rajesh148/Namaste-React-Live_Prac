import { useEffect, useState } from "react";

const useRestaurentInfo = (id) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    getRestaurantData();
  }, []);

  const getRestaurantData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.836010552259113&lng=80.22676896303892&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();

    const restaurantData = json?.data?.cards?.find(
      (card) => card?.card?.card?.info
    )?.card?.card?.info;

    const menuItems =
      json?.data?.cards
        ?.find((card) => card?.groupedCard?.cardGroupMap?.REGULAR)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.flatMap(
          (c) => c?.card?.card?.itemCards || []
        )
        ?.map((item) => item.card.info) || [];

    setRestaurantInfo({
      info: restaurantData,
      menu: menuItems,
    });
  };

  return restaurantInfo;
};

export default useRestaurentInfo;
