import React, { useEffect, useState } from "react";
import "../styles/ScrollCarousel.css";

const ScrollCarousel = () => {
  const [electronics, setElectronics] = useState([]);
  const [sticker, setSticker] = useState([]);
  const [furniture, setFurniture] = useState([]);


  const [scrollIndex, setScrollIndex] = useState(0);
  const [scrollIndex1, setScrollIndex1] = useState(0);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [electronicsRes, stickerRes, furnitureRes] = await Promise.all([
          fetch("http://localhost:8080/api/sections/2/images").then((res) => res.json()),
          fetch("http://localhost:8080/api/sections/3/images").then((res) => res.json()),
          fetch("http://localhost:8080/api/sections/4/images").then((res) => res.json()),
        ]);

        setElectronics(electronicsRes);
        setSticker(stickerRes);
        setFurniture(furnitureRes);
      } catch (err) {
        console.error("Error fetching carousel data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  const visibleItems = 5;
  const maxIndex = Math.ceil(electronics.length / visibleItems) - 1;
  const maxIndex1 = Math.ceil(furniture.length / visibleItems) - 1;

  if (loading) {
    return <p>Loading carousel images...</p>;
  }

  return (
    <section>
      <div id="scroll-section">
        <h5>Best of Electronics</h5>
        <button
          className={`arrow left ${scrollIndex === 0 ? "hidden" : ""}`}
          onClick={() => setScrollIndex(Math.max(scrollIndex - 1, 0))}
        >
          &#10094;
        </button>

        <div
          className="scroll-content"
          style={{ transform: `translateX(-${scrollIndex * 80}%)` }}
        >
          {electronics.length > 0 ? (
            electronics.map((item) => (
              <div key={item.imageId} className="scroll-item">
                <img
                  src={`http://localhost:8080${item.imagePath}`}
                  alt={item.description || "Electronic item"}
                />
                <h6>{item.description}</h6>
                <p>{item.price ? `From ₹${item.price}` : ""}</p>
                <p>{item.offer || ""}</p>
              </div>
            ))
          ) : (
            <p>No electronics found.</p>
          )}
        </div>

        <button
          className={`arrow right ${scrollIndex >= maxIndex ? "hidden" : ""}`}
          onClick={() => setScrollIndex(Math.min(scrollIndex + 1, maxIndex))}
        >
          &#10095;
        </button>
      </div>

      <div id="aeroplane-sticker">
        {sticker.length > 0 ? (
          sticker.map((item) => (
            <img
              key={item.imageId}
              src={`http://localhost:8080${item.imagePath}`}
              alt={item.description || "Sticker"}
              width="100%"
            />
          ))
        ) : (
          <p>No stickers available.</p>
        )}
      </div>

      <div id="scroll-section-1">
        <h5>Furniture & More</h5>
        <button
          className={`arrow left ${scrollIndex1 === 0 ? "hidden" : ""}`}
          onClick={() => setScrollIndex1(Math.max(scrollIndex1 - 1, 0))}
        >
          &#10094;
        </button>

        <div
          className="scroll-content-1"
          style={{ transform: `translateX(-${scrollIndex1 * 60}%)` }}
        >
          {furniture.length > 0 ? (
            furniture.map((item) => (
              <div key={item.imageId} className="scroll-item-1">
                <img
                  src={`http://localhost:8080${item.imagePath}`}
                  alt={item.description || "Furniture item"}
                  width="160px"
                />
                <h6>{item.description}</h6>
               <p>{item.price ? `From ₹${item.price}` : ""}</p>
              </div>
            ))
          ) : (
            <p>No furniture found.</p>
          )}
        </div>

        <button
          className={`arrow right ${scrollIndex1 >= maxIndex1 ? "hidden" : ""}`}
          onClick={() => setScrollIndex1(Math.min(scrollIndex1 + 1, maxIndex1))}
        >
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default ScrollCarousel;
