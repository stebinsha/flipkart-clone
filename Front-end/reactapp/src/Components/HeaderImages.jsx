import React, { useEffect, useState } from "react";
import "../styles/HeaderImages.css";
import { MdKeyboardArrowDown } from "react-icons/md";

const HeaderImages = () => {
  const [headerItems, setHeaderItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/api/sections/1/images")
      .then((res) => res.json())
      .then((data) => {
        setHeaderItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching header images:", err);
        setLoading(false);
      });
  }, []);

  const dropdownSections = [
    "Fashion",
    "Electronics",
    "Furniture",
    "Toys & More",
    "Two Wheelers",
  ];

  if (loading) {
    return <p>Loading header images...</p>;
  }

  return (
    <section>
      <div className="container-fluid" id="headerimgs">
        <div className="row">
          {headerItems.length > 0 ? (
            headerItems.map((item) => (
              <div className="col header-col" key={item.imageId}>
                <a href={item.redirectUrl || "#"}>
                  {item.imagePath ? (
                    <img
                      src={`http://localhost:8080${item.imagePath}`}
                      alt={item.description || "Header item"}
                      width="70px"
                      height="70px"
                    />
                  ) : (
                    <span>No Image</span>
                  )}
                </a>
                <p>
                  {item.description}
                  {dropdownSections.includes(item.description) && (
                    <MdKeyboardArrowDown className="login-arrow"/>
                  )}
                </p>
              </div>
            ))
          ) : (
            <p>No header images available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeaderImages;

 
 
 