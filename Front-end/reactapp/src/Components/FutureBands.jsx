import React, { useState, useEffect } from "react";
import "../styles/FutureBands.css";

const FutureBands = () => {
  const [images, setImages] = useState([]); 
  const [scrollIndex, setScrollIndex] = useState(0);
  const visibleItems = 3;
  const maxIndex = Math.ceil(images.length / visibleItems) - 1;

   const handleNext = () => {
     if (scrollIndex < maxIndex) {
       setScrollIndex(scrollIndex + 1);
     }
   };

   const handlePrev = () => {
     if (scrollIndex > 0) {
       setScrollIndex(scrollIndex - 1);
     }
   };


  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/sections/6/images");
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Error fetching section 6 images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <section>
      <div id="scroll-section-2">
        <h5>Future Bands</h5>

      
        <button
          className={`arrow left controls2 ${scrollIndex === 0 ? "hidden" : ""}`}
          onClick={handlePrev}
        >
          &#10094;
        </button>

    
        <div
          className="scroll-content-2"
          style={{
            transform: `translateX(-${scrollIndex * 100}%)`
          }}
        >
          {images.length > 0 ? (
            images.map((item) => (
              <div className="scroll-item-2" key={item.imageId}>
                <img
                  src={`http://localhost:8080${item.imagePath}`}
                  alt={item.description || "Future Band"}
                />
              </div>
            ))
          ) : (
            <p className="no-data">No Future Band images available</p>
          )}
        </div>
        <button
          className={`arrow right controls2 ${scrollIndex >= maxIndex ? "hidden" : ""}`}
          onClick={handleNext}
        >
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default FutureBands;
