import React from "react";
import ShimmerUI from "./Shimmer";
import { useParams } from "react-router-dom";
import useFetchRestaurantApiDetails from "../utils/useFetchRestaurantApiDetails";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useFetchRestaurantApiDetails(resId);

  if (!resInfo) {
    return <ShimmerUI />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards ||
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards ||
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card
      ?.itemCards;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>
        {cuisines.join(",")}-{costForTwoMessage}
      </h3>

      {categories.map((category) => (
        <RestaurantCategory key={category} data={category.card.card} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
