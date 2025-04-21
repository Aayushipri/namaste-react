import React from "react";
import ShimmerUI from "./Shimmer";
import { useParams } from "react-router-dom";
import useFetchRestaurantApiDetails from "../utils/useFetchRestaurantApiDetails";

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

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>
        {cuisines.join(",")}-{costForTwoMessage}
      </h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item}>
            {item.card.info.name} - {"Rs."} {item.card.info.price / 100}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
