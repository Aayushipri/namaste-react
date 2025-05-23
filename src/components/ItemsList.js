import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="itemContainer">
          <div>
            <div>
              <span>{item.card.info.name}</span>
              <span>
                ₹{(item.card.info.defaultPrice || item.card.info.price) / 100}
              </span>
            </div>

            <p>{item.card.info.description}</p>
          </div>
          <div>
            <img
              src={CDN_URL + item.card.info.imageId}
              width="120px"
              height="90px"
            />
            <button>Add</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
