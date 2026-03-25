import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./redux/CartSlice";
import { Link } from "react-router-dom";

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // ✅ Check if item already in cart
  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  // ✅ Total cart count (dynamic)
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // ✅ FULL DATA (18 plants, 6 per category)
  const plants = [
    // 🌵 Succulents
    { id: 1, name: "Aloe Vera", price: 10, category: "Succulents", image: "https://via.placeholder.com/100" },
    { id: 2, name: "Echeveria", price: 12, category: "Succulents", image: "https://via.placeholder.com/100" },
    { id: 3, name: "Jade Plant", price: 15, category: "Succulents", image: "https://via.placeholder.com/100" },
    { id: 4, name: "Haworthia", price: 11, category: "Succulents", image: "https://via.placeholder.com/100" },
    { id: 5, name: "Sedum", price: 9, category: "Succulents", image: "https://via.placeholder.com/100" },
    { id: 6, name: "Agave", price: 14, category: "Succulents", image: "https://via.placeholder.com/100" },

    // 🪴 Indoor
    { id: 7, name: "Snake Plant", price: 20, category: "Indoor", image: "https://via.placeholder.com/100" },
    { id: 8, name: "Peace Lily", price: 18, category: "Indoor", image: "https://via.placeholder.com/100" },
    { id: 9, name: "Spider Plant", price: 16, category: "Indoor", image: "https://via.placeholder.com/100" },
    { id: 10, name: "Pothos", price: 17, category: "Indoor", image: "https://via.placeholder.com/100" },
    { id: 11, name: "Fiddle Leaf Fig", price: 25, category: "Indoor", image: "https://via.placeholder.com/100" },
    { id: 12, name: "ZZ Plant", price: 22, category: "Indoor", image: "https://via.placeholder.com/100" },

    // 🌸 Outdoor
    { id: 13, name: "Rose", price: 30, category: "Outdoor", image: "https://via.placeholder.com/100" },
    { id: 14, name: "Lavender", price: 28, category: "Outdoor", image: "https://via.placeholder.com/100" },
    { id: 15, name: "Tulip", price: 26, category: "Outdoor", image: "https://via.placeholder.com/100" },
    { id: 16, name: "Sunflower", price: 24, category: "Outdoor", image: "https://via.placeholder.com/100" },
    { id: 17, name: "Daisy", price: 21, category: "Outdoor", image: "https://via.placeholder.com/100" },
    { id: 18, name: "Marigold", price: 19, category: "Outdoor", image: "https://via.placeholder.com/100" },
  ];

  const categories = ["Succulents", "Indoor", "Outdoor"];

  return (
    <div>
      {/* ✅ NAVBAR */}
      <nav style={{ display: "flex", gap: "20px", padding: "10px", background: "#eee" }}>
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </nav>

      <h1 style={{ textAlign: "center" }}>Our Plants</h1>

      {/* ✅ CATEGORY LOOP */}
      {categories.map((category) => (
        <div key={category}>
          <h2>{category}</h2>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div
                  key={plant.id}
                  style={{
                    border: "1px solid #ccc",
                    padding: "10px",
                    width: "150px",
                    textAlign: "center",
                  }}
                >
                  <img src={plant.image} alt={plant.name} />
                  <h4>{plant.name}</h4>
                  <p>${plant.price}</p>

                  {/* ✅ ADD TO CART BUTTON */}
                  <button
                    onClick={() => dispatch(addToCart(plant))}
                    disabled={isInCart(plant.id)}
                  >
                    {isInCart(plant.id) ? "Added" : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
