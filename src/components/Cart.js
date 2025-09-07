import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemsList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1>Cart</h1>
      <div>
        <button onClick={handleClearCart}> Clear cart</button>
        {cartItems.length === 0 && (
          <h1>Cart is empty. Add items to the cart.</h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
