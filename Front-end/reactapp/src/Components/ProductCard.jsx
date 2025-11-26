import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ProductCard.css";
import { useLocation, useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

function ProductCard() {
  const [results, setResults] = useState([]);
  const [likedItems, setLikedItems] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query") || "";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = "";

        if (query.trim() === "") {
          url = "http://localhost:8080/api/products";
        } else {
          url = `http://localhost:8080/api/products/search?query=${encodeURIComponent(
            query
          )}`;
        }

        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setResults(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [query]);

  const toggleLike = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const goToDetails = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="container mt-4">
      <div className="card-deck d-flex flex-wrap justify-content-center gap-3">
        {results.length === 0 && (
          <p className="text-center text-muted">
            {query
              ? "No products found for your search."
              : "No products available."}
          </p>
        )}

        {results.map((product) => {
          const oldPrice = Math.floor(Math.random() * 2000 + 1000);
          const discount = Math.floor(Math.random() * 30 + 10);
          const newPrice = Math.floor(oldPrice - (oldPrice * discount) / 100);

          return (
            <div key={product.id} className="card card-hover shadow-sm">
              <div className="image-container">
                <img
                  src={product.image_url}
                  alt={product.productDisplayName}
                  className="product-image"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/300x200?text=No+Image";
                  }}
                  onClick={() => goToDetails(product.id)}
                  style={{ cursor: "pointer" }}
                />
                <FaHeart
                  className={`wishlist-icon ${
                    likedItems[product.id] ? "active" : ""
                  }`}
                  onClick={() => toggleLike(product.id)}
                />
              </div>

              <div className="card-body">
                <h6 className="card-title">{product.productDisplayName}</h6>

                <div className="price">
                  <span style={{ color: "green", fontWeight: "bold" }}>
                    ₹{newPrice}
                  </span>{" "}
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "gray",
                      fontSize: "0.8rem",
                    }}
                  >
                    ₹{oldPrice}
                  </span>{" "}
                  <span style={{ color: "red" }}>({discount}% OFF)</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductCard;
