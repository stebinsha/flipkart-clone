import React,{useState} from "react";
import "../styles/Sidebar.css";
import { MdKeyboardArrowDown, MdKeyboardArrowLeft, MdKeyboardArrowUp } from "react-icons/md";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
   
   const[openSections,setOpenSections]=useState({
    footwear:false,
    brand:false,
    gender:false,
    price:false,
    size1:false,
    size2:false,
    discount:false,
    color:false,
    ratings:false,
    offers:false,
    arrivals:false,
    age:false,
    availability:false
   });

  const toggleDropdown = (section) => {
    setOpenSections((prev)=>({
      ...prev,
      [section]:!prev[section],
    }));
  };
   const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Filters</h2>
      <hr/>
      <h6 className="sidebar-subhead">CATEGORIES</h6>
     <div className="dropdown" onClick={()=>toggleDropdown("footwear")}><span  className={` arrow1 ${openSections.footwear ? "rotate" : ""}`}><MdKeyboardArrowLeft/></span> <h6>{query}</h6></div>
     {openSections.footwear && ( <ul className="sidebar-list">
        <li className="sidebar-item">Womens's Footwear</li>
        <li className="sidebar-item">Kids's & Infant Footwear</li>
        <li className="sidebar-item">Men's Footwear</li>
      </ul>
     )}
      <hr/>
    <div className="filter-row" onClick={()=>toggleDropdown("brand")}><h6>BRAND</h6><span className={`arrow1 ${openSections.brand?"rotate":""}`}><MdKeyboardArrowDown/></span></div>
    {openSections.brand && (<ul className="sidebar-list"> 
      <span className="material-symbols-outlined search-icon" id="search" >search</span>
      <input type="text" className="search" placeholder="Search Brand"/>
      <br />   
<label>
  <input type="radio" name="brand" value="ADIDAS" />
  ADIDAS
</label>
<br />  
<label>
  <input type="radio" name="brand" value="NIKE" />
  NIKE
</label>
<br />
<label>
  <input type="radio" name="brand" value="PUMA" />
  PUMA
</label>
<br />
<label>
  <input type="radio" name="brand" value="Skechers" />
  Skechers
</label>
<br />
<label>
  <input type="radio" name="brand" value="CAMPUS" />
  CAMPUS
</label>
<br />
<label>
  <input type="radio" name="brand" value="REEBOK" />
  REEBOK
</label>
<br />  
<a href="" className="extra">1920 More</a>
<br />
</ul>
  )} 
  <hr/>
  <div className="filter-row" onClick={()=>toggleDropdown("gender")}><h6>GENDER</h6><span className={`arrow1 ${openSections.gender?"rotate":""}`}><MdKeyboardArrowDown/></span></div>
  {openSections.gender && (<ul className="sidebar-list">
    <label>
  <input type="radio" name="gender" value="male" />
  Men
</label>
<br />
    <label>
  <input type="radio" name="gender" value="male" />
  Women
</label>
<br />
 <label>
  <input type="radio" name="gender" value="male" />
  Boys
</label>
<br />
 <label>
  <input type="radio" name="gender" value="male" />
  Girls
</label>
<br />
 <label>
  <input type="radio" name="gender" value="male" />
  Boys & Boys
</label>
<br />
 <label>
  <input type="radio" name="gender" value="male" />
  Baby Boys & Baby Girls
</label>
<br />
 <label>
  <input type="radio" name="gender" value="male" />
  Baby Girls
</label>
<br />
 <label>
  <input type="radio" name="gender" value="male" />
  Baby Boys 
</label>
<br />
  </ul>
  )}
  <hr/>
  <div className="filter-row" onClick={()=>toggleDropdown("price")}><h6>PRICE</h6><span className={`arrow1 ${openSections.price?"rotate":""}`}><MdKeyboardArrowDown/></span></div>
  <hr/>
  <div className="filter-row" onClick={()=>toggleDropdown("size1")}><h6>SIZE-UK/INDIA</h6><span className={`arrow1 ${openSections.size1?"rotate":""}`}><MdKeyboardArrowDown/></span></div>
     {openSections.size1 && (<ul className="sidebar-list">
    <label>
  <input type="radio" name="size1" value="2" />
  2
</label>
<br />
    <label>
  <input type="radio" name="size1" value="2.5" />
  2.5
</label>
<br />
 <label>
  <input type="radio" name="size1" value="3" />
  3
</label>
<br />
 <label>
  <input type="radio" name="siz1" value="3.5" />
  3.5
</label>
<br />
 <label>
  <input type="radio" name="size1" value="4" />
  4
</label>
<br />
 <label>
  <input type="radio" name="size1" value="4.5" />
  4.5
</label>
<br />
<a href="" className="extra">20 More</a>
<br />
  </ul>
  )}
  <hr/>
  <div className="filter-row" onClick={()=>toggleDropdown("size2")}><h6>SIZE</h6><span className={`arrow1 ${openSections.size2?"rotate":""}`}><MdKeyboardArrowDown/></span></div>
   {openSections.size2 && (<ul className="sidebar-list">
    <label>
  <input type="radio" name="size" value="7" />
  7
</label>
<br />
    <label>
  <input type="radio" name="size" value="6" />
  6
</label>
<br />
 <label>
  <input type="radio" name="size" value="8" />
  8
</label>
<br />
 <label>
  <input type="radio" name="size" value="9" />
  9
</label>
<br />
 <label>
  <input type="radio" name="size" value="10" />
  10
</label>
<br />
 <label>
  <input type="radio" name="size" value="5" />
  5
</label>
<br />
<a href="" className="extra">19 More</a>
<br />
  </ul>
  )}
  <hr/>
  <div className="filter-row" onClick={()=>toggleDropdown("discount")}><h6>DISCOUNT</h6><span className={`arrow1 ${openSections.discount?"rotate":""}`}><MdKeyboardArrowDown/></span></div>
    {openSections.discount && (<ul className="sidebar-list">
    <label>
  <input type="radio" name="discount" value="30% or more" />
  30% or more
</label>
<br />
    <label>
  <input type="radio" name="discount" value="40% or more" />
  40% or more
</label>
<br />
 <label>
  <input type="radio" name="discount" value="50% or more" />
  50% or more
</label>
<br />
 <label>
  <input type="radio" name="discount" value="60% or more" />
  60% or more
</label>
<br />
 <label>
  <input type="radio" name="discount" value="70% or more" />
  70% or more
</label>
<br />
  </ul>
  )}
  <hr/>
  <div className="filter-row" onClick={()=>toggleDropdown("color")}><h6>COLOR</h6><span className={`arrow1 ${openSections.color?"rotate":""}`}><MdKeyboardArrowDown/></span></div>
  {openSections.color && (<ul className="sidebar-list">
   <span className="material-symbols-outlined search-icon" id="search" >search</span>
      <input type="text" className="search" placeholder="Search Color"/>
      <br /> 
    <label>
  <input type="radio" name="color" value="Beige" />
  Beige
</label>
<br />
    <label>
  <input type="radio" name="color" value="Black" />
  Black
</label>
<br />
 <label>
  <input type="radio" name="color" value="Blue" />
  Blue
</label>
<br />
 <label>
  <input type="radio" name="color" value="Bronze" />
  Bronze
</label>
<br />
 <label>
  <input type="radio" name="color" value="Brown" />
  Brown
</label>
<br />
<label>
  <input type="radio" name="color" value="Burgundy" />
  Burgundy
</label>
<br />
<a href="" className="extra">26 More</a>
<br />
  </ul>
  )}
  <hr/>
  <div className="filter-row" onClick={()=>toggleDropdown("ratings")}><h6>CUSTOMER RATINGS</h6><span className={`arrow1 ${openSections.ratings?"rotate":""}`}><MdKeyboardArrowDown/></span></div>
 {openSections.ratings && (<ul className="sidebar-list">
    <label>
  <input type="radio" name="ratings" value="4 &#9733; & above" />
  4 &#9733; & above
</label>
<br />
 <label>
  <input type="radio" name="ratings" value="3 &#9733; & above" />
  4 &#9733; & above
</label>
<br />
</ul>
  )}
  <hr/>
   <div className="filter-row" onClick={()=>toggleDropdown("offers")}><h6>OFFERS</h6><span className={`arrow1 ${openSections.offers?"rotate":""}`}><MdKeyboardArrowDown/></span></div>
    {openSections.offers && (<ul className="sidebar-list">
    <label>
  <input type="radio" name="offers" value="Special Price" />
  Special Price
</label>
<br />
 <label>
  <input type="radio" name="offers" value="Buy More, Save More" />
  Buy More, Save More
</label>
<br />
</ul>
  )}
  <hr/>
   <div className="filter-row" onClick={()=>toggleDropdown("arrivals")}><h6>NEW ARRIVALS</h6><span className={`arrow1 ${openSections.arrivals?"rotate":""}`}><MdKeyboardArrowDown/></span></div>
  {openSections.arrivals && (<ul className="sidebar-list">
    <label>
  <input type="radio" name="arrivals" value="New Arrivals" />
  New Arrivals
</label>
<br />
</ul>
  )}
  <hr/>
    <div className="filter-row" onClick={()=>toggleDropdown("age")}><h6>AGE GROUP</h6><span className={`arrow1 ${openSections.age?"rotate":""}`}><MdKeyboardArrowDown/></span></div>
 {openSections.age && (<ul className="sidebar-list">
     <span className="material-symbols-outlined search-icon" id="search" >search</span>
      <input type="text" className="search" placeholder="Search Age Group"/>
      <br /> 
    <label>
  <input type="radio" name="age" value="2-3 Years" />
  2-3 Years
</label>
<br />
 <label>
  <input type="radio" name="age" value="4-5 Years" />
  4-5 Years
</label>
<br />
 <label>
  <input type="radio" name="age" value="8-9 Years" />
  8-9 Years
</label>
<br />
 <label>
  <input type="radio" name="age" value="10-11 Years" />
  10-11 Years
</label>
<br />
 <label>
  <input type="radio" name="age" value="4-5 Years" />
  4-5 Years
</label>
<br />
 <label>
  <input type="radio" name="age" value="3-4 Years" />
  3-4 Years
</label>
<br />
<a href="" className="extra">32 More</a>
<br />
</ul>
  )}
  <hr/>
    <div className="filter-row" onClick={()=>toggleDropdown("availability")}><h6>AVAILABILITY</h6><span className={`arrow1 ${openSections.availability?"rotate":""}`}><MdKeyboardArrowDown/></span></div>
    {openSections.availability && (<ul className="sidebar-list">
    <label>
  <input type="radio" name="availability" value="Include Out of Stock" />
  Include Out of Stock
</label>
<br />
</ul>
  )}
    </aside>
  );
};

export default Sidebar;
