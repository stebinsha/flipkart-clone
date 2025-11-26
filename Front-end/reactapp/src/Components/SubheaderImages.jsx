import React, { useEffect, useState } from "react";
import "../styles/SubheaderImages.css";
import { MdKeyboardArrowDown } from "react-icons/md";

const SubheaderImages = () => {
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
    <section className="subheader-section">
      <div className="container-fluid" id="headerimgs">
        <div className="row no-gutters">
          {headerItems.length > 0 ? (
            headerItems.map((item) => (
              <div className="col header-col" key={item.imageId}>
                <p className="header-text">
                  {item.description}
                  {dropdownSections.includes(item.description) && (
                    <MdKeyboardArrowDown />
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

export default SubheaderImages;
