import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import { useNavigate } from "react-router";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  faUser,faCartShopping,faHeart,faGavel,faPlus,faGifts,faGift,faCoins,faStore as faStore2,faList,faLanguage,faTags,faBell
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [query, Setquery] = useState("");
  const [logo, setLogo] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem("flipkart_username");
    if (savedUser) setUsername(savedUser);
  }, []);

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/sections/9/images");
        const data = await res.json();
        if (data.length > 0) setLogo(data[0]);
      } catch (err) {
        console.error("Error fetching flipkart-logo:", err);
      }
    };
    fetchLogo();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  const toggleSidebar = (e) => {
    e.preventDefault();
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("flipkart_username");
    setUsername("");
    navigate("/");
  };

  return (
    <>
      <nav id="nav-bar">
        <ul>
          <li id="menu" className="menubar" onClick={toggleSidebar}>
            <a href="#">
              <span className="material-symbols-outlined">menu</span>
            </a>
          </li>

        
          <li>
            {logo ? (
              <img
                src={`http://localhost:8080${logo.imagePath}`}
                alt={logo.description || "logo"}
              />
            ) : (
              <p>No Logo</p>
            )}
          </li>
 
          <form onSubmit={handleSubmit} id="form">
            <span className="material-symbols-outlined search-icon">search</span>
            <input
              type="text"
              id="search"
              placeholder="Search for Products, Brands and More"
              value={query}
              onChange={(e) => Setquery(e.target.value)}
            />
          </form>

         
          <li className="toplist login">
            {username ? (
            
              <div className="user loggedin-user">
                <span className="material-symbols-outlined">account_circle</span>
                {username}
                <MdKeyboardArrowDown className="login-arrow" />

                <div className="login-dropdown">
                  <ul>
                    
                    <div className="list-drop">
                      <li className="drop"><a><FontAwesomeIcon icon={faUser}/> My Profile</a></li>
                      <li className="drop"><a><FontAwesomeIcon icon={faCartShopping}/> Orders</a></li>
                      <li className="drop"><a><FontAwesomeIcon icon={faHeart}/> Wishlist</a></li>
                      <li className="drop"><a onClick={handleLogout}><FontAwesomeIcon icon={faGavel}/> Logout</a></li>
                    </div>
                  </ul>
                </div>
              </div>
            ) : (
           
              <>
                <a className="user" onClick={() => navigate("/login")} style={{cursor:"pointer"}}>
                  <span className="material-symbols-outlined">account_circle</span>
                  Login
                  <MdKeyboardArrowDown className="login-arrow" />
                </a>

                <div className="login-dropdown">
                  <ul>
                    <div className="login-banner-div">
                      <li className="login-banner">
                        <span>New Customer? </span>
                        <a className="signup-link" style={{ color: "#007bff", fontWeight: "bold" }}>
                          Sign Up
                        </a>
                      </li>
                    </div>

                    <div className="horizontal-line"></div>

                    <div className="list-drop">
                      <li className="drop"><a><FontAwesomeIcon icon={faUser}/> My Profile</a></li>
                      <li className="drop"><a><FontAwesomeIcon icon={faPlus}/> Flipkart Plus Zone</a></li>
                      <li className="drop"><a><FontAwesomeIcon icon={faCartShopping}/> Orders</a></li>
                      <li className="drop"><a><FontAwesomeIcon icon={faHeart}/> Wishlist</a></li>
                      <li className="drop"><a><FontAwesomeIcon icon={faGifts}/> Rewards</a></li>
                      <li className="drop"><a><FontAwesomeIcon icon={faGift}/> Gift Cards</a></li>
                    </div>
                  </ul>
                </div>
              </>
            )}
          </li>
 
          <li className="toplist">
            <a>
              <span className="material-symbols-outlined">shopping_cart</span>
              <span className="topitem-a">Cart</span>
            </a>
          </li>
 
          <li className="toplist toplist1">
            <a>
              <span className="material-symbols-outlined">storefront</span>
              <span className="topitem-a">Become a Seller</span>
            </a>
          </li>

          <li className="toplist toplist1">
            <a><span className="material-symbols-outlined">more_vert</span></a>
          </li>
        </ul>
      </nav>

  
      <div id="sidebar" className={sidebarOpen ? "active" : ""}>
        <ul>
          <li className="fliplogo">
            <a>
              <FontAwesomeIcon icon={faUser} style={{ color: "white", fontSize: "20px" }} />
              <h5>{username ? username : "Guest User"}</h5>
            </a>
          </li>

          <li><a><FontAwesomeIcon icon={faCoins}/> SuperCoin Zone</a></li>
          <li><a><FontAwesomeIcon icon={faPlus}/> Flipkart Plus Zone</a></li>
          <hr />
          <li><a><FontAwesomeIcon icon={faList}/> All Categories</a></li>
          <li><a><FontAwesomeIcon icon={faStore2}/> More on Flipkart</a></li>
          <hr />
          <li><a><FontAwesomeIcon icon={faLanguage}/> Choose Language</a></li>
          <hr />
          <li><a><FontAwesomeIcon icon={faTags}/> Offer Zone</a></li>
          <li><a><FontAwesomeIcon icon={faStore2}/> Sell on Flipkart</a></li>
          <li><a><FontAwesomeIcon icon={faCartShopping}/> My Orders</a></li>
          <li><a><FontAwesomeIcon icon={faGift}/> Coupons</a></li>
          <li><a><FontAwesomeIcon icon={faHeart}/> My Wishlist</a></li>
          <li><a><FontAwesomeIcon icon={faBell}/> Notification</a></li>
          <li><a><FontAwesomeIcon icon={faGavel}/> Legal</a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
