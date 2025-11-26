import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductDetails.css";
import { FaShoppingCart, FaBolt, FaStar, FaThumbsDown } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const location=useLocation();
  const navigate=useNavigate();
  const queryParams=new URLSearchParams(location.search);
  const query=queryParams.get("query")||"";

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/products/${id}`);
        if (!res.ok) throw new Error("Product not found");

        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);
 

  if (loading) return <p className="text-center mt-5">Loading...</p>;
  if (!product) return <p className="text-center mt-5">Product not found.</p>;

  const oldPrice = Math.floor(Math.random() * 2000 + 1000);
  const discount = Math.floor(Math.random() * 30 + 10);
  const newPrice = Math.floor(oldPrice - (oldPrice * discount) / 100);

  return (
    <div className="product-details-page container mt-5">
 
      <div className="product-details">
         
        <div className="left-section">
          <img
            src={product.image_url}
            alt={product.productDisplayName}
            className="product-detail-image"
            onError={(e) =>
              (e.target.src =
                "https://via.placeholder.com/300x200?text=No+Image")
            }
          />

          <div className="buttons mt-4">
            <button className="btn  me-3" id="cart"  onClick={() =>  navigate(`/cart/${product.id}`, {
      state: {
        product: product,
        oldPrice: oldPrice,
        newPrice: newPrice,
        discount: discount
      }
    }) }  style={{ cursor: "pointer" }}>
              <FaShoppingCart className="me-2" />
              Add to Cart
            </button>

            <button className="btn" id="buy">
              <FaBolt className="me-2" />
              Buy Now
            </button>
          </div>
        </div>

       
        <div className="details-info">
          <h3>{product.productDisplayName}</h3>
          <p style={{ color: "gray" }}>{product.gender}</p>

          <div className="price mb-3">
            <span className="new-price">₹{newPrice}</span>
            <span className="old-price">₹{oldPrice}</span>
            <span className="discount">({discount}% OFF)</span>
          </div>

          <p>{product.masterCategory || "General Category"}</p>

          <p style={{ color: "#555" }}>
            This is a high-quality product made for comfort and durability.
          </p>
        </div>
      </div>

 
      <div className="ratings-container">
        
        <div className="ratings-header">
          <h2>Ratings & Reviews</h2>

          <div className="rating-summary">
            <span className="rating-score">3.6</span>
            <FaStar className="rating-star" />
            <span className="rating-text">34,378 ratings and 1,404 reviews</span>
          </div>

          <button className="rate-product-btn">Rate Product</button>
        </div>

        <div className="feel-images-wrapper">
        
          <div>
            <h4>What our customers felt:</h4>

            <div className="feel-section">
              <div className="feel-icon">😊</div>
              <div className="feel-tags">
                <span className="tag">Look</span>
                <span className="tag">Colour</span>
                <span className="tag">Light Weight</span>
              </div>

              <div className="feel-icon">😐</div>
              <div className="feel-tags">
                <span className="tag">Comfort</span>
                <span className="tag">Material Quality</span>
                <span className="tag">True to Specs</span>
              </div>
            </div>
          </div>
 
          <div className="customer-images-block">
            <h3>Images uploaded by customers:</h3>

            <div className="customer-images">
  <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800" alt="" />
 

  <div className="more-images">
    <img src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=800" alt="" />
    <span className="more-count">+12</span>
  </div>

            </div>
          </div>
        </div>
 
        <div className="single-review">
          <div className="review-header">
            <span className="review-rating">
              4 <FaStar className="rev-star" />
            </span>
            <p className="review-title">Nice 👌👌</p>
          </div>

          <img
            src={product.image_url}
            className="review-photo"
            alt="review"
          />

          <div className="review-user-info">
            <strong>PS MRZ</strong>
            <span>11 months ago</span>
            <p className="buyer-status">✔ Certified Buyer, Sitapur</p>
          </div>

          <div className="review-actions">
            <div className="action">
              <AiFillLike /> 339
            </div>
            <div className="action">
              <FaThumbsDown /> 126
            </div>
            <div className="action three-dots">⋮</div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProductDetails;
