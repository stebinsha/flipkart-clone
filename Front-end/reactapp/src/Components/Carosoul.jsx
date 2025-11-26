import React, { useState, useEffect, useRef } from "react";
import "../styles/Carosoul.css";

const Carosoul = () => {
  const [slidesData, setSlidesData] = useState([]);
  const [current, setCurrent] = useState(1);
  const intervalRef = useRef(null);
  const total = slidesData.length;

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/sections/5/images");
        const data = await res.json();
        setSlidesData(data);
      } catch (err) {
        console.error("Error fetching carousel images:", err);
      }
    };
    fetchSlides();
  }, []);

  const setSlide = (n) => {
    if (total === 0) return;
    if (n < 1) n = total;
    if (n > total) n = 1;
    setCurrent(n);
  };

  const nextSlide = () => setSlide(current + 1);
  const prevSlide = () => setSlide(current - 1);

  const restartInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => nextSlide(), 4000);
  };

  useEffect(() => {
    if (total > 0) {
      restartInterval();
      return () => clearInterval(intervalRef.current);
    }
  }, [current, total]);

  if (slidesData.length === 0) {
    return (
      <div id="slider">
        <p style={{ textAlign: "center", padding: "30px" }}>
          Loading carousel...
        </p>
      </div>
    );
  }

  return (
    <section>
      <div id="slider">
        <div id="slides">
          <div id="overflow">
            <div
              className="inner"
              style={{ marginLeft: `-${(current - 1) * 100}%` }}
            >
              {slidesData.map((slide, index) => (
                <div className="slide" key={slide.imageId || index}>
                  <div
                    className="slide-content"
                    style={{
                      backgroundImage: `url(http://localhost:8080${slide.imagePath})`,
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="controls">
          <button
            onClick={() => {
              prevSlide();
              restartInterval();
            }}
          >
            &#10094;
          </button>
          <button
            onClick={() => {
              nextSlide();
              restartInterval();
            }}
          >
            &#10095;
          </button>
        </div>

        <div id="bullets">
          {slidesData.map((slide, idx) => (
            <div
              key={slide.imageId || idx}
              className={`progress-bar ${current === idx + 1 ? "active" : ""}`}
              onClick={() => {
                setSlide(idx + 1);
                restartInterval();
              }}
            >
              <div className="fill"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carosoul;
