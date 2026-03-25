const plants = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Succulents", image: "img1" },
  ...
];
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./redux/CartSlice";
import { Link } from "react-router-dom";

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const isInCart = (id) => cartItems.some(item => item.id === id);

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">Cart ({cartItems.length})</Link>
      </nav>

      <h2>Plants</h2>

      {["Succulents", "Indoor", "Outdoor"].map(category => (
        <div key={category}>
          <h3>{category}</h3>

          {plants.filter(p => p.category === category).map(p => (
            <div key={p.id}>
              <img src={p.image} width="100" />
              <h4>{p.name}</h4>
              <p>${p.price}</p>

              <button
                onClick={() => dispatch(addToCart(p))}
                disabled={isInCart(p.id)}
              >
                {isInCart(p.id) ? "Added" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

export default ProductList;
