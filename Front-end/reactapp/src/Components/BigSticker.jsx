import React, { useState, useEffect } from "react";
import "../styles/BigSticker.css";

const BigSticker = () => {
  const [sticker, setSticker] = useState(null);

  useEffect(() => {
    const fetchSticker = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/sections/8/images");
        const data = await res.json();
        if (data.length > 0) setSticker(data[0]);
      } catch (err) {
        console.error("Error fetching big sticker:", err);
      }
    };

    fetchSticker();
  }, []);

  return (
    <section>
      <div className="big-sticker">
        {sticker ? (
          <img
            src={`http://localhost:8080${sticker.imagePath}`}
            alt={sticker.description || "Big Sticker"}
          />
        ) : (
          <p>No sticker available.</p>
        )}
      </div>
    </section>
  );
};

export default BigSticker;
