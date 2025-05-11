import { useState } from "react";
import ItemList from "./ItemsList";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems((prev) => !prev);
  };
  return (
    <div>
      <div className="categoryStyle" onClick={handleClick}>
        <span>
          {data.title} ({data.itemCards.length})
        </span>
        <span> ⬇️</span>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
