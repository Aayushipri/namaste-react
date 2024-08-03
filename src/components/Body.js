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

  useEffect(() => {
    const onScroll = () => {
      const threshold = 300;
      const currentHeightAfterScroll = window.scrollY + window.innerHeight;

      if (document.body.scrollHeight - threshold <= currentHeightAfterScroll) {
        console.log("user is reaching the bottom , please load more data.");
        fetchDataUponScroll();
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const fetchDataUponScroll = async () => {
    const body = {
      filters: {},
      lat: 12.9351929,
      long: 77.62448069999999,
      nextOffset: "CJhlELQ4KID4r7L2g5aLdjCnEzgD",
      page_type: "page_type",
      seo_params: {
        seoUrl: "https://www.swiggy.com/",
        pageType: "FOOD_HOMEPAGE",
        apiName: "FoodHomePage",
      },
      widgetOffset: {
        NewListingView_category_bar_chicletranking_TwoRows: "",
        NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
        Restaurant_Group_WebView_PB_Theme: "",
        Restaurant_Group_WebView_SEO_PB_Theme: "",
        collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "9",
        inlineFacetFilter: "",
        restaurantCountWidget: "",
      },
      _csrf: "xsxVKzrM0EnZ-DmUdMwZ4HFTJ1HD34bCOozKIA5M",
    };
    // const response = await fetch(
    //   "https://www.corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/update",
    //   {
    //     method: "POST",
    //     body: JSON.stringify(body),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );

    // const response = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );

    // const infiniteScrollData = await response.json();
    // restaurantCards.push(
    //   infiniteScrollData?.data?.cards[1]?.card?.card?.gridElements
    //     ?.infoWithStyle?.restaurants
    // );

    // setRestaurantCards(restaurantCards);
    // filteredRestaurants.push(
    //   infiniteScrollData?.data?.cards[1]?.card?.card?.gridElements
    //     ?.infoWithStyle?.restaurants
    // );
    // setFilteredRestaurants(filteredRestaurants);
  };

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

  if (restaurantCards && restaurantCards.length === 0) {
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
        {filteredRestaurants &&
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
          ))}
      </div>
    </div>
  );
};

export default Body;
