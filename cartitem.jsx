import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeFromCart } from "./redux/CartSlice";
import { Link } from "react-router-dom";

function CartItem() {
  const { items } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <h2>Shopping Cart</h2>

      {items.map(item => (
        <div key={item.id}>
          <img src={item.image} width="100" />
          <h4>{item.name}</h4>
          <p>${item.price}</p>

          <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(increaseQty(item.id))}>+</button>

          <p>Total: ${item.price * item.quantity}</p>

          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Delete
          </button>
        </div>
      ))}

      <h3>Grand Total: ${total}</h3>

      <button onClick={() => alert("Coming Soon")}>
        Checkout
      </button>

      <Link to="/plants">
        <button>Continue Shopping</button>
      </Link>
    </>
  );
}

export default CartItem;
