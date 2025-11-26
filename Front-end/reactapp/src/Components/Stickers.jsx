import React, { useState, useEffect } from "react";
import "../styles/Stickers.css";

const Stickers = () => {
  const [stickers, setStickers] = useState([]);

  useEffect(() => {
    const fetchStickers = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/sections/7/images");
        const data = await res.json();
        setStickers(data);
      } catch (err) {
        console.error("Error fetching stickers:", err);
      }
    };

    fetchStickers();
  }, []);

  return (
    <section>
      <div className="stickers-container">
        {stickers.length > 0 ? (
          stickers.map((sticker) => (
            <div className="stickers" key={sticker.imageId}>
              <img
                src={`http://localhost:8080${sticker.imagePath}`}
                alt={sticker.description || "Sticker"}
              />
            </div>
          ))
        ) : (
          <p>No stickers available.</p>
        )}
      </div>
    </section>
  );
};

export default Stickers;
