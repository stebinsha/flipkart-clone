import React, { useState, useEffect } from "react";
import "../styles/SubNavbar.css";

import { FaCartShopping } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useLocation } from "react-router";

const SubNavbar = () => {
  const [logo, setLogo] = useState([]);
   const [username, setUsername] = useState("");


  useEffect(() => {
    const savedUser = localStorage.getItem("flipkart_username");
    if (savedUser) setUsername(savedUser);
  }, []);
  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/sections/10/images");
        const data = await res.json();
        if (data.length > 0) setLogo(data);
      } catch (err) {
        console.error("Error fetching flipkart-logo:", err);
      }
    };
    fetchLogo();
  }, []);
  const location=useLocation();
  const isCartPage=location.pathname.startsWith("/cart")
  const queryParams=new URLSearchParams(location.search);
  const query=queryParams.get("query")

  

  return (
    <nav id="navbar">
  
      <div className="navbar-left">
        {logo.length > 0 &&
          logo.map((item, index) => (
            <img
              key={item.imageId}
              src={`http://localhost:8080${item.imagePath}`}
              alt={item.description || "logo"}
              className={`logo-img logo-img-${index}`}
            />
          ))}
        <a href="#" className="logo-content">
          <em>Explore</em> <span>Plus</span>
        </a>
      </div>

      <div className="navbar-center">
        <form className="search-bar">
        <input
  type="text"
  placeholder="Search for Products, Brands and More"
  value={query || ""}    
  readOnly
/>

          <span className="material-symbols-outlined search-icon">
            search
          </span>
        </form>
      </div>

    
      <div className="navbar-right">
          <button className="login-btn">{username}</button>
           {/* <div className="login-dropdown">
                  <ul>
                    
                    <div className="list-drop">
                      <li className="drop"><a><FontAwesomeIcon icon={faUser}/> My Profile</a></li>
                      <li className="drop"><a><FontAwesomeIcon icon={faCartShopping}/> Orders</a></li>
                      <li className="drop"><a><FontAwesomeIcon icon={faHeart}/> Wishlist</a></li>
                      <li className="drop"><a onClick={handleLogout}><FontAwesomeIcon icon={faGavel}/> Logout</a></li>
                    </div>
                  </ul>
                </div> */}
          {!isCartPage && (
            <>
      
         <p className="menu-item">Become a Seller</p>
        <p className="menu-item more">
          More <MdKeyboardArrowDown className="arrow1" />
        </p>
        <p className="menu-item cart">
          <FaCartShopping className="cart-icon" /> Cart
        </p>
        </>
      )}
        
       
      </div>
    </nav>
  );
};

export default SubNavbar;
