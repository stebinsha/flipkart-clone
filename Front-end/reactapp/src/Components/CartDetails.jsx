import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import "../styles/CartDetails.css";

function CartDetails() {
  const { id } = useParams();
  const location = useLocation();

  const { product: passedProduct, oldPrice, newPrice, discount } = location.state || {};

  const [product, setProduct] = useState(passedProduct || null);
  const [loading, setLoading] = useState(!passedProduct);

  useEffect(() => {
    if (passedProduct) return;

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
  }, [id, passedProduct]);

  if (loading) return <p className="text-center mt-5">Loading...</p>;
  if (!product) return <p className="text-center mt-5">Product not found.</p>;

  const finalOld = oldPrice || Math.floor(Math.random() * 2000 + 1000);
  const finalDiscount = discount || Math.floor(Math.random() * 30 + 10);
  const finalNew =
    newPrice || Math.floor(finalOld - (finalOld * finalDiscount) / 100);

  return (
    <div className="page-wrapper">
      <div className="main-content">
        
        <div className="cart-container">
          <div className="cart-left">
            <div className="cart-left-top">
              <p className="cart-address">From Saved Addresses</p>
              <button className="pincode-btn">Enter Delivery Pincode</button>
            </div>

            <div className="cart-item">
              <img
                src={product.image_url}
                alt={product.productDisplayName}
                className="cart-image"
              />

              <div className="cart-info">
                <h4 className="cart-title">{product.productDisplayName}</h4>
                <p className="cart-sub">Size: 6, {product.gender}</p>
                <p className="cart-seller">
                  Seller: {product.masterCategory} <span className="assured">✔</span>
                </p>

                <div className="cart-prices">
                  <span className="new">₹{finalNew}</span>
                  <span className="old">₹{finalOld}</span>
                  <span className="discount">{finalDiscount}% Off</span>
                </div>

                <div className="quantity-row">
                  <button className="qty-btn">-</button>
                  <span className="qty-num">1</span>
                  <button className="qty-btn">+</button>

                  <div className="actions">
                    <button className="save">SAVE FOR LATER</button>
                    <button className="remove">REMOVE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-right">
            <h6>PRICE DETAILS</h6>

            <div className="price-row">
              <span>Price (1 item)</span>
              <span>₹{finalOld}</span>
            </div>

            <div className="price-row green">
              <span>Discount</span>
              <span>-₹{finalOld - finalNew}</span>
            </div>

            <div className="price-row green">
              <span>Coupons for you</span>
              <span>-₹50</span>
            </div>

            <div className="price-row">
              <span>Platform Fee</span>
              <span>₹7</span>
            </div>

            <hr />

            <div className="price-total">
              <span>Total Amount</span>
              <span>₹{finalNew + 7}</span>
            </div>

            <p className="savings">
              You will save ₹{finalOld - finalNew + 50} on this order
            </p>
          </div>
        </div>
 
        <div className="place">
          <button className="order-btn">PLACE ORDER</button>
        </div>

      </div>
 <hr/>
      <div className="footer">
    
        <p>Policies: Returns Policy | Terms of use | Security | Privacy</p>
        <p>&copy; 2007-2025 Flipkart.com</p>
        <p>
          Need help? Visit the <a href="">Help Center</a> or{" "}
          <a href="">Contact Us</a>
        </p>
      </div>
    </div>
  );
}

export default CartDetails;
