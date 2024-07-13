import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./Shimmer";

const Body = () => {
  const [restaurantCards, setRestaurantCards] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const results = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await results.json();
    setRestaurantCards(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onFilterButtonClick = () => {
    const filteredRestaurants = restaurantCards.filter((item) => {
      return item.info.avgRating > 4.3;
    });

    setFilteredRestaurants(filteredRestaurants);
  };

  if (restaurantCards.length === 0) {
    return <ShimmerUI />;
  }

  return (
    <div className="body">
      <div className="searchFilter">
        <div>
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />{" "}
          <button
            onClick={() => {
              const filteredRestaurantCards = restaurantCards.filter((item) =>
                item.info.name.toLowerCase().includes(searchValue.toLowerCase())
              );

              setFilteredRestaurants(filteredRestaurantCards);
            }}
          >
            Search
          </button>
        </div>

        <button className="filter" onClick={onFilterButtonClick}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
