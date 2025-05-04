import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    name: resName,
    cuisines,
    avgRatingString,
    sla,
    cloudinaryImageId,
    costForTwo,
  } = resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="food-image"
        className="res-logo"
      />
      <h3>{resName}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} minutes est. time</h4>
    </div>
  );
};

export const withOpenedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Open</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
