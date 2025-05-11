import ItemList from "./ItemsList";

const RestaurantCategory = ({ data }) => {
  return (
    <div>
      <div className="categoryStyle">
        <span>
          {data.title} ({data.itemCards.length})
        </span>
        <span> ⬇️</span>
      </div>
      <ItemList items={data.itemCards} />
    </div>
  );
};

export default RestaurantCategory;
