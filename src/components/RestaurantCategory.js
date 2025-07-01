import { useState } from "react";
import ItemList from "./ItemsList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
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
