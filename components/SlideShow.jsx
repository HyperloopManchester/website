import React, { useState, useEffect } from "react";

export default function SlideShow({ id, delay, sources, isFixed, className, children }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCurrentSlideIndex((currentSlideIndex + 1) % sources.length);
    }, delay * 1000);
  });

  return (
    <div
      id={id ?? ""}
      style={{
        background: `center / cover url(${sources[currentSlideIndex]}) no-repeat ${isFixed && "fixed" || ""}`,
      }}
      className={className}
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          margin: "0 auto",
          left: "0",
          right: "0",
          textAlign: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
}
